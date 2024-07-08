// import {Counter} from "components";

import felkonImg from "img/felkon7.png";
import "./Home.scss";

const Home = () => {
    return (
        <div className="home-container">
            <div className="intro-container">
                <div className="intro-image">
                    <img src={felkonImg} />
                </div>
                <div className="intro-title">
                    <span>Hi! I'm Felkon!</span>
                </div>
                <div className="intro-description">
                    Your #2 side monitor streamer!
                </div>
                {/* randomly change the description on load */}
                <ul>
                    {/* <Counter /> */}
                    <li>Link 1</li>
                    <li>Link 2</li>
                    <li>Link 3</li>
                    <li>Link 4</li>
                    <li>Link 5</li>
                    <li>Link 6</li>
                </ul>
            </div>
        </div>
    );
};

export default Home;
