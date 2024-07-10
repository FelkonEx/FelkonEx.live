import { configureStore } from "@reduxjs/toolkit";

import youtubeReducer from "./slices/youtubeSlice";
import sevenTvReducer from "./slices/sevenTvSlice";
import twitchReducer  from "./slices/twitchSlice";

export const store = configureStore({
    reducer: {
        youtube: youtubeReducer,
        sevenTv: sevenTvReducer,
        twitch: twitchReducer
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
