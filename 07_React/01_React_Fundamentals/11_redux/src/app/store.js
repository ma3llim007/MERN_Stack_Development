import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../../features/counter/counterSlice";

export const CounterStore = configureStore({
    reducer: {
        counter: counterReducer,
    },
})