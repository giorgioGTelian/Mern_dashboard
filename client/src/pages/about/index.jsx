import React from 'react';
import { Link } from 'react-router-dom';
import ActiveLastBreadcrumb from '../../components/BreadCrumbs';
import { version } from 'react';

//create an about page of the appliction version of node react and js
const about = () => {
    return (
        <>

        
        <ActiveLastBreadcrumb />
        <br />
        <h1>About</h1>
        <p>React Version: {version}</p>
        <Link to="/">Go back to the homepage</Link>
        <br />
        <Link to="/dashboard">Go to the dashboard</Link>
        


        </>
    )
}

export default about