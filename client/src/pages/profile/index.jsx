import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';
import { useGetUserQuery } from 'state/api';
import { useSelector } from 'react-redux';

const Profile = () => {
const [name, setName] = useState('');
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const userId = useSelector((state) => state?.global.userId);
const { data } = useGetUserQuery(userId); 
const user = data || {};



const handleNameChange = (event) => {
    setName(event.target.value);
};

const handleEmailChange = (event) => {
    setEmail(event.target.value);
};

const handlePasswordChange = (event) => {
    setPassword(event.target.value);
};

const handleSubmit = (event) => {
    event.preventDefault();
    // Add your logic here to update the user's profile
    console.log('Profile updated:', { name, email, password });
};

return (
        <form onSubmit={handleSubmit}>
        <TextField
            label={user.name}
            value={name}
            onChange={handleNameChange}
            fullWidth
            margin="normal"
        />
        <TextField
            label={user.email}
            value={email}
            onChange={handleEmailChange}
            fullWidth
            margin="normal"
        />
        <TextField
            label="Password"
            type="password"
            value={password}
            onChange={handlePasswordChange}
            fullWidth
            margin="normal"
        />
        <Button type="submit" variant="contained" color="primary">
            Salva
        </Button>
        </form>
);
};

export default Profile;
