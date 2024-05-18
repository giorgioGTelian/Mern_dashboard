import { Collapse, List, ListItemButton, ListItemIcon, ListItemText, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import ExpandLessOutlinedIcon from '@mui/icons-material/ExpandLessOutlined';
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';
import SidebarItem from "./SidebarItem";
import { useSelector } from "react-redux";
import { themeSettings } from "theme";

const SidebarItemCollapse = ({ text }) => {
const [open, setOpen] = useState(false);

const appState = useSelector((state) => state.appState && state.appState.appState);

useEffect(() => {
    if (appState && typeof appState.includes === 'function' && appState.includes(text)) {
        setOpen(true);
    }
}, [appState, text]);

return (
    text && text.sidebarProps ? (
        <>
            <ListItemButton
            onClick={() => setOpen(!open)}
            sx={{
                "&: hover": {
                backgroundColor: themeSettings("light").palette.background.alt
                },
                paddingY: "12px",
                paddingX: "24px"
            }}
            >
            <ListItemIcon sx={{
                color: themeSettings("light").palette.background.alt
            }}>
                {text.sidebarProps.icon && text.sidebarProps.icon}
            </ListItemIcon>
            <ListItemText
                disableTypography
                primary={
                <Typography>
                    {text.sidebarProps.displayText}
                </Typography>
                }
            />
            {open ? <ExpandLessOutlinedIcon /> : <ExpandMoreOutlinedIcon />}
            </ListItemButton>
            <Collapse in={open} timeout="auto">
            <List>
                {text.child?.map((route, index) => (
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
