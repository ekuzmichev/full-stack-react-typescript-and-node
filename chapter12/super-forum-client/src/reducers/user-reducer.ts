import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface UserProfile {
  id: number;
  userName: string;
}

export interface UserState {
  userProfile: UserProfile | null;
}

const initialState: UserState = { userProfile: null };

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserProfile: (state: UserState, action: PayloadAction<UserProfile>) => {
      state.userProfile = action.payload;
    },
  },
});

export const userReducer = userSlice.reducer;

export const { setUserProfile } = userSlice.actions;
