import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

import { youtubeApi } from "API/YoutubeApi";
import { youtubeApiVideoData } from "types";

interface YoutubeState {
    vods: Array<youtubeApiVideoData>;
    compilations: Array<youtubeApiVideoData>;
}

const initialState: YoutubeState = {
    vods: [],
    compilations: []
};

const youtubeSlice = createSlice({
    name: "youtube",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchYoutubeVodsAsync.pending, () => {
                console.log("Pending - Youtube VODs");
            })
            .addCase(
                fetchYoutubeVodsAsync.fulfilled,
                (state, action: PayloadAction<Array<youtubeApiVideoData>>) => {
                    console.log("Fetched " + action.payload.length + " VOD(s)");
                    state.vods = action.payload;
                }
            );

        builder
            .addCase(fetchYoutubeCompilationsAsync.pending, () => {
                console.log("Pending - Youtube Compilations");
            })
            .addCase(
                fetchYoutubeCompilationsAsync.fulfilled,
                (state, action: PayloadAction<Array<youtubeApiVideoData>>) => {
                    console.log(
                        "Fetched " + action.payload.length + " Compilation(s)"
                    );
                    state.compilations = action.payload;
                }
            );
    }
});

export const fetchYoutubeVodsAsync = createAsyncThunk(
    "youtube/fetchYoutubeVodsAsync",
    async () => {
        const vods: Array<youtubeApiVideoData> = await youtubeApi.fetchVods();
        return vods;
    }
);

export const fetchYoutubeCompilationsAsync = createAsyncThunk(
    "counter/fetchCompilationsAsync",
    async () => {
        const vods: Array<youtubeApiVideoData> = await youtubeApi.fetchCompilations();
        return vods;
    }
);

export default youtubeSlice.reducer;
