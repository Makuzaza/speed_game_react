import React from 'react';

function GameOver({closeHandler, name, score, level}) {

  let message;
  if (score <= 150) {
    message = 'Nice try! You can do better!'
  } else if (score > 150 && score <= 200) {
    message = "Good job! You can do better!";
  } else {
    message = "Excellent job! You're a master!";
  }

    return (
      <div className="overlay">
        <div className="gameover_box">
          <h2>GAME OVER</h2>
          <div className="game_data">
            <div className="score_main">
              <div className="score_text">Score:</div>
              <div className="score_modal">{score}</div>
            </div>
            <div className="name">
                <div>Name: {name}</div>
                <div>Level: {level}</div>
          </div>
          </div>
          <p>{message}</p>
          <button onClick={closeHandler}>X</button>
        </div>
      </div>
    );
  }
  
  export default GameOver;