import { useState } from 'react';
import MoleContainer from './components/MoleContainer';
import PauseButton from './components/PauseButton';
import ClearButton from './components/clearButton';

function App() {
  let [score, setScore] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const togglePause = () => {
    setIsPaused((prevIsPaused) => {
      const newIsPaused = !prevIsPaused;
      console.log(newIsPaused ? 'Game Paused' : 'Game Resumed');
      return newIsPaused;
    });
  };

  const clearScore = () => {
    setScore(0);
  };

  const createMoleHill = () => {
    let hills = []
    for(let i = 0; i < 9; i++) {
      hills.push(<MoleContainer key={i} setScore={setScore} score={score} isPaused={isPaused}/>)
    }
    return (
      <div>
        { hills }
      </div>
    )
  }
  
  return (
    <div className="App">
      <h1>React-A-Mole!</h1>
      {score}
      {createMoleHill()}
      <PauseButton onPauseResume={togglePause} />
      <ClearButton onClear={clearScore} />
    </div>
  );
}

export default App;