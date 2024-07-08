import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

import { youtubeApi } from "API/YoutubeApi";
import { videoApiData } from "types";

interface YoutubeState {
    vods: Array<videoApiData>;
    compilations: Array<videoApiData>;
}

const initialState: YoutubeState = {
    vods: [],
    compilations: [],
};

const youtubeSlice = createSlice({
    name: "youtube",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchVodsAsync.pending, () => {
                console.log("pending");
            })
            .addCase(
                fetchVodsAsync.fulfilled,
                (state, action: PayloadAction<Array<videoApiData>>) => {
                    console.log("Fetched " + action.payload.length + " VOD(s)");
                    state.vods = action.payload;
                }
            );

        builder
            .addCase(fetchCompilationsAsync.pending, () => {
                console.log("pending");
            })
            .addCase(
                fetchCompilationsAsync.fulfilled,
                (state, action: PayloadAction<Array<videoApiData>>) => {
                    console.log(
                        "Fetched " + action.payload.length + " Compilation(s)"
                    );
                    state.compilations = action.payload;
                }
            );
    },
});

export const fetchVodsAsync = createAsyncThunk(
    "counter/fetchVodsAsync",
    async () => {
        const vods: Array<videoApiData> = await youtubeApi.fetchVods();
        return vods;
    }
);

export const fetchCompilationsAsync = createAsyncThunk(
    "counter/fetchCompilationsAsync",
    async () => {
        const vods: Array<videoApiData> = await youtubeApi.fetchCompilations();
        return vods;
    }
);

export default youtubeSlice.reducer;
