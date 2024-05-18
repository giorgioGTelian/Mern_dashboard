import { Collapse, List, ListItemButton, ListItemIcon, ListItemText, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import ExpandLessOutlinedIcon from '@mui/icons-material/ExpandLessOutlined';
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';
import SidebarItem from "./SidebarItem";
import { useSelector } from "react-redux";
import { themeSettings } from "theme";

const SidebarItemCollapse = ({ item }) => {
const [open, setOpen] = useState(false);

const appState = useSelector((state) => state.appState.appState);

useEffect(() => {
    if (appState.includes(item.state)) {
    setOpen(true);
    }
}, [appState, item]);

return (
    item.sidebarProps ? (
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
