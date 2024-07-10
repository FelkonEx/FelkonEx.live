import { useEffect, useState, useInsertionEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";

import { EmoteTile, Title } from "components";

import { useSelector } from "react-redux";
import { RootState } from "state/store";
import "./Emotes.scss";
import Tabs from "components/Tabs/Tabs";
import { sevenTvApiEmoteData, twitchApiEmoteData } from "types";

export default function Emotes() {
    const location = useLocation();

    const sevenTvEmotes = useSelector(
        (state: RootState) => state.sevenTv.emotes
    );
    const twitchEmotes = useSelector((state: RootState) => state.twitch.emotes);

    // const [visibleItems, setVisibleItems] = useState<number[]>([]);
    // useInsertionEffect(() => {
    //     const timer = setInterval(() => {
    //         setVisibleItems((prevItems: any) => {
    //             const nextItemIndex = prevItems.length;
    //             if (nextItemIndex < sevenTvEmotes.length) {
    //                 return [...prevItems, nextItemIndex];
    //             }
    //             clearInterval(timer); // Stop the timer when all items are visible
    //             return prevItems;
    //         });
    //     }, 25); // Adjust the delay (in milliseconds) as needed

    //     return () => clearInterval(timer); // Cleanup on unmount
    // }, [sevenTvEmotes]);


    const renderTwitchEmotes = (filter?: string) =>
        twitchEmotes.map((emote: twitchApiEmoteData) => {
            return <EmoteTile name={emote.name} imageUrl={emote.imageUrl} />;
        });

    const renderSevenTvEmotes = (filter?: string) =>
        sevenTvEmotes.map((emote: sevenTvApiEmoteData) => {
            return <EmoteTile name={emote.name} imageUrl={emote.url} />;
        });

    const renderEmotes = (filter: string) => {
        return location.hash == "#7tv"
            ? sevenTvEmotes.length && renderSevenTvEmotes()
            : twitchEmotes.length && renderTwitchEmotes();
    };

    return (
        <div className="emotes-container">
            <Title title="Twitch Emotes" description="YEP" />
            <Tabs>
                <NavLink to="">Twitch</NavLink>
                <NavLink to="#7tv">7tv</NavLink>
            </Tabs>
            <div className="emotes-grid">
                {location.hash == "#7tv"
                    ? renderSevenTvEmotes()
                    : renderTwitchEmotes()}
            </div>
        </div>
    );
}
