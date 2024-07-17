import { youtubeApiVideoData } from "types";
import { url } from "utils";

import "./VideoCardGrid.scss";
import { CSSProperties } from "react";

type VideoCardGridProps = {
    videos: youtubeApiVideoData[];
};

export default function VideoCardGrid({ videos }: VideoCardGridProps) {
    let cardGameList = videos.map(function (
        video: youtubeApiVideoData,
        index: number
    ) {
        return (
            <div className="video-card-item">
                {/* <a href={url.YOUTUBE_LINK_URL.replace("{0}", video.videoId)} /> */}
                <div className="video-card-image-wrapper">
                    <div className="video-card-image">
                        <img
                            src={video.thumbnailUrl}
                            className="responsive-image"
                        ></img>
                    </div>
                </div>
            </div>
        );
    });

    return <div className="video-card-grid">{cardGameList}</div>;
}
