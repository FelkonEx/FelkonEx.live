import { sevenTvApiEmoteData, twitchApiEmoteData } from "types";

import "./EmoteTile.scss";

type EmoteTileProps = {
    name: string,
    imageUrl: string
};

export default function EmoteTile({ name, imageUrl }: EmoteTileProps) {

    const handleEmoteClick = () => {
        navigator.clipboard.writeText(name || "");
    };

    return (
        <div onClick={handleEmoteClick} className="emote-tile">
            <div className="emote-image">
                
                <img src={imageUrl} />
            </div>
            <span className="emote-text">{name}</span>
        </div>
    );
}
