import { createSlice } from "@reduxjs/toolkit";

interface UserRegistrationState {
  username: string;
  password: string;
  passwordConfirmation: string;
  email: string;
  resultMessage: string;
}

const initialState: UserRegistrationState = {
  username: "bob",
  password: "",
  email: "admin@google.com",
  passwordConfirmation: "",
  resultMessage: "",
};

const userRegistrationReducer = createSlice({
  name: "userRegistration",
  initialState,
  reducers: {
    setUsername: (state, action: { payload: string }) => {
      state.username = action.payload;
    },
    setPassword: (state, action: { payload: string }) => {
      state.password = action.payload;
    },
    setPasswordConfirmation: (state, action: { payload: string }) => {
      state.passwordConfirmation = action.payload;
    },
    setEmail: (state, action: { payload: string }) => {
      state.email = action.payload;
    },
    setResultMessage: (state, action: { payload: string }) => {
      state.resultMessage = action.payload;
    },
  },
});

export const { getInitialState, reducer, actions } = userRegistrationReducer;
