function GameOver({closeHandler, name, score, level}) {
    return (
      <div className="overlay">
        <div className="gameover_box">
          <h2>GAME OVER</h2>
          <div className="game_data">
            <div>
                <p className="score">{score}</p>
              </div>
              <div className="name">
                <div>Name: {name}</div><div>Level: {level}</div>
          </div>
          </div>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos
            perferendis eaque repellat, magnam error vero debitis necessitatibus
            fugit ut a?
          </p>
          <button onClick={closeHandler}>X</button>
        </div>
      </div>
    );
  }
  
  export default GameOver;