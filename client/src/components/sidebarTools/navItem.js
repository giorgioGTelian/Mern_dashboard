// navItems.js to be used in Sidebar.jsx making it easier to manage the sidebar items

import React from "react";
import {
    HomeOutlined,
    ShoppingCartOutlined,
    Groups2Outlined,
    ReceiptLongOutlined,
    PointOfSaleOutlined,
    TodayOutlined,
    CalendarMonthOutlined,
    AdminPanelSettingsOutlined,
    TrendingUpOutlined,
    PieChartOutlined,
    SettingsOutlined,
} from "@mui/icons-material";

const navItems = [
    {
        text: "Dashboard",
        icon: <HomeOutlined />,
        path: "/dashboard",
    },
    {
        text: "Gestione didattica",
        icon: null,
        children: [
            {
                text: "Subitem 1",
                path: "/gestione-didattica/subitem1",
            },
            {
                text: "Subitem 2",
                path: "/gestione-didattica/subitem2",
            },
        ],
    },
    {
        text: "Anagrafica",
        icon: null,
        path: "/anagrafica",
    },
    {
        text: "CRM",
        icon: null,
        path: "/crm",
    },
    {
        text: "Prodotti",
        icon: <ShoppingCartOutlined />,
        path: "/prodotti",
    },
    {
        text: "Clienti",
        icon: <Groups2Outlined />,
        path: "/clienti",
    },
    {
        text: "Transazioni",
        icon: <ReceiptLongOutlined />,
        path: "/transazioni",
    },
    {
        text: "Rendicontazione",
        icon: null,
        path: "/rendicontazione",
    },
    {
        text: "Overview",
        icon: <PointOfSaleOutlined />,
        path: "/overview",
    },
    {
        text: "Giornaliero",
        icon: <TodayOutlined />,
        path: "/giornaliero",
    },
    {
        text: "Mensile",
        icon: <CalendarMonthOutlined />,
        path: "/mensile",
    },
    {
        text: "Analisi contabilità",
        icon: <PieChartOutlined />,
        path: "/analisi-contabilita",
    },
    {
        text: "Impostazioni Gestionale",
        icon: null,
        path: "/impostazioni-gestionale",
    },
    {
        text: "Amministrazione",
        icon: <AdminPanelSettingsOutlined />,
        path: "/amministrazione",
    },
    {
        text: "Performance",
        icon: <TrendingUpOutlined />,
        path: "/performance",
    },
    {
        text: "Impostazioni generali",
        icon: <SettingsOutlined />,
        path: "/impostazioni-generali",
    },
];

export default navItems;
