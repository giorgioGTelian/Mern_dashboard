import { ListItemButton, ListItemIcon } from "@mui/material";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useTheme } from "@mui/material/styles";

const SidebarItem = ({ item }) => {
    const appState = useSelector((state) => state.global.appState);
    const theme = useTheme();

    return (
        item.sidebarProps && item.path ? (
        <ListItemButton
            component={Link}
            to={item.path}
            sx={{
            "&: hover": {
                backgroundColor: theme.palette.secondary[300],
            },
            backgroundColor: appState === item.state ? theme.palette.primary[600] : "unset",
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
