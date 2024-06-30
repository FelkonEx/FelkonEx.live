import React from "react";
import { useCollapse } from "react-collapsed";

export default function CommandCard({ title, description, imageUrl }) {
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
