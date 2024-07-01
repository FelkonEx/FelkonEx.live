import React, { useState } from "react";
import classNames from "classnames";

import { GAME_TYPE, YOUTUBE_LINK_URL } from "utils/constants";

import "./VideoTable.scss";

export default function VideoCardItem({ games }) {
    let gameVideoRow = games.map(function (game) {
        return (
            <tr>
                <td>
                    {game.type === GAME_TYPE.DEMO && "(Demo)"} {game.title}
                </td>
                <td>{gameLinks(game.videoIds)}</td>
            </tr>
        );
    });

    function gameLinks(links) {
        return links.map(function (link, index) {
            return (
                <a
                    href={YOUTUBE_LINK_URL.replace("{0}", link)}
                    target="_blank"
                    rel="noreferrer"
                >
                    Part {index + 1}
                </a>
            );
        });
    }

    return (
        <table className="video-table">
            <div className="video-links">{gameVideoRow}</div>
        </table>
    );
}
