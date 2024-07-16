import "./Spinner.scss";
import felkonImg from "img/felkon7.png";

export default function Spinner() {
    return (
        <div className="spinner">
            <img src={felkonImg} />
            <div>Loading...</div>
        </div>
    );
}
