import { useSelector } from "react-redux";
import { RootState } from "state/store";

import { Title, VideoCardGrid } from "components";

export default function ClipCompilations() {
    const videos = useSelector((state: RootState) => state.youtube.compilations);
    
    const title = "Past Streams!";
    const description = "Missed a stream? You can check previous VODs here!";

    return (
        <div className="vods">
            <Title title={title} description={description} />
            {videos.length !== 0 && <VideoCardGrid videos={videos} />}
        </div>
    );
}
