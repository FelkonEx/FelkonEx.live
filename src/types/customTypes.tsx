export type gameData = {
    title: string;
    videoIds: string[];
    steamId: string;
    state: string;
    type: string;
};

export type videoData = {
    title: string;
    videoIds: string[];
    type: string;
    thumbnailUrl: string,
    steamId: string;
};

// Data structure from the felkonex-live-server
export type videoApiData = {
    videoId: string,
    title: string,
    thumbnailUrl: string,
};

export type sevenTvApiData = {
    name?: string,
    username?: string,
    url?: string,
    fileName?: fileName
};

export type fileName = {
    name?: string;
    static_name?: string;
    width?: number;
    height?: number;
    format?: string;
};
