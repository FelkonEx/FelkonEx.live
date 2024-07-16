import { url } from "utils";
import { youtubeApiVideoData } from "types";

import "./VideoCardGridItem.scss";

type VideoCardItemProps = {
    videos: youtubeApiVideoData;
};

export default function VideoCardGridItem({ videos }: VideoCardItemProps) {
    const { title, thumbnailUrl, videoId }: youtubeApiVideoData = videos;
    return (
        <div>
            <div className="video-card-grid-item-container">
                <a href={url.YOUTUBE_LINK_URL.replace("{0}", videoId)} />
                <img src={thumbnailUrl}></img>
                <div className="title-container">{title}</div>
            </div>
        </div>
    );
}
