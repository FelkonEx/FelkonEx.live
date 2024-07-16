// import VideoCardItem from "components/VideoCardGridItem/VideoCardItem";

// import { useInsertionEffect, useState } from "react";

import { youtubeApiVideoData } from "types";
import { VideoCardGridItem } from "components";

import "./VideoCardGrid.scss";

type VideoCardGridProps = {
    videos: youtubeApiVideoData[];
};

export default function VideoCardGrid({ videos }: VideoCardGridProps) {
    // const [visibleItems, setVisibleItems] = useState<Array<number>>([]);

    // useInsertionEffect(() => {
    //     const timer = setInterval(() => {
    //         setVisibleItems((prevItems: any) => {
    //             const nextItemIndex = prevItems.length;
    //             if (nextItemIndex < videos.length) {
    //                 return [...prevItems, nextItemIndex];
    //             }
    //             clearInterval(timer); // Stop the timer when all items are visible
    //             return prevItems;
    //         });
    //     }, 50); // Adjust the delay (in milliseconds) as needed

    //     return () => clearInterval(timer); // Cleanup on unmount
    // }, [videos]);

    let cardGameList = videos.map(function (
        video: youtubeApiVideoData,
        index: number
    ) {
        return (
            <div className="video-card-grid-item">
                <VideoCardGridItem videos={video} />
            </div>
        );
    });

    return <div className="video-card-list">{cardGameList}</div>;
}
