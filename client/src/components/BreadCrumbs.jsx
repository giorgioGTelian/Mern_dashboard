import * as React from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';

function handleClick(event) {
    event.preventDefault();
}

export default function ActiveLastBreadcrumb() {
    return (
        <div role="presentation" onClick={handleClick}>
        <Breadcrumbs aria-label="breadcrumb">
            <Link underline="hover" color="inherit" href="/">
            Home
            </Link>
            <Link
            underline="hover"
            color="inherit"
            href="/about"
            >
            About
            </Link>
        </Breadcrumbs>
        </div>
    );
}
