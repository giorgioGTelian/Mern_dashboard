import React, { version } from 'react';
import { Link } from 'react-router-dom';
import ActiveLastBreadcrumb from '../../components/BreadCrumbs';
import Chat from '../../components/Chat';
import { Box } from '@mui/material';

//create an about page of the appliction version of node react and js
const about = () => {
    return (
        <>

        <Box mt={2} p={10}>
        <ActiveLastBreadcrumb />
        <br />
        <h1>About</h1>
        <p>Application version 1.0 </p>
        <p>React Version: {version}</p>
        <Link to="/">Go back to the homepage</Link>
        <br />
        <Link to="/dashboard">Go to the dashboard</Link>
        <Chat />
        </Box>
        </>
    )
}

export default about