import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";
import { UserState } from "./users.types";


// Define the initial state using that type
const initialState: UserState = {
  isLoggedIn: false,
  userData: { username: null, password: null },
};

export const usersSlice = createSlice({
  name: "user",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    loggedInHandler: (state: UserState, action: PayloadAction<boolean>) => {
      state.isLoggedIn = action.payload;
    },
    userDataHandler: (
      state: UserState,
      action: PayloadAction<{ username: string; password: string }>
    ) => {
      state.userData = action.payload;
    },
  },
});

export const { loggedInHandler, userDataHandler } = usersSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectIsLoggedIn = (state: RootState) => state.users.isLoggedIn;
export const selectUserData = (state: RootState) => state.users.userData;

export default usersSlice.reducer;
