import { useState } from "react";
import { useCollapse } from "react-collapsed";

import badgeBroadcaster from "img/badge-broadcaster.bmp";
import badgeModerator from "img/badge-moderator.bmp";
import { commandData, commandExmaple } from "types";

import "./CommandExample.scss";
import classNames from "classnames";

type commandExampleProps = {
    data: commandData;
};

const USERNAME_FELKON = "FelkonEx";
const USERNAME_HEIRTHENA = "heirthena";

const USERNAME_BOT = "FelkonExBot";
export default function CommandExample({ data }: commandExampleProps) {
    const [isExpanded, setExpanded] = useState(false);
    const { getCollapseProps } = useCollapse({ isExpanded });

    const renderUsername = (self?: boolean) => {
        const classes = classNames(
            "user-name",
            "messages",
            self ? "user" : "other-user"
        );
        return (
            <span className={classes}>
                {self ? USERNAME_FELKON : USERNAME_HEIRTHENA}:
            </span>
        );
    };

    const renderMessageParts = (messages: Array<TrustedHTML>) =>
        messages.map((messagePart) => {
            return (
                <span
                    className="user-message-html"
                    dangerouslySetInnerHTML={{
                        __html: messagePart + ""
                    }}
                ></span>
            );
        });

    const renderMessage = (command: commandExmaple) => {
        return (
            <div className="command-messages-container">
                <div className="messages-container">
                    <span className="user-container">
                        <img
                            className="user-badges"
                            alt="broadcaster-badge"
                            src={badgeBroadcaster}
                        />
                        {renderUsername(command.self)}
                        {renderMessageParts(command.firstMessage)}
                    </span>
                    <br />
                    <span className="user-container">
                        <img
                            className="user-badges"
                            alt="moderator-badge"
                            src={badgeModerator}
                        />
                        <span className="user-name message bot">
                            {USERNAME_BOT}:
                        </span>
                        {renderMessageParts(command.secondMessage)}
                    </span>
                </div>
            </div>
        );
    };

    return (
        <div
            className="command-example-container"
            onClick={() => setExpanded((prevExpanded) => !prevExpanded)}
        >
            <div className="command-heading">
                <span className="command-heading-name">{data.commandName}</span>
                <span className="command-heading-description">
                    {data.description}
                </span>
            </div>
            <div {...getCollapseProps()} className="command-data">
                {/* <div className="command-description">{data.description}</div> */}
                {data.examples &&
                    data.examples.map((command) => {
                        return renderMessage(command);
                    })}
            </div>
        </div>
    );
}
