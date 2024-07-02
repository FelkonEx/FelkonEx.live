import { useState } from "react";
import {VideoCardList, Title, Toggle} from "components";
import { GAMES_PLAYED } from "utils/data/GamesPlayed";

import "./Vods.scss";

export default function Vods() {
    const [displayThumbnails, setDisplayThumbnails] = useState(true);

    const handleToggle = () => {
        setDisplayThumbnails(!displayThumbnails);
    };

    const title = "Past Streams!";
    const description = "Missed a stream? You can check previous VODs here!";

    return (
        <div className="vods">
            <Title title={title} description={description} />
            <Toggle
                label="Youtube Thumbnails?"
                defaultState={displayThumbnails}
                onToggle={handleToggle}
            />
                <VideoCardList games={GAMES_PLAYED} thumbnailView={displayThumbnails} />
        </div>
    );
}
