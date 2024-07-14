import { ReactNode } from "react";
import { Heading } from "components";
import classNames from "classnames";

import "./Content.scss";

type TabsProps = {
    children?: ReactNode;
    className?: string;
    title: string;
    description?: string;
};

export default function Content({
    children,
    className,
    title,
    description
}: TabsProps) {
    const generateClassName: string = classNames(
        "content-container",
        className
    );

    return (
        <div className={generateClassName}>
            <Heading title={title} description={description || ""} />
            {children}
        </div>
    );
}
