import { useEffect, useState, useInsertionEffect } from "react";

import { EmoteTile, Title } from "components";
import { sevenTvApiData } from "types";

import { useSelector } from "react-redux";
import { RootState } from "state/store";
import "./Emotes.scss";

export default function Emotes() {
    const [visibleItems, setVisibleItems] = useState<number[]>([]);
    const sevenTvEmotes = useSelector((state: RootState) => state.sevenTv.emotes);

    useInsertionEffect(() => {
        const timer = setInterval(() => {
            setVisibleItems((prevItems: any) => {
                const nextItemIndex = prevItems.length;
                if (nextItemIndex < sevenTvEmotes.length) {
                    return [...prevItems, nextItemIndex];
                }
                clearInterval(timer); // Stop the timer when all items are visible
                return prevItems;
            });
        }, 25); // Adjust the delay (in milliseconds) as needed

        return () => clearInterval(timer); // Cleanup on unmount
    }, [sevenTvEmotes]);

    let renderEmotes = sevenTvEmotes.map((emote: sevenTvApiData, index: number) => {
        return (
            <div
                className={`fadeIn ${
                    visibleItems.includes(index) ? "visible" : ""
                }`}
            >
                <EmoteTile emote={emote} />
            </div>
        );
    });

    return <div className="emotes">
        <Title title="Twitch Emotes" description="YEP" />
        {sevenTvEmotes.length !== 0 && renderEmotes}
        {/* //emoteGrid component? */}
        </div>;
}
