import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter/counterSlice";
import youtubeReducer from "./youtube/youtubeSlice";
import sevenTvReducer from "./sevenTv/sevenTvSlice";

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        youtube: youtubeReducer,
        sevenTv: sevenTvReducer
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;