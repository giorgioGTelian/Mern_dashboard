import React, { useState } from "react";
import { Link } from 'react-router-dom';
import {
    LightModeOutlined,
    DarkModeOutlined,
    Menu as MenuIcon,
    Search,
    ArrowDropDownOutlined,
    AlbumOutlined,
    Notifications,
} from "@mui/icons-material";
import FlexBetween from "./FlexBetween";
import { useDispatch } from "react-redux";
import { setMode } from "state";
import profileImage from "assets/me.png";
import {
    AppBar,
    Button,
    Box,
    Typography,
    IconButton,
    InputBase,
    Toolbar,
    Menu,
    MenuItem,
    useTheme,
    Avatar,
    Divider,
    ListItemIcon,
} from "@mui/material";
import { Logout, PersonAdd, Settings } from "@mui/icons-material";
import NavBarAllUser from "./navbarTools/NavBarAllUser";

const Navbar = ({ user, isSidebarOpen, setIsSidebarOpen }) => {
    const dispatch = useDispatch();
    const theme = useTheme();
    
    const [anchorEl, setAnchorEl] = useState(null);
    const isOpen = Boolean(anchorEl);
    const handleClick = (event) => setAnchorEl(event.currentTarget);
    const handleClose = () => setAnchorEl(null);
    
return (
    <AppBar
    sx={{
        position: "static !important",
        background: "none",
        boxShadow: "none",
    }}
    >
    <Toolbar sx={{ justifyContent: "space-between" }}>
        {/* LEFT SIDE */}
        <FlexBetween>
        <IconButton onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
            <MenuIcon />
        </IconButton>
        <FlexBetween
            backgroundColor={theme.palette.background.alt}
            borderRadius="9px"
            gap="3rem"
            p="0.1rem 1.5rem"
        >
            <InputBase placeholder="Cerca..." />
            <IconButton>
            <Search />
            </IconButton>
        </FlexBetween>
        </FlexBetween>

        {/* RIGHT SIDE */}
        <FlexBetween gap="1.5rem">
        <IconButton onClick={() => dispatch(setMode())}>
            {theme.palette.mode === "dark" ? (
            <DarkModeOutlined sx={{ fontSize: "25px" }} />
            ) : (
            <LightModeOutlined sx={{ fontSize: "25px" }} />
            )}
        </IconButton>
        <IconButton>
            <Notifications sx={{ fontSize: "25px" }} />
        </IconButton>

        <FlexBetween >
            <Button
            onClick={handleClick}
            sx={{
                justifyContent: "space-between",
                alignItems: "center",
                textTransform: "none",
                color: theme.palette.secondary[100],
                gap: "0.5rem",
            }}
            >
            <Box textAlign="left">
                <Typography
                fontWeight="bold"
                fontSize="0.85rem"
                sx={{ color: theme.palette.secondary.dark }}
                >
                </Typography>
                <Typography
                fontSize="0.75rem"
                sx={{ color: theme.palette.dark }}
                >
                </Typography>
            </Box>
            <Avatar src={profileImage} /> <Typography sx={{ color: theme.palette.neutral.dark }}>
                {user.name}
            </Typography>
            <ArrowDropDownOutlined
                sx={{ color: theme.palette.neutral.dark }}
            />
            </Button>
            <Menu
            anchorEl={anchorEl}
            open={isOpen}
            onClose={handleClose}
            anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
            PaperProps={{
                elevation: 0,
            sx: {
                overflow: 'visible',
                filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                mt: 1.5,
                paddingRight: '0 !important',
                '& .MuiAvatar-root': {
                width: 32,
                height: 32,
                ml: -0.5,
                mr: 1,
                color: theme.palette.secondary[100],
                },
            },
            }}
            transformOrigin={{ horizontal: 'right', vertical: 'top' }}
            >
                <MenuItem component={Link} to="/profilo" >
                <Avatar src={profileImage} /> {user.name}
                </MenuItem>
                <MenuItem component={Link} to="/aggiungi_account">
                <Avatar /> account secondario
                </MenuItem>
                <Divider />
                <MenuItem onClick={handleClose}>
                <ListItemIcon>
                    <PersonAdd fontSize="small" />
                </ListItemIcon>
                aggiungi un altro account
                </MenuItem>
                <MenuItem>
                <NavBarAllUser />
                </MenuItem>
                <MenuItem onClick={handleClose}>
                <ListItemIcon>
                    <Settings fontSize="small" />
                </ListItemIcon>
                Impostazioni
                </MenuItem>
                <MenuItem component={Link} to="/about">
                <ListItemIcon>
                    <AlbumOutlined fontSize="small" />
                </ListItemIcon> 
                Informazione Applicazione
                </MenuItem>
                <MenuItem onClick={handleClose}> {/* Logout TODO */}
                <ListItemIcon>
                    <Logout fontSize="small" />
                </ListItemIcon>
                esci
                </MenuItem>
            </Menu>
        </FlexBetween>
        </FlexBetween>
    </Toolbar>
    </AppBar>
);
};

export default Navbar;
