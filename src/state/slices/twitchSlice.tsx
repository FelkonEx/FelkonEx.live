import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

import { twitchApi } from "API/TwitchApi";
import { twitchApiEmoteData } from "types";
interface twitchTvState {
    emotes: Array<twitchApiEmoteData>;
}

const initialState: twitchTvState = {
    emotes: []
};

const twitchSlice = createSlice({
    name: "twitch",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchTwitchEmotesASync.pending, () => {
                console.log("Pending - Twitch Emotes");
            })
            .addCase(
                fetchTwitchEmotesASync.fulfilled,
                (state, action: PayloadAction<Array<twitchApiEmoteData>>) => {
                    console.log("Fetched " + action.payload.length + " Twitch Emote(s)");
                    state.emotes = action.payload;
                }
            );
    }
});

export const fetchTwitchEmotesASync = createAsyncThunk(
    "twitch/fetchEmotesAsync",
    async () => {
        const emotes: Array<twitchApiEmoteData> = await twitchApi.fetchEmotes();
        return emotes;
    }
);

export default twitchSlice.reducer;