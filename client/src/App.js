import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { themeSettings } from "theme";
import About from "./pages/about";
import Layout from "./pages/layout";
import Dashboard from "pages/dashboard";

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
            <Route element={<Layout />} >
              <Route path="/" element={<Navigate to="/dashboard" replace />} />
              <Route path="/dashboard" element={<Dashboard />} />
            </Route>
            <Route path="/about" element={<About />} />
          </Routes>
          <h1>App testing</h1>
        </ThemeProvider> 
      </BrowserRouter>
    </div>
  );
}

export default App;
