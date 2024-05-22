import React from 'react';
import { Accordion, AccordionDetails, AccordionSummary, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material';
import { ExpandMore } from '@mui/icons-material';
import { useGetAllUsersQuery } from 'state/api';


const NavBarAllUser = () => {

    const { data: users, isLoading } = useGetAllUsersQuery();

    if (isLoading) return <div>Loading...</div>;

    return (
        <Accordion>
        <AccordionSummary
            expandIcon={<ExpandMore />}
            aria-controls="panel1a-content"
            id="panel1a-header"
            >
            <Typography>Lista Utenti</Typography>
            </AccordionSummary>
            <AccordionDetails>
            <List>
                {users.map((user) => (
                <ListItem key={user._id}>
                    <ListItemAvatar>
                    </ListItemAvatar>
                    <ListItemText primary={user.name} />
                </ListItem>
                ))}
            </List>
            </AccordionDetails>
        </Accordion>
        )
}

export default NavBarAllUser