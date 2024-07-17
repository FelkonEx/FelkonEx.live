import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

import { Content, EmoteTile, Heading, Spinner, Tabs } from "components";
import { RootState } from "state/store";
import { sevenTvApiEmoteData, twitchApiEmoteData } from "types";

import "./Emotes.scss";
import classNames from "classnames";

export default function Emotes() {
    const location = useLocation();
    const sevenTvEmotes = useSelector(
        (state: RootState) => state.sevenTv.emotes
    );
    const twitchEmotes = useSelector((state: RootState) => state.twitch.emotes);

    const [title, setTitle] = useState(
        location.hash === "#7tv" ? "7tv" : "Twitch"
    );

    useEffect(() => {
        setTitle(location.hash === "#7tv" ? "7tv" : "Twitch");
    }, [location]);

    const filterEmotes = (emotes: twitchApiEmoteData[], filter?: string) =>
        emotes
            .filter((emote) => filter === null || emote.emoteType === filter)
            .map((emote) => (
                <EmoteTile
                    key={emote.name}
                    name={emote.name}
                    imageUrl={emote.imageUrl}
                />
            ));

    const renderTwitchEmotes = () => (
        <>
            <Heading title="Follower" small />
            <div className="emotes-grid">
                {filterEmotes(twitchEmotes, "follower")}
            </div>
            <Heading title="Subscriber" small />
            <div className="emotes-grid">
                {filterEmotes(twitchEmotes, "subscriptions")}
            </div>
        </>
    );

    const renderSevenTvEmotes = () => (
        <div className="emotes-grid">
            <Heading title="Free 7TV emotes!" small />

            {sevenTvEmotes.map((emote: sevenTvApiEmoteData) => (
                <EmoteTile
                    key={emote.name}
                    name={emote.name}
                    imageUrl={emote.url}
                />
            ))}
        </div>
    );

    return (
        <Content
            className="emotes-container"
            title={`${title} Emotes`}
            description="Click on an emote to copy it!"
        >
            <div className="emote-content">
                {(location.hash === "#twitch" || location.hash === "") &&
                    renderTwitchEmotes()}
                {(location.hash === "#7tv" || location.hash === "") &&
                    renderSevenTvEmotes()}
            </div>
        </Content>
    );
}
