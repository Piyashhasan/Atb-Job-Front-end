import { createSlice } from "@reduxjs/toolkit";
import { getUserFromLocalStorage } from "../../helper/getUserFromLocalStorage";

// Get the user and token from localStorage initially
const { user, accessToken } = getUserFromLocalStorage();

const initialState = {
  user,
  accessToken,
};

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

export const { setUser, logOut } = authSlice.actions;

export default authSlice.reducer;
