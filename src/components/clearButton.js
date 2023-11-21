import React from 'react';

const ClearButton = ({ onClear }) => {
  return (
    <button onClick={onClear}>
      Clear Score
    </button>
  );
}

export default ClearButton;
