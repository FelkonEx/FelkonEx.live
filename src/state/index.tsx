import {
    fetchYoutubeCompilationsAsync,
    fetchYoutubeVodsAsync
} from "./slices/youtubeSlice";
import { fetchSevenTvEmotesAsync } from "./slices/sevenTvSlice";
import { fetchTwitchEmotesASync } from "./slices/twitchSlice";

const actions = {
    fetchYoutubeCompilationsAsync,
    fetchYoutubeVodsAsync,
    fetchSevenTvEmotesAsync,
    fetchTwitchEmotesASync
};

export default actions;
