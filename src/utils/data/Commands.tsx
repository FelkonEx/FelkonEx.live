import jsonData from "./Commands.json";
import { commandData } from "types";

const COMMANDS: Array<commandData> = JSON.parse(JSON.stringify(jsonData));
export default COMMANDS;
