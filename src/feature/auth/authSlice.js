import { createSlice } from "@reduxjs/toolkit";
import { getUserFromLocalStorage } from "../../helper/getUserFromLocalStorage";

// --- get the user and token from localStorage initially ---
const { user, accessToken } = getUserFromLocalStorage();

// --- initial state ---
const initialState = {
  user,
  accessToken,
};

// --- authSlice ---
export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload.user;
      state.accessToken = action.payload.accessToken;
    },

    logOut: (state) => {
      state.user = null;
      state.accessToken = null;
      localStorage.removeItem("user");
      localStorage.removeItem("accessToken");
    },
  },
});

// --- export actions ---
export const { setUser, logOut } = authSlice.actions;

// --- export reducer ---
export default authSlice.reducer;
