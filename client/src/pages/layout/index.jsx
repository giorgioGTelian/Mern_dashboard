import React, { useState } from "react";
import { Box, useMediaQuery } from "@mui/material";
import { Outlet } from "react-router-dom";
import Navbar from "components/Navbar";
import Sidebar from "components/Sidebar";
import { useGetUserQuery } from "state/api";
import { useSelector } from "react-redux";

const Layout = () => {
const isNonMobile = useMediaQuery("(min-width: 200px)");
const [isSidebarOpen, setIsSidebarOpen] = useState(true);
// Define the width of the sidebar based on whether it's open and the screen size
const drawerWidth = isSidebarOpen ? (isNonMobile ? 240 : 56) : 0;
// Fetch the user data
const userId = useSelector((state) => state?.global.userId);
const { data } = useGetUserQuery(userId); 


return (
<Box display={isNonMobile ? "flex" : "block"} width="100%" height="100%">
    <Sidebar
        isNonMobile={isNonMobile}
        drawerWidth={drawerWidth}
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
        user={data || {}}
    />
    <Box flexGrow={1}>
        <Navbar
            isSidebarOpen={isSidebarOpen}
            setIsSidebarOpen={setIsSidebarOpen} 
            user={data || {}}
        />
        <Outlet />
    </Box>
    </Box>
);
};

export default Layout;
