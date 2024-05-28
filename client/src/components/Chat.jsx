import * as React from 'react';
import Box from '@mui/material/Box';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import Key from '@mui/icons-material/Key';
import { LiveHelp } from '@mui/icons-material';

const actions = [
    { icon: <LiveHelp />, name: 'Faq', link: '/FAQs'},
    { icon: <Key />, name: 'Reset Password', link: '/password-reset'}
];

export default function BasicSpeedDial() {
    return (
        <Box sx={{ height: 320, transform: 'translateZ(0px)', flexGrow: 1 }}>
        <SpeedDial
            ariaLabel="SpeedDial basic example"
            sx={{ position: 'absolute', bottom: 16, right: 16 }}
            icon={<SpeedDialIcon />}
        >
            {actions.map((action) => (
            <SpeedDialAction
                key={action.name}
                icon={action.icon}
                tooltipTitle={action.name}
                onClick={() => {window 
                    .location
                    .assign(action.link)}
                }
            />
            ))}
        </SpeedDial>
        </Box>
    );
}
