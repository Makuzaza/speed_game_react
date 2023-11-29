import Circle from "../UI_components/Circle";

function Game({score, circles, stopHandler, clickHandler}) {
    return (
        <div>
<p className="score">{score}</p>
<div className="circles">
    {circles.map((_, i) => <Circle key={i} id={i} clickHandler={clickHandler}/>)}
    </div>
<button onClick={stopHandler}>Stop game</button>
        </div>
    );
}

export default Game;