import userCommandJsonData from "./UserCommands.json";
import linkCommandJsonData from "./LinkCommands.json";
import modCommandsJsonData from "./ModCommands.json";
import { commandData } from "types";

export const USER_COMMANDS: Array<commandData> = JSON.parse(
    JSON.stringify(userCommandJsonData)
);
export const LINK_COMMANDS: Array<commandData> = JSON.parse(
    JSON.stringify(linkCommandJsonData)
);
export const MOD_COMMANDS: Array<commandData> = JSON.parse(
    JSON.stringify(modCommandsJsonData)
);
