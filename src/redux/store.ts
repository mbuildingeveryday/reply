import { configureStore } from "@reduxjs/toolkit";
import commentSlice from "./slices/commentSlice";
import userSlice from "./slices/userSlice";

export const store = configureStore({
    reducer: {
        comment: commentSlice,
        user: userSlice
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch