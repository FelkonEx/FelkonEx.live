import React, { useState } from "react";
import classNames from "classnames";

import { data, enums, url } from "utils";
import { gameData, videoApiData } from "types";

import demoLogo from "img/demo_gameCard.png";
import "./VideoCardItem.scss";

type VideoCardItemProps = {
    data: videoApiData;
};

const regexPlays = /FelkonEx Plays/i;
const regexNextFest = /\(Steam Next Fest\)/i;

export default function VideoCardItem({ data }: VideoCardItemProps) {
    const { title, videoId, thumbnailUrl }: videoApiData = data;

    const properTitle = title
        .replace(regexPlays, "")
        .replace(regexNextFest, "");
    const isDemo = title.match(regexNextFest);

    const [hover, setHover] = useState(false);

    const handleMouseExit = () => {
        setHover(false);
    };

    const backgroundImageStyle = {
        backgroundImage: isDemo
            ? `url(${demoLogo}), url(${thumbnailUrl})`
            : `url(${thumbnailUrl})`,
    };

    const infoOverlayClass = classNames({
        "video-info": true,
        blur: hover,
    });

    const containerClass = classNames({
        "video-card-item": true,
        overlay: isDemo,
        zoom: hover,
    });

    return (
        <div className={containerClass} style={backgroundImageStyle}>
            <div
                className={infoOverlayClass}
                onMouseEnter={() => setHover(true)}
                onMouseLeave={handleMouseExit}
            >
                <a
                    href={url.YOUTUBE_LINK_URL.replace("{0}", videoId)}
                    target="_blank"
                >
                    {properTitle}
                </a>
            </div>
        </div>
    );
}
