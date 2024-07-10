// import React from "react";
// import { useCollapse } from "react-collapsed";

import CommandExample from "components/CommandExample/CommandExample";

import { COMMANDS } from "utils/data";

import { commandData } from "types";
import { Title } from "components";
import "./Commands.scss";

export default function Commands() {
    // const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();

    let generateCommands = COMMANDS.map((commandData: commandData) => {
        return <CommandExample data={commandData} />;
    });

    return (
        <div className="commands-container">
            <Title title="Commands" description="Tests" />
            <div className="commands">{generateCommands}</div>
        </div>
    );
}
