import { createSlice } from "@reduxjs/toolkit";
import { authApi } from "../../services/auth";

const initialState = {
  user: null,
  isLoadingUser: true,
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
        authApi.endpoints.getUserInfo.matchFulfilled,
        (state, { payload }) => {
          const { user } = payload;
          state.user = user;
          state.isLoadingUser = false;
        }
      )
      .addMatcher(
        authApi.endpoints.getUserInfo.matchPending,
        (state) => {
          state.isLoadingUser = true;
        }
      )
      .addMatcher(
        authApi.endpoints.getUserInfo.matchRejected,
        (state) => {
          state.token = null;
          state.user = null;
          state.isLoadingUser = false;
        }
      )
      .addMatcher(
        authApi.endpoints.login.matchFulfilled,
        (state, { payload }) => {
          const { user, token } = payload;
          state.isLoadingUser = false;
          state.token = token;
          state.user = user;
          localStorage.setItem("token", token);
        }
      )
  },
});

export const { logout } = slice.actions;

export default slice.reducer;
