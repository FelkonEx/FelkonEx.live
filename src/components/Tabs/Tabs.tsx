import { Children, CSSProperties, ReactNode } from "react";
import classNames from "classnames";

import "./Tabs.scss";

type TabsProps = {
    children?: ReactNode;
    className?: string;
};

export default function Tabs({ children, className }: TabsProps) {
    const TabClassNames: string = classNames("tabs", className);
    const ChildrenCount: number = Children.count(children);

    const TabWrapperStyle: CSSProperties = {
        gridTemplateColumns: `repeat(${ChildrenCount}, 1fr)`,
        flexDirection: "column"
    };

    const renderChildren = Children.map(children, (childElement) => {
        return childElement;
    });

    return (
        <div className={TabClassNames} style={TabWrapperStyle}>
            {renderChildren}
        </div>
    );
}
