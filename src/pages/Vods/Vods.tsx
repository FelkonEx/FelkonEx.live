import { useSelector } from "react-redux";

import { Content, VideoCardGrid } from "components";
import { RootState } from "state/store";
import "./Vods.scss";

export default function Vods() {
    const title = "Past Streams!";
    const description = "Missed a stream? You can check previous VODs here!";
    const videos = useSelector((state: RootState) => state.youtube.vods);

    return (
        <Content
            className="vods-container"
            title="Previous Streams!"
            description="Missed a stream? You can check previous VODs here!"
        >
            {videos.length !== 0 && <VideoCardGrid videos={videos} />}
        </Content>
    );
}
