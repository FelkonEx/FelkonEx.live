import { useEffect, useState } from "react";

import { Title, VideoCardList } from "components";
import { data } from "utils";

export default function ClipCompilations() {
    const title = "Past Streams!";
    const description = "Missed a stream? You can check previous VODs here!";

    const [videos, setVideos] = useState([])

    useEffect(() => {
        fetch("yt/compilations")
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                setVideos(data)
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
            });
    }, []);

    return (
        <div className="vods">
            <Title title={title} description={description} />
            {videos.length !== 0 && <VideoCardList videos={videos} />}
        </div>
    );
}
