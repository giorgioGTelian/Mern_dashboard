import React from "react";
import {
  Box,
  Drawer,
  IconButton,
  List,
  Typography,
  useTheme,
} from "@mui/material";
import {
  ChevronLeft
} from "@mui/icons-material";
import appRoutes from "../routes/appRoutes";
import SidebarItem from "./sidebarTools/SidebarItem";
import SidebarItemCollapse from "./sidebarTools/SidebarItemCollapse";
import FlexBetween from "./FlexBetween";
import { useEffect } from "react";



const Sidebar = ({
  drawerWidth,
  isSidebarOpen,
  setIsSidebarOpen,
  isNonMobile,
}) => {
  const theme = useTheme();

 
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setIsSidebarOpen(false);
      } else {
        setIsSidebarOpen(true);
      }
    };
     // Call the handleResize function initially to set the state based on the initial viewport width
    handleResize();
  
     // Attach the event listener
    window.addEventListener('resize', handleResize);
     // Clean up function
    return () => {
       // Remove the event listener when the component is unmounted
      window.removeEventListener('resize', handleResize);
    };
  }, [setIsSidebarOpen]);
  
  return (
    <Box component="nav">
      {isSidebarOpen && (
      <Drawer
      open={isSidebarOpen}
      onClose={() => setIsSidebarOpen(false)}
      variant="persistent"
      anchor="left"
      sx={{
        width: drawerWidth,
        "& .MuiDrawer-paper": {
          color: theme.palette.secondary[200],
          backgroundColor: theme.palette.background.alt,
          boxSixing: "border-box",
          borderWidth: isNonMobile ? 0 : "2px",
          width: drawerWidth,
        },
      }}
    >
      <Box width="100%">
            <Box m="1.5rem 2rem 2rem 3rem">
              <FlexBetween color={theme.palette.secondary.main}>
                <Box display="flex" alignItems="center" gap="0.5rem">
                  <Typography variant="h4" fontWeight="bold">
                    Scolastico v1
                  </Typography>
                </Box>
                {!isNonMobile && (
                  <IconButton onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
                    <ChevronLeft />
                  </IconButton>
                )}
              </FlexBetween>
            </Box>
      <List disablePadding>
        {appRoutes.map((route, index) => (
          route.sidebarProps ? (
            route.child ? (
              <SidebarItemCollapse item={route} key={index} />
            ) : (
              <SidebarItem item={route} key={index} />
            )
          ) : null
        ))}
      </List>
    </Box>
    </Drawer>
      )}
  </Box>
  );
};

export default Sidebar;