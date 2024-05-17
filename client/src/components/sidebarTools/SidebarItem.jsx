import { ListItemButton, ListItemIcon } from "@mui/material";
//import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const SidebarItem = ({ item }) => {
    //const appState = useSelector((state) => state.appState.appState);

    return (
        item.sidebarProps && item.path ? (
        <ListItemButton
            component={Link}
            to={item.path}
            sx={{
            paddingY: "12px",
            paddingX: "24px"
            }}
        >
            <ListItemIcon >
            {item.sidebarProps.icon && item.sidebarProps.icon}
            </ListItemIcon>
            {item.sidebarProps.displayText}
        </ListItemButton>
        ) : null
    );
};

export default SidebarItem;
