import { configureStore } from '@reduxjs/toolkit'
import fridgeReducer from '../features/fridge/fridgeSlice';

export const store = configureStore({
  reducer: {
    fridge: fridgeReducer
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch