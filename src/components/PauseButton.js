import React from 'react';

const PauseButton = ({ onPauseResume }) => {
  return (
    <button onClick={onPauseResume}>
      Pause/Resume
    </button>
  );
}

export default PauseButton;
