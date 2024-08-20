import { createSlice } from "@reduxjs/toolkit";
import { loginUserThunk } from "../thunk/authThunk";

const initialUser = localStorage.getItem("user")
  ? JSON.parse(localStorage.getItem("user"))
  : null;
const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: initialUser,
    isLoading: false,
    error: null,
  },
  reducers: {
    logout(state) {
      state.user = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUserThunk.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(loginUserThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        const user = action.payload; // Assume payload contains the user object
        state.user = user;
        localStorage.setItem("user", JSON.stringify(user));
      })
      .addCase(loginUserThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
