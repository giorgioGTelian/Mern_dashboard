import { ListItemButton, ListItemIcon } from "@mui/material";
import { Link, useLocation } from "react-router-dom";
//import { useSelector } from "react-redux";
import { useTheme } from "@mui/material/styles";

const SidebarItem = ({ item }) => {
    //const appState = useSelector((state) => state.global.appState);
    //TODO find a solution to the appState with redux
    const theme = useTheme();
    const location = useLocation();

    return (
        item.sidebarProps && item.path ? (
        <ListItemButton
            component={Link}
            to={item.path}
            sx={{
            "&: hover": {
                backgroundColor: theme.palette.secondary[300],
            },
            backgroundColor: location.pathname === item.path ? theme.palette.neutral.main : "unset",
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
