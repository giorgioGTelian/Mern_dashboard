import React from 'react';
import { Accordion, AccordionDetails, AccordionSummary, MenuItem, Typography } from '@mui/material';
import { ExpandMore } from '@mui/icons-material';
import { useGetAllUsersQuery } from 'state/api';
import { useDispatch } from "react-redux";
import { setUser } from "state";


const NavBarAllUser = () => {

    const { data: users, isLoading } = useGetAllUsersQuery();
    const dispatch = useDispatch();

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
            {isLoading ? (
                <MenuItem>Loading...</MenuItem>
            ) : (
                users.map((user) => (
                    <MenuItem onClick={() => dispatch(setUser(user.id))}>
                        {user.name}
                    </MenuItem>
                ))
            )}
            </AccordionDetails>
        </Accordion>
        )
}

export default NavBarAllUser