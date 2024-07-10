import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

import { sevenTvApi } from "API/SevenTvApi";
import { sevenTvApiEmoteData } from "types";

interface sevenTvState {
    emotes: Array<sevenTvApiEmoteData>;
}

const initialState: sevenTvState = {
    emotes: []
};

const sevenTvSlice = createSlice({
    name: "sevenTv",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchSevenTvEmotesAsync.pending, () => {
                console.log("pending");
            })
            .addCase(
                fetchSevenTvEmotesAsync.fulfilled,
                (state, action: PayloadAction<Array<sevenTvApiEmoteData>>) => {
                    console.log("Fetched " + action.payload.length + " VOD(s)");
                    state.emotes = action.payload;
                }
            );
    }
});

export const fetchSevenTvEmotesAsync = createAsyncThunk(
    "sevenTv/fetchSevenTvEmotesAsync",
    async () => {
        const emotes: Array<sevenTvApiEmoteData> = await sevenTvApi.fetchEmotes();
        return emotes;
    }
);

export default sevenTvSlice.reducer;
