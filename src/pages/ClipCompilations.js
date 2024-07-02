import { Title, VideoCardList } from "components";
import { data } from "utils";

export default function ClipCompilations() {
    const title = "Past Streams!";
    const description = "Missed a stream? You can check previous VODs here!";

    return (
        <div className="vods">
            <Title title={title} description={description} />
            <VideoCardList games={data.CLIP_COMPILATIONS} />
        </div>
    );
}
