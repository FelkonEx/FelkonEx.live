import React, { useState } from "react";
import classNames from "classnames";

import { enums, url } from "utils";

import demoLogo from "img/demo_gameCard.png";
import "./VideoCardItem.scss";

export default function VideoCardItem({
    gameData,
    thumbnail,
    headerLink = false,
}) {
    const { videoIds, type, steamId } = gameData;

    const [hover, setHover] = useState(false);
    const [thumbnailIndex, setThumbnailIndex] = useState(
        Math.floor(Math.random() * videoIds.length)
    );

    const infoOverlayClass = classNames({
        "video-info": true,
        blur: hover,
    });

    const containerClass = classNames({
        "video-card-item": true,
        overlay: type === enums.GAME_TYPE.DEMO,
        // thumbnail: thumbnail,
        // steam: !thumbnail,
        zoom: hover,
    });

    const generateBackgroundUrl = thumbnail
        ? url.YOUTUBE_THUMBNAIL_URL.replace(
              "{0}",
              videoIds[thumbnailIndex]
          )
        : url.STEAM_THUMBNAIL_URL.replace("{0}", steamId);

    const backgroundImageStyle = {
        backgroundImage:
            type === enums.GAME_TYPE.DEMO
                ? `url(${demoLogo}), url(${generateBackgroundUrl})`
                : `url(${generateBackgroundUrl})`,
    };

    let gameVodUrls = videoIds.map(function (videoId, index) {
        return (
            <div className="youtube-link">
                <a
                    href={url.YOUTUBE_LINK_URL.replace("{0}", videoId)}
                    target="_blank"
                    rel="noreferrer"
                >
                    Part {index + 1}
                </a>
            </div>
        );
    });

    const handleMouseExit = () => {
        setHover(false);
        let videoArrLength = videoIds.length;

        videoArrLength !== 1 &&
            setThumbnailIndex(
                thumbnailIndex + 1 === videoArrLength ? 0 : thumbnailIndex + 1
            );
    };

    return (
        <div className={containerClass} style={backgroundImageStyle}>
            <div
                className={infoOverlayClass}
                onMouseEnter={() => setHover(true)}
                onMouseLeave={handleMouseExit}
            >
                <h1>{gameData.title}</h1>
                <br />
                <div className="video-links">{gameVodUrls}</div>
            </div>
        </div>
    );
}
