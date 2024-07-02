import VideoCardItem from "components/VideoCardItem/VideoCardItem";

import "./VideoCardList.scss";

export default function VideoCardList({
    games,
    thumbnailView = true,
    headerLink = false,
}) {
    let cardGameList = games.map(function (game) {
        return <VideoCardItem gameData={game} thumbnail={thumbnailView} headerLink={headerLink} />;
    });

    return <div className="video-card-list">{cardGameList}</div>;
}
