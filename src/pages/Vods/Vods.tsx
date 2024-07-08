import { useEffect, useState } from "react";
import { Title, Toggle, VideoCardGrid } from "components";
import { useSelector } from "react-redux";
import { RootState } from "state/store";
import "./Vods.scss";

export default function Vods() {
    const title = "Past Streams!";
    const description = "Missed a stream? You can check previous VODs here!";
    const videos = useSelector((state: RootState) => state.youtube.vods);
    return (
        <div className="vods">
            <Title title={title} description={description} />
            {videos.length !== 0 && <VideoCardGrid videos={videos} />}
        </div>
    );
}
