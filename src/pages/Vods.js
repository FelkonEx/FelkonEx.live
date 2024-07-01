import { useState } from "react";

import VideoCardList from "components/VideoCardList/VideoCardList";
import VideoTable from "components/VideoTable/VideoTable";
import Title from "components/Title/Title";
import Toggle from "components/Toggle/Toggle";
import { GAMES_PLAYED } from "utils/data/GamesPlayed";

import "./Vods.scss";

export default function Vods() {
    const [tableLayout, setTableLayout] = useState(false);

    const handleToggle = () => {
        setTableLayout(!tableLayout);
    };

    const title = "Past Streams!";
    const description = "Missed a stream? You can check previous VODs here!";

    return (
        <div className="vods">
            <Title title={title} description={description} />
            <Toggle
                label="Toggle me"
                defaultState={false}
                onToggle={handleToggle}
            />
            { tableLayout ? <VideoTable games={GAMES_PLAYED}/> : <VideoCardList games={GAMES_PLAYED} /> }
        </div>
    );
}
