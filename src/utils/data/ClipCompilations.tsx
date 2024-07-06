import jsonData from "./ClipCompilations.json";
import { gameData } from "types";

const CLIP_COMPILATIONS: gameData[] = JSON.parse(JSON.stringify(jsonData));
export default CLIP_COMPILATIONS; 
