import { useRef, useState } from 'react';
import NewGame from "./components/NewGame";
import { levels } from "./levels";
import Circle from './UI_components/Circle';
import Game from "./components/Game";
import GameOver from "./components/GameOver";

// have a conditition -> by default show NewGame and hide Game; 
// after getting data for Game, hide NewGame and display Game 

const getRndInt = (min, max) => Math.floor(Math.random() * (max - min)) + min;

function App() {

  const [player, setPlayer] = useState();
  const [circles, setCircles] = useState([]);
  const [score, setScore] = useState(100);
  const [gameLaunch, setGameLaunch] = useState(true);
  const [gameOn, setGameOn] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [current, setCurrent] = useState();

  const timeoutIdRef = useRef(null);
  const rounds = useRef(0);
  const currentInst = useRef(0);
  // console.log(timeoutIdRef)
  // console.log(rounds)

  // let timer;
  let pace = 1000;
  let levelAmount;

  const gameSetHandler = (level, name) => {
    // based on level, we find the matching 
    // object from levels array, and then make 
    // a array for the circles, with amount in the object

  // const levelIndex = levels.findIndex(el => el.name === level);
  // levelAmount = levels[levelIndex].amount;

  const {amount} = levels.find(el => el.name === level);
  levelAmount = amount;

  const circlesArray = Array.from({ length: levelAmount }, (_, i) => i);

    // console.log('circlesArray', circlesArray);
    // console.log('amount of circles', levelAmount);

    setCircles(circlesArray);

    setPlayer({
      level:level,
      name: name
    })

    setGameLaunch((prevLaunch) => !prevLaunch);
    gameBegin();
    // randomNumber();
  }

  function  gameBegin() {
    setGameOn(!gameOn);
    randomNumber();
  }

  const stopHandler = () => {
    setGameOn(false);
    setGameOver(!gameOver);
    rounds.current = null;
    pace = 1000;
    // clearTimeout(timer);
    clearTimeout(timeoutIdRef.current);
    timeoutIdRef.current = null;
  }

  const closeHandler = () => {
    setGameOver(!gameOver);
    setGameLaunch(!gameLaunch);
    setScore(100);
  }

  const clickHandler = (id) => {
    if (current !== id) {
      stopHandler();
      return;
    }
    // console.log('Clicked on circle with ID:', id);
    setScore((prevScore) => prevScore + 10);
    rounds.current--;
};

const randomNumber = () => {
  if (rounds.current >= 3) {
    stopHandler();
    return;
  }

  let nextActive;

  do {
    nextActive = getRndInt(0, levelAmount)
  } while (nextActive === currentInst.current);

  setCurrent(nextActive);
  currentInst.current = nextActive;
  rounds.current++;
  pace *= 0.95;
  timeoutIdRef.current = setTimeout(randomNumber, pace);
  // timer = setTimeout(randomNumber, pace);
  console.log(nextActive)
};
  // console.log(player);

  return (
    <>
<h1>Catch the snow!</h1>
{/* <NewGame onclick={gameSetHandler}/>
<Game score={score} circles={circles}/> */}
{gameLaunch && <NewGame onclick={gameSetHandler}/>}
{gameOn && (
<Game 
  score={score} 
  circles={circles} 
  stopHandler={stopHandler} 
  clickHandler={clickHandler}
  current={current}/>)}
{gameOver && <GameOver closeHandler={closeHandler} {...player} score={score}/>}
    </>
  );
};
 
export default App;