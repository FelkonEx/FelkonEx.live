import React, { useEffect, useState } from "react";
import { useCollapse } from "react-collapsed";

import badgeBroadcaster from "img/badge-broadcaster.bmp";
import badgeModerator from "img/badge-moderator.bmp";
import { commandData } from "types";

import "./CommandExample.scss";

type commandExampleProps = {
    data: commandData;
};

const USERNAME_ME = "FelkonEx";
const USERNAME_BOT = "FelkonExBot";
export default function CommandExample({ data }: commandExampleProps) {
    const [isExpanded, setExpanded] = useState(false);
    const { getCollapseProps, getToggleProps } = useCollapse({ isExpanded });

    return (
        <div
            className="command-example-container"
            onClick={() => setExpanded((prevExpanded) => !prevExpanded)}
        >
            <div className="command-heading">!{data.commandName}</div>
            <div {...getCollapseProps()} className="command-data">
                <div className="command-description">{data.description}</div>
                <div className="command-messages-container">
                    <div className="messages-container">
                        <span className="user-container">
                            <img
                                className="user-badges"
                                src={badgeBroadcaster}
                            />
                            <span className="user-name message user">
                                {USERNAME_ME}:
                            </span>
                            <span className="user-message">
                                {data.firstMessage}
                            </span>
                        </span>
                        <br />
                        <span className="user-container">
                            <img className="user-badges" src={badgeModerator} />
                            <span className="user-name message bot">
                                {USERNAME_BOT}:
                            </span>
                            <span className="user-message">
                                <span className="user-name user">
                                    @FelkonEx
                                </span>
                                <span
                                    className="user-message-html"
                                    dangerouslySetInnerHTML={{
                                        __html: data.secondMessage
                                    }}
                                ></span>
                            </span>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}
