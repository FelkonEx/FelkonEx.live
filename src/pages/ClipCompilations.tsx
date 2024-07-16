import { useSelector } from "react-redux";
import { RootState } from "state/store";

import { Content, VideoCardGrid } from "components";

export default function ClipCompilations() {
    const videos = useSelector(
        (state: RootState) => state.youtube.compilations
    );

    return (
        <Content
            title="Clip Compilations"
            description="Want to view some old highlights?"
        >
            {videos.length !== 0 && <VideoCardGrid videos={videos} />}
        </Content>
    );
}
