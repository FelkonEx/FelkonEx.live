import "./Title.scss";

const Title = ({ title, description }) => {
    return (
        <div className="header">
            <div className="title">{title}</div>
            {description ?? <div className="description">{description}</div>}
        </div>
    );
};

export default Title;
