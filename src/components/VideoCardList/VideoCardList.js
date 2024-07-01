import VideoCardItem from "components/VideoCardItem/VideoCardItem";

import "./VideoCardList.scss"

export default function VideoCardList({ games }) {
    let cardGameList = games.map(function (game) {
        return <VideoCardItem gameData={game} />;
    });

    return <div className="video-card-list">{cardGameList}</div>;
}
