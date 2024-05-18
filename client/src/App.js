import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { themeSettings } from "theme";
import About from "./pages/about";
import Layout from "./pages/layout";
import Dashboard from "pages/dashboard";
import Profile from "pages/profile";
import SignIn from "pages/signin/signin";
import SignUp from "pages/signup/signup";
import Calendar from "pages/calendar/calendar";


function App() {
  const mode = useSelector((state) => state.global.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]); // Get the theme
  return (
    <div className="app">
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Routes >
            {/* Add all of you routes here */}
            <Route path="/" element={<SignIn />} />
            <Route element={<Layout />} >
              <Route path="/" element={<Navigate to="/dashboard" />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/about" element={<About />} />
              <Route path="*" element={<Navigate to="/404" />} />
              <Route path="/profilo" element={<Profile />} />
              <Route path="/calendario" element={<Calendar />} />
            </Route>
            <Route path="/registrati" element={<SignUp />} />
          </Routes>
        </ThemeProvider> 
      </BrowserRouter>
    </div>
  );
}

export default App;
