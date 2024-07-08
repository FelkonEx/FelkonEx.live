import "./Title.scss";

type TitleProps = {
    title: string;
    description: string;
};

const Title = ({ title, description }: TitleProps) => {
    return (
        <div className="title-container">
            <div className="title">{title}</div>
            {description ?? <div className="description">{description}</div>}
        </div>
    );
};

export default Title;
