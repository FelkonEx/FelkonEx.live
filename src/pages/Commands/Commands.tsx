import { useLocation } from "react-router-dom";
import classNames from "classnames";

import { commandData } from "types";
import { Content, CommandExample, Heading, Tabs } from "components";
import { LINK_COMMANDS, MOD_COMMANDS, USER_COMMANDS } from "utils/data";

import "./Commands.scss";

export default function Commands() {
    const location = useLocation();

    const setAllCommandsActiveClass = classNames(
        location.hash === "" && "active"
    );

    const setUserCommandsActiveClass = classNames(
        location.hash === "#user" && "active"
    );
    const setLinkCommandsActiveClass = classNames(
        location.hash === "#links" && "active"
    );

    const setModsCommandsActiveClass = classNames(
        location.hash === "#mods" && "active"
    );

    const generateCommands = (commands: Array<commandData>, title: string) => {
        return (
            <div className="commands">
                <Heading title={title} extraSmall />

                {commands.length &&
                    commands.map((commandData: commandData) => {
                        return <CommandExample data={commandData} />;
                    })}
            </div>
        );
    };

    return (
        <Content
            className="commands-container"
            title="Commands"
            description="Click on each command for an example!"
        >
            {(location.hash === "#user" || location.hash === "") &&
                generateCommands(USER_COMMANDS, "User Commands")}
            {(location.hash === "#links" || location.hash === "") &&
                generateCommands(LINK_COMMANDS, "Link Commands")}
            {(location.hash === "#mods" || location.hash === "") &&
                generateCommands(MOD_COMMANDS, "Moderator Commands")}
        </Content>
    );
}
