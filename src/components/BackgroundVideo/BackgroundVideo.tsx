import "./BackgroundVideo.scss";

import BgVideo from "img/bg.webm";
import BgVideoSecond from "img/bg2.webm";

export default function BackgroundVideo() {
    return (
        <div className="background-video-container">
            <video autoPlay loop muted playsInline className="background-video">
                <source src={BgVideoSecond} type="video/webm" />
                Your browser does not support the video tag.
            </video>
            <video autoPlay loop muted playsInline className="background-video second">
                <source src={BgVideo} type="video/webm" />
                Your browser does not support the video tag.
            </video>
            <div className="video-disable-overlay"></div>
        </div>
    );
}
