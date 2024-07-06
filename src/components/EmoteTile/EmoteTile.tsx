import { sevenTvApiData } from "types";

import "./EmoteTile.scss";

type EmoteTileProps = {
    emote: sevenTvApiData;
};

export default function EmoteTile({ emote }: EmoteTileProps) {
    const { name, username, url, fileName } = emote;

    // const imageStyle = {
    //     maxWidth: '96px',
    //     maxHeight: '96px'
    // };

    // const containerStyle = {
    //     width: "96px",
    //     height: "96px",
    // };

    const handleEmoteClick = () => {
        navigator.clipboard.writeText(name || "");
    }

    return (
        <div onClick={handleEmoteClick} className="emote-tile">
            <div className="emote-image">
                <img src={"https:" + url + "/" + fileName?.name} />
            </div>
            <span className="emote-text">{name}</span>
        </div>
    );
}
