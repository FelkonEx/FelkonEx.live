export type youtubeApiVideoData = {
    videoId: string;
    title: string;
    thumbnailUrl: string;
};

export type sevenTvApiEmoteData = {
    name: string;
    username: string;
    url: string;
    fileInfo: sevenTvFileInfo;
};

export type sevenTvFileInfo = {
    name?: string;
    // static_name?: string;
    width?: number;
    height?: number;
    format?: string;
};

export type twitchApiEmoteData = {
    name: string;
    imageUrl: string;
    emoteType: string;
    format: string;
};
