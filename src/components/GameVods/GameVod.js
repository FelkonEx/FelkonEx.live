import React, { useState } from "react";
import classNames from "classnames";

import { GAME_TYPE } from "utils/constants";

import demoLogo from "img/demo.png";
import "./GameVod.scss";

export default function GameVod({ gameData }) {
    const { videos, type, backgroundUrl } = gameData;

    const [hover, setHover] = useState(false);

    const backgroundImageStyle = {
        backgroundImage:
            type === GAME_TYPE.DEMO
                ? `url(${demoLogo}), url(${backgroundUrl})`
                : `url(${backgroundUrl})`,
    };

    const overlayClass = classNames({
        "vod-info": true,
        blur: hover,
    });

    const containerClass = classNames({
        "game-vod": true,
        zoom: hover,
    });

    let gameVodUrls = videos.map(function (url, index) {
        return (
            <a
                className="youtube-links"
                href={url}
                target="_blank"
                rel="noreferrer"
            >
                Part {index + 1}
            </a>
        );
    });

    return (
        <div className={containerClass} style={backgroundImageStyle}>
            <div
                className={overlayClass}
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
            >
                <h1>{gameData.title}</h1>
                <br />
                <div class="video-links">{gameVodUrls}</div>
            </div>
        </div>
    );
}
