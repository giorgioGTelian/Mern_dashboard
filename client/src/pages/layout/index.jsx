import React, { useState } from "react";
import { Box, useMediaQuery } from "@mui/material";
import { Outlet } from "react-router-dom";
import Navbar from "components/Navbar";
import Sidebar from "components/Sidebar";

const Layout = () => {
const isNonMobile = useMediaQuery("(min-width: 600px)");
const [isSidebarOpen, setIsSidebarOpen] = useState(true);
// Define the width of the sidebar based on whether it's open and the screen size
const drawerWidth = isSidebarOpen ? (isNonMobile ? 240 : 56) : 0;

return (
<Box display={isNonMobile ? "flex" : "block"} width="100%" height="100%">
    <Sidebar
        isNonMobile={isNonMobile}
        drawerWidth={drawerWidth}
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
    />
    <Box flexGrow={1}>
        <Navbar
            isSidebarOpen={isSidebarOpen}
            setIsSidebarOpen={setIsSidebarOpen} 
        />
        <Outlet />
    </Box>
    </Box>
);
};

export default Layout;
