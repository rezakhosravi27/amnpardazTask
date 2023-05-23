import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "./features/users";
import chartsReducer from "./features/charts"
// ...

export const store = configureStore({
  reducer: {
    users: usersReducer,
    charts: chartsReducer
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
