import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";

// Define a type for the slice state
interface UserState {
  isLoggedIn: boolean;
}

// Define the initial state using that type
const initialState: UserState = {
  isLoggedIn: false,
};

export const usersSlice = createSlice({
  name: "user",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    loggedInHandler: (state, action: PayloadAction<boolean>) => {
      state.isLoggedIn = action.payload;
    },
  },
});

export const { loggedInHandler } = usersSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectIsLoggedIn = (state: RootState) => state.users.isLoggedIn;

export default usersSlice.reducer;
