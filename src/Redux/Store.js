import { configureStore } from "@reduxjs/toolkit";
import  postSlice  from "./PostSlice";

const store = configureStore({
    reducer: {
        posts:postSlice
    }
});

export default store;