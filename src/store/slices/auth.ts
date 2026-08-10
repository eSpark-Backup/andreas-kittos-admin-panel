import { createSlice } from "@reduxjs/toolkit";
import { authApi } from "../../services/auth";

const initialState = {
  user: null,
  token: localStorage.getItem("token"),
};

const slice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.user = null;
      state.token = null;
      localStorage.removeItem("token");
    },
  },
  extraReducers: (builder) => {
    builder
      .addMatcher(
        authApi.endpoints.login.matchFulfilled,
        (state, { payload }) => {
          const { user, token } = payload;
          state.token = token;
          state.user = user;
          localStorage.setItem("token", token);
        }
      )
  },
});

export const { logout } = slice.actions;

export default slice.reducer;
