import React, { useState } from 'react';
import {
  LightModeOutlined,
  DarkModeOutlined,
  Menu as MenuIcon,
  Search,
  SettingsOutlined,
  ArrowDropDownCircleOutlined,
} from "@mui/icons-material";
import FlexBetween from './FlexBetween';
import { useDispatch } from 'react-redux';
import { setMode } from 'state';
import profileImage from 'assets/me.png';
import { AppBar, IconButton, InputBase, Toolbar, useTheme } from '@mui/material';

const Navbar = () => {
    const dispatch = useDispatch();
    const theme = useTheme();

    return (
        <AppBar
        sx={{
            position: "static",
            backgroundColor: "none",
            boxShadow: "none",
        }}
        >
            <Toolbar
            sx = {{ justifyContent: "space-between" }}>
                <FlexBetween>
                    <IconButton onClick={() => console.log('open/close sidebar')} >
                    <MenuIcon />
                    </IconButton>
                    <FlexBetween
                    backgroundColor={theme.palette.background.paper}
                    borderRadius="10px"
                    gap="3rem"
                    padding="0.1rem 1rem"
                    >
                        <InputBase placeholder='Search...' />
                    <IconButton onClick={() => dispatch(setMode('light'))}>
                        <LightModeOutlined />
                    <Search />
                    </IconButton>
                    <IconButton onClick={() => dispatch(setMode('dark'))}>
                        <DarkModeOutlined />
                    </IconButton>
                    </FlexBetween>
                </FlexBetween>
            </Toolbar>
        </AppBar>
    )
}
export default Navbar;