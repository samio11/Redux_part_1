import { configureStore, Store } from "@reduxjs/toolkit";
import counterSlice from "./feature/counter/counterSlice";
export const store = configureStore({
  reducer: {
    count: counterSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
