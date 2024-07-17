import { useState } from "react";

import classNames from "classnames";
import "./EmoteTile.scss";

import {
    LazyLoadImage,
    ScrollPosition,
    trackWindowScroll
} from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

type EmoteTileProps = {
    name: string;
    imageUrl: string;
    scrollPosition: ScrollPosition;
};

const EmoteTile = ({ name, imageUrl, scrollPosition }: EmoteTileProps) => {
    const handleEmoteClick = () => {
        copyToClipboard(name);
        setCopied(true);
        setTimeout(() => {
            setCopied(false); // Reset the class name after 2 seconds
        }, 1000);
    };

    async function copyToClipboard(text: string) {
        try {
            await navigator.clipboard.writeText(text); // needs HTTPS
            console.log("Text copied to clipboard successfully!");
        } catch (error) {
            console.error("Error copying text to clipboard:", error);
        }
    }

    const [copied, setCopied] = useState(false);

    const emoteCopyClassNames = classNames("emote-tile", copied && "copied");

    return (
        <div onClick={handleEmoteClick} className={emoteCopyClassNames}>
            <div className="emote-image">
                <LazyLoadImage
                    className="emote-lazy-load"
                    src={imageUrl}
                    effect="blur"
                    scrollPosition={scrollPosition}
                />
            </div>
            <div className="emote-text">{name}</div>
        </div>
    );
};

export default trackWindowScroll(EmoteTile);
