import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    mode: "light",
    user: null,
    token: null,
};
// Create a slice
export const globalSlice = createSlice({
    name: "global",
    initialState,
    reducers: {
        setMode: (state, action) => {
            state.mode = action.payload; // Set the mode
        },
        setUser: (state, action) => {
            state.user = action.payload; // Set the user
        },
        setToken: (state, action) => {
            state.token = action.payload; // Set the token
        },
    },
});

export const { setMode, setUser, setToken } = globalSlice.actions;

export default globalSlice.reducer;