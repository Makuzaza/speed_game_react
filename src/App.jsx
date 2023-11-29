import { useState } from "react";
import NewGame from "./components/NewGame";
import { levels } from "./levels";
import Circle from './UI_components/Circle';
import Game from "./components/Game";
import GameOver from "./components/GameOver";

// have a conditition -> by default show NewGame and hide Game; 
// after getting data for Game, hide NewGame and display Game 

function App() {

  const [player, setPlayer] = useState();
  const [circles, setCircles] = useState([]);
  const [score, setScore] = useState(100);
  const [gameLaunch, setGameLaunch] = useState(true);
  const [gameOn, setGameOn] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [current, setCurrent] = useState(-1);

  let timer;
  let pace = 1000;

  const gameSetHandler = (level, name) => {
    // based on level, we find the matching 
    // object from levels array, and then make 
    // a array for the circles, with amount in the object

    const levelIndex = levels.findIndex(el => el.name === level);
    const levelAmount = levels[levelIndex].amount;
    const circlesArray = Array.from({ length: levelAmount }, (x, i) => i);

    // console.log('circlesArray', circlesArray);
    // console.log('amount of circles', levelAmount);

    setCircles(circlesArray);

    setPlayer({
      level:level,
      name: name
    })

    setGameLaunch(!gameLaunch);
    setGameOn(!gameOn);
    randomNumber();
  }

  const stopHandler = () => {
    setGameOn(!gameOn);
    setGameOver(!gameOver);
    clearTimeout(timer);
  }

  const closeHandler = () => {
    setGameOver(!gameOver);
    setGameLaunch(!gameLaunch);
    setScore(100);
  }

  const clickHandler = (id) => {
    // console.log('Clicked on circle with ID:', id);
    setScore(score + 10);
};

const getRndInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const randomNumber = () => {
  let nextActive;
  do {
    nextActive = getRndInt(0, circles.length)
  } while (nextActive === current);
  setCurrent(nextActive) 
  timer = setTimeout(randomNumber, pace);
  console.log(nextActive)
};

  // console.log(player);

  return (
    <>
<h1>Catch the snow!</h1>
{/* <NewGame onclick={gameSetHandler}/>
<Game score={score} circles={circles}/> */}
{gameLaunch && <NewGame onclick={gameSetHandler}/>}
{gameOn && (<Game 
  score={score} 
  circles={circles} 
  stopHandler={stopHandler} 
  clickHandler={clickHandler}/>)}
{gameOver && <GameOver closeHandler={closeHandler} {...player} score={score}/>}
    </>
  );
};
 
export default App;