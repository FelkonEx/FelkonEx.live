import classNames from "classnames";
import "./Heading.scss";

type TitleProps = {
    title: string;
    description?: string;
    medium?: boolean;
    small?: boolean;
    extraSmall?: boolean;
};

export default function Title({
    title,
    description,
    medium = false,
    small = false,
    extraSmall = false
}: TitleProps) {
    const large: boolean = !medium && !small && !extraSmall;

    const titleClassName = classNames(
        "title",
        large && "large",
        medium && "medium",
        small && "small",
        extraSmall && "x-small"
    );
    return (
        <div className="title-container">
            <div className={titleClassName}>{title}</div>
            {description ?? <div className="description">{description}</div>}
        </div>
    );
}
