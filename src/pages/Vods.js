import GameVod from "components/GameVods/GameVod";
import Title from "components/Title/Title";
import { GAMES_PLAYED } from "utils/data/GamesPlayed";

export default function Vods() {
    const title = "Past Streams!";
    const description = "Missed a stream? You can check previous VODs here!";
    let gamesList = GAMES_PLAYED.map(function (game) {
        // return game.state == VOD_STATE.PUBLIC && <GameVod gameData={game} />;
        return <GameVod gameData={game} />;
    });

    return (
        <div className="vods-container">
            <Title title={title} description={description} />
            <div className="game-list">{gamesList}</div>
        </div>
    );
}
