import { configureStore } from "@reduxjs/toolkit";
import anecdoteReducer from "./reducers/anecdoteReducer";
import notificationReduc from "./reducers/notificationReducer"
import filterReducer from "./reducers/filterReducer";

const store = configureStore({
    reducer: {
        anecdotes:anecdoteReducer,
        noti:notificationReduc,
        filter:filterReducer
    }
})


export default store