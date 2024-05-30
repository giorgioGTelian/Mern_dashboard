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
import AdministratorOverview from "pages/administrators_tools/admin_overview/administratorOverview";
import WithTwoColumnsView from "./components/checkoutPages/WithTwoColumns";
import  General  from "./pages/administrators_tools/Account/General/General";
import Security from "./pages/administrators_tools/Account/Security/Security";
import Notifications from "./pages/administrators_tools/Account/Notifications/Notifications";
import { Billing } from "./pages/administrators_tools/Account";
import PasswordResetCover from "./pages/forgot_password/PasswordResetCover";
import NotFound from "./pages/NotFound";
import Faq from "./pages/Faq";
import UserListsView from "pages/administrators_tools/admin_overview/User_lists/userListsView";
import AddAccountView from "pages/administrators_tools/admin_overview/Add_account/AddAccountView";




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
              <Route path="*" element={<NotFound />} />
              <Route path="/profilo" element={<Profile />} />
              <Route path="/calendario" element={<Calendar />} />
              <Route path="/statistiche" element={<AdministratorOverview />} />
              <Route path="/blocks/checkout-pages/with-two-columns" element={<WithTwoColumnsView />} />
              <Route path="/account-general" element={<General />} />
              <Route path="/account-security" element={<Security />} />
              <Route path="/account-notifications" element={<Notifications />} />
              <Route path="/account-billing" element={<Billing />} />
              <Route path="/User_lists" element={<UserListsView />} />
              <Route path="/Add_account" element={<AddAccountView />} />
            </Route>
            <Route path="/registrati" element={<SignUp />} />
            <Route path="/password-reset" element={<PasswordResetCover />} />
            <Route path="/FAQs" element={<Faq />} />
          </Routes>
        </ThemeProvider> 
      </BrowserRouter>
    </div>
  );
}

export default App;
