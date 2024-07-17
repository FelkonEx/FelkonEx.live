import { url } from "utils";
import { youtubeApiVideoData } from "types";

import "./VideoCardItem.scss";

type VideoCardItemProps = {
    videos: youtubeApiVideoData;
};

export default function VideoCardItem({ videos }: VideoCardItemProps) {
    const { title, thumbnailUrl, videoId }: youtubeApiVideoData = videos;
    return (
        <div className="video-card-item-container">
            {/* <a href={url.YOUTUBE_LINK_URL.replace("{0}", videoId)} /> */}
            <div className="video-card-image">
                <div className="video-card-image-wrapper">
                    <img src={thumbnailUrl} />
                </div>
            </div>
        </div>
    );
}
