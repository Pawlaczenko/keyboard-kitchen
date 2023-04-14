import { configureStore } from '@reduxjs/toolkit'
import fridgeReducer from '../features/fridge/fridgeSlice';
import desktopReducer from '../features/desktop/desktopSlice';
import worktopReducer from '../features/worktop/worktopSlice';
import zindexReducer from '../features/zindex/zindexSlice';

export const store = configureStore({
  reducer: {
    desktop: desktopReducer,
    fridge: fridgeReducer,
    worktop: worktopReducer,
    zindex: zindexReducer
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch