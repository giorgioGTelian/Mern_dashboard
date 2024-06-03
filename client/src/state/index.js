import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    mode: "light",
    userId: "63701cc1f03239b7f700000e",
    appState: [], 
};
// Create a slice
export const globalSlice = createSlice({
    name: "global",
    initialState,
    reducers: {
      setMode: (state) => {
        state.mode = state.mode === "light" ? "dark" : "light";
      },
      setUser: (state, action) => {
        state.userId = action.payload;
      },
    },
  });

export const { setMode, setUser } = globalSlice.actions;

export default globalSlice.reducer;