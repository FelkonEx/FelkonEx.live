import React from "react";
import { useCollapse } from "react-collapsed";

type CommandCardProps = {
    title: string;
    description: string;
    imageUrl: string;
};

export default function CommandCard({ title, description, imageUrl }: CommandCardProps) {
    const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();

    return (
        <div className="collapsible">
            <div className="header" {...getToggleProps()}>
                {title}
            </div>
            <div {...getCollapseProps()}>
                <div className="content">
                    <h2>{description}</h2>
                    <br />
                    <img className="commandImg" src={imageUrl} />
                    <br />
                </div>
            </div>
        </div>
    );
}
