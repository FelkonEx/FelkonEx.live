// import VideoCardItem from "components/VideoCardGridItem/VideoCardItem";

import { videoApiData } from "types";
import { useInsertionEffect, useState } from "react";

import "./VideoCardGrid.scss";
import { VideoCardGridItem } from "components";

type VideoCardGridProps = {
    videos: videoApiData[];
};

export default function VideoCardGrid({ videos }: VideoCardGridProps) {
    const [visibleItems, setVisibleItems] = useState<number[]>([]);

    useInsertionEffect(() => {
        const timer = setInterval(() => {
            setVisibleItems((prevItems: any) => {
                const nextItemIndex = prevItems.length;
                if (nextItemIndex < videos.length) {
                    return [...prevItems, nextItemIndex];
                }
                clearInterval(timer); // Stop the timer when all items are visible
                return prevItems;
            });
        }, 50); // Adjust the delay (in milliseconds) as needed

        return () => clearInterval(timer); // Cleanup on unmount
    }, [videos]);

    // const regexPlays = /FelkonEx Plays/i;
    // const regexNextFest = /\(Steam Next Fest\)/i;

    // const properTitle = (title: string) =>
    //     title.replace(regexPlays, "").replace(regexNextFest, "");

    let cardGameList = videos.map(function (
        video: videoApiData,
        index: number
    ) {
        return (
            <div className="video-card-grid-item">
                    <div
                        className={`fadeIn ${
                            visibleItems.includes(index) ? "visible" : ""
                        }`}
                    >
                    <VideoCardGridItem videos={video} />
                </div>
            </div>
        );
    });

    return <div className="video-card-list">{cardGameList}</div>;
}
