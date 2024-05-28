import { ListItemButton, ListItemIcon } from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import { useTheme } from "@mui/material/styles";

const SidebarItem = ({ item }) => {
    const theme = useTheme();
    const location = useLocation();

    // Ensure item.path is always an array
    const paths = Array.isArray(item.path) ? item.path : [item.path];

    return (
        item.sidebarProps && paths.length > 0 ? (
        <ListItemButton
            component={Link}
            to={paths[0]} // Use the first path as the link destination
            sx={{
            "&: hover": {
                backgroundColor: theme.palette.secondary[300],
            },
            backgroundColor: paths.includes(location.pathname) ? theme.palette.neutral.main : "unset",
            paddingY: "12px",
            paddingX: "24px"
            }}
            >
            <ListItemIcon sx={{
            color: theme.palette.secondary[100]
            }}>
            {item.sidebarProps.icon && item.sidebarProps.icon}
            </ListItemIcon>
            {item.sidebarProps.displayText}
        </ListItemButton>
        ) : null
    );
};

export default SidebarItem;