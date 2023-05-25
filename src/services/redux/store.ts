import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "./features/users";
import { combineReducers } from "@reduxjs/toolkit";
import chartsReducer from "./features/charts"; 
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';



const reducers = combineReducers({
  users: usersReducer, 
  charts: chartsReducer
}); 

// Config redux persist for save in local storage
const persistConfig = {
  key: 'root',
  storage,
}; 

const persistedReducer = persistReducer(persistConfig, reducers); 


export const store = configureStore({
  reducer: persistedReducer
});

export const persistor = persistStore(store); 

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
