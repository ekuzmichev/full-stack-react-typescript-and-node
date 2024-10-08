import { createSlice } from "@reduxjs/toolkit";

export interface UserState {
  username: string;
  password: string;
  passwordConfirmation: string;
  resultMessage: string;
  isSubmitEnabled: boolean;
}

const initialState: UserState = {
  username: "",
  password: "",
  passwordConfirmation: "",
  resultMessage: "",
  isSubmitEnabled: false,
};

const userReducer = createSlice({
  name: "user",
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
    setResultMessage: (state, action: { payload: string }) => {
      state.resultMessage = action.payload;
    },
    setSubmitEnabled: (state, action: { payload: boolean }) => {
      state.isSubmitEnabled = action.payload;
    },
  },
});

export const { getInitialState, reducer, actions } = userReducer;
