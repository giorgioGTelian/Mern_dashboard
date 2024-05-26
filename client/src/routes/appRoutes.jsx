import DashboardPageLayout from "../pages/dashboard/index";
import HomePage from "../pages/about/index";
/* import DefaultPage from "../pages/dashboard/DefaultPage";
import DashboardIndex from "../pages/dashboard/DashboardIndex";
import ChangelogPage from "../pages/changelog/ChangelogPage";
import AnalyticsPage from "../pages/dashboard/AnalyticsPage";
import SaasPage from "../pages/dashboard/SaasPage";
import ComponentPageLayout from "../pages/component/ComponentPageLayout"; */
import WithTwoColumnsView from "../components/checkoutPages/WithTwoColumns";
import Page from '../pages/administrators_tools/Account/components/Page/Page';
import {
    AdminPanelSettingsOutlined,
    AppsOutlined,
    DashboardOutlined,
    ArticleOutlined,
    FormatListBulletedOutlined,
} from "@mui/icons-material";

const appRoutes = [
    {
        path: "/dashboard",
        element: <DashboardPageLayout />,
        state: "dashboard",
        sidebarProps: {
        displayText: "Dashboard",
        icon: <DashboardOutlined />,
        },
    },
    {
        state: "component",
        sidebarProps: {
        displayText: "Didattica",
        icon: <AppsOutlined />,
        },
        child: [
        {
            path: "/iscrizioni",
            element: <HomePage />,
            state: "component.alert",
            sidebarProps: {
            displayText: "Iscrizioni",
            },
        },
        {
            path: "/lezioni",
            // element: <ButtonPage />,
            state: "component.button",
            sidebarProps: {
            displayText: "lezioni",
            },
        },
        {
            path: "/calendario",
            // element: <ButtonPage />,
            state: "component.button",
            sidebarProps: {
            displayText: "calendario",
            },
        },
        {
            path: "/gestione_scolastica",
            // element: <ButtonPage />,
            state: "component.button",
            sidebarProps: {
            displayText: "gestione scolastica",
            },
        },
        ],
    },
    {
        state: "documentation",
        sidebarProps: {
        displayText: "Anagrafica",
        icon: <ArticleOutlined />,
        },
        child: [
        {
            path: "/docenti",
            element: <HomePage />,
            state: "component.alert",
            sidebarProps: {
            displayText: "Docenti",
            },
        },
        {
            path: "/studenti",
            // element: <ButtonPage />,
            state: "component.button",
            sidebarProps: {
            displayText: "Studenti",
            },
        },
        {
            path: "/genitori",
            // element: <ButtonPage />,
            state: "component.button",
            sidebarProps: {
            displayText: "Genitori",
            },
        },
        {
            path: "/materie",
            // element: <ButtonPage />,
            state: "component.button",
            sidebarProps: {
            displayText: "Materie",
            },
        },
        {
            path: "/aule",
            // element: <ButtonPage />,
            state: "component.button",
            sidebarProps: {
            displayText: "Aule",
            },
        },
        {
            path: "/gestione_anagrafica",
            // element: <ButtonPage />,
            state: "component.button",
            sidebarProps: {
            displayText: "gestione anagrafica",
            },
        },
        ],
    },
    {
        state: "changelog",
        sidebarProps: {
        displayText: "CRM",
        icon: <FormatListBulletedOutlined />,
        },
        child: [
        {
            path: "/clienti",
            element: <HomePage />,
            state: "component.alert",
            sidebarProps: {
            displayText: "Clienti",
            },
        },
        {
            path: "/transazioni",
            // element: <ButtonPage />,
            state: "component.button",
            sidebarProps: {
            displayText: "transazioni",
            },
        },
        ],
    },
    {
        state: "analytics",
        sidebarProps: {
        displayText: "Amministrazione",
        icon: <AdminPanelSettingsOutlined />,
        },
        child: [
        {
            path: "/impostazioni_generali",
            element: <HomePage />,
            state: "component.alert",
            sidebarProps: {
            displayText: "Impostazioni generali",
            },
        },
        {
            path: "/statistiche",
            // element: <ButtonPage />,
            state: "component.button",
            sidebarProps: {
            displayText: "Statistiche",
            },
        },
        {
            path: '/blocks/checkout-pages/with-two-columns',
            renderer: (params = {}) => <WithTwoColumnsView {...params} />,
        },
        {
            path: '/account-billing',
            renderer: (params = {}) => <Page {...params} />,
        },
        ],
    },
];

export default appRoutes;
