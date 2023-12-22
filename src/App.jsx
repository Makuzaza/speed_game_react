import { useRef, useState, useEffect } from 'react';
import NewGame from "./components/NewGame";
import { levels } from "./levels";
import Game from "./components/Game";
import GameOver from "./components/GameOver";
import { useSound } from 'use-sound';
import ice from './assets/ice.mp3';
import sound from './assets/sound.mp3';
import footsteps from './assets/footsteps.mp3';

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

  let pace = 1350;
  let levelAmount;

  const [soundEat] = useSound(ice);
  const [soundEnd] = useSound(sound);
  const [soundSteps, { stop: stopSoundSteps }] = useSound(footsteps);

  const gameSetHandler = (level, name) => {

  const {amount} = levels.find(el => el.name === level);
  levelAmount = amount;
  const circlesArray = Array.from({ length: levelAmount }, (_, i) => i);
    setCircles(circlesArray);

    setPlayer({
      level:level,
      name: name
    })

    setGameLaunch((prevLaunch) => !prevLaunch);
    gameBegin();
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
    clearTimeout(timeoutIdRef.current);
    timeoutIdRef.current = null; 
    soundEnd()
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
    setScore((prevScore) => prevScore + 10);
    rounds.current--;
    soundEat();
};

useEffect(() => {
  if (gameOn) {
    soundSteps();
  } else {
    stopSoundSteps();
  }
}, [gameOn, soundSteps, stopSoundSteps]);

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
};

  return (
    <>
<h1>Catch the snow!</h1>
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