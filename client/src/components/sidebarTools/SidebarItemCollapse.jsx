import { Collapse, List, ListItemButton, ListItemIcon, ListItemText, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import ExpandLessOutlinedIcon from '@mui/icons-material/ExpandLessOutlined';
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';
import SidebarItem from "./SidebarItem";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

const SidebarItemCollapse = ({ item }) => {
    const [open, setOpen] = useState(false);

    const appState = useSelector((state) => state.global.appState);

    const location = useLocation();

    useEffect(() => {
        if (appState.includes(item.state)) {
            setOpen(true);
        }

        // Check if any child paths match the current location
        if (item.child?.some(route => Array.isArray(route.path) ? route.path.includes(location.pathname) : route.path === location.pathname)) {
            setOpen(true);
        }
    }, [appState, item, location]);

    return (
        item.sidebarProps ? (
        <>
            <ListItemButton
            onClick={() => setOpen(!open)}
            sx={{
                "&: hover": {
                backgroundColor: "rgba(0, 0, 0, 0.04)",
                },
                paddingY: "12px",
                paddingX: "24px"
            }}
            >
            <ListItemIcon sx={{
                color: "inherit",
            }}>
                {item.sidebarProps.icon && item.sidebarProps.icon}
            </ListItemIcon>
            <ListItemText
                disableTypography
                primary={
                <Typography>
                    {item.sidebarProps.displayText}
                </Typography>
                }
            />
            {open ? <ExpandLessOutlinedIcon /> : <ExpandMoreOutlinedIcon />}
            </ListItemButton>
            <Collapse in={open} timeout="auto">
            <List>
                {item.child?.map((route, index) => (
                route.sidebarProps ? (
                    route.child ? (
                    <SidebarItemCollapse item={route} key={index} />
                    ) : (
                    <SidebarItem item={route} key={index} />
                    )
                ) : null
                ))}
            </List>
            </Collapse>
        </>
        ) : null
    );
};

export default SidebarItemCollapse;
