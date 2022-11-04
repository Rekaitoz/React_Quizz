import { createSlice } from "@reduxjs/toolkit";

const initialValue = "";

export const listAuth = createSlice({
  name: "token",
  initialState: {
    tokens: initialValue,
    account: initialValue,
    id: initialValue,
    username: initialValue,
  },
  reducers: {
    addTokenUser: (state, action) => {
      state.tokens = action.payload.token;
      state.id = action.payload.id;
      state.username = action.payload.username;
      state.account = "User";
    },
    addTokenGuest: (state, action) => {
      state.tokens = action.payload;
      state.account = "Guest";
    },
    deleteToken: (state) => {
      state.tokens = "";
      state.id = "";
      state.username = "";
      state.account = "";
    },
  },
});

export const { addTokenUser, addTokenGuest, deleteToken } = listAuth.actions;
export default listAuth.reducer;
