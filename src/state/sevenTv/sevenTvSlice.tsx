import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

import { sevenTvApi } from "API/SevenTvApi";
import { sevenTvApiData } from "types";

interface sevenTvState {
    emotes: Array<sevenTvApiData>;
}

const initialState: sevenTvState = {
    emotes: [],
}

const sevenTvSlice = createSlice({
    name: "sevenTv",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(
            fetchSevenTvEmotesAsync.pending, () => {
                console.log('pending');
            }
        ).addCase(
            fetchSevenTvEmotesAsync.fulfilled,
            (state, action: PayloadAction<Array<sevenTvApiData>>) => {
                console.log("Fetched " + action.payload.length + " VOD(s)")
                state.emotes = action.payload;
            }
        );
    },
});

export const fetchSevenTvEmotesAsync = createAsyncThunk(
    "counter/fetchEmotesAsync",
    async () => {
        const vods: Array<sevenTvApiData> = await sevenTvApi.fetchEmotes();
        return vods;
    }
);

export default sevenTvSlice.reducer;
