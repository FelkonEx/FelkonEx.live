import React, { useState } from "react";
import classNames from "classnames";

import { data, enums, url } from "utils";
import { gameData, videoApiData } from "types";

import demoLogo from "img/demo_gameCard.png";
import "./VideoCardGridItem.scss";

type VideoCardItemProps = {
    videos: videoApiData;
};

// const regexPlays = /FelkonEx Plays/i;
// const regexNextFest = /\(Steam Next Fest\)/i;

export default function VideoCardGridItem({ videos }: VideoCardItemProps) {
    const { title, thumbnailUrl, videoId}: videoApiData = videos;

    // const properTitle = title
    //     .replace(regexPlays, "")
    //     .replace(regexNextFest, "");
    // const isDemo = title.match(regexNextFest);

    // const [hover, setHover] = useState(false);

    // const handleMouseExit = () => {
    //     setHover(false);
    // };

    // const backgroundImageStyle = {
    //     backgroundImage: isDemo
    //         ? `url(${demoLogo}), url(${thumbnailUrl})`
    //         : `url(${thumbnailUrl})`,
    // };

    // const infoOverlayClass = classNames({
    //     "video-info": true,
    //     blur: hover,
    // });

    // const containerClass = classNames({
    //     "video-card-item": true,
    //     overlay: isDemo,
    //     zoom: hover,
    // });

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
