import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counters/CounterSlice";

export const store = configureStore({
    reducer: {
        counter: counterReducer,
    },
})
