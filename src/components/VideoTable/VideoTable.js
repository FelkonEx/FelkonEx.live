import React from "react";
import { enums, url } from "utils";

import "./VideoTable.scss";

export default function VideoTable({ games }) {
    let gameVideoRow = games.map(function (game) {
        return (
            <tr>
                <td>
                    {game.type === enums.GAME_TYPE.DEMO && "(Demo)"} {game.title}
                </td>
                <td>{gameLinks(game.videoIds)}</td>
            </tr>
        );
    });

    function gameLinks(links) {
        return links.map(function (link, index) {
            return (
                <a
                    href={url.YOUTUBE_LINK_URL.replace("{0}", link)}
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
