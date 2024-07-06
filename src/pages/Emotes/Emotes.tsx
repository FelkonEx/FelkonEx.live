import { useEffect, useState, useInsertionEffect } from "react";

import { EmoteTile } from "components";
import { sevenTvApiData } from "types";

import "./Emotes.scss";

export default function Emotes() {
    const [emotes, setEmotes] = useState([]);
    const [visibleItems, setVisibleItems] = useState<number[]>([]);

    useEffect(() => {
        fetch("7tv/emotes/all")
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                setEmotes(data);
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
            });
    }, []);

    useInsertionEffect(() => {
        const timer = setInterval(() => {
            setVisibleItems((prevItems: any) => {
                const nextItemIndex = prevItems.length;
                if (nextItemIndex < emotes.length) {
                    console.log("test");
                    return [...prevItems, nextItemIndex];
                }
                clearInterval(timer); // Stop the timer when all items are visible
                return prevItems;
            });
        }, 25); // Adjust the delay (in milliseconds) as needed

        return () => clearInterval(timer); // Cleanup on unmount
    }, [emotes]);

    let renderEmotes = emotes.map((emote: sevenTvApiData, index: number) => {
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

    return <div className="emotes">{emotes.length !== 0 && renderEmotes}</div>;
}
