import React, { useState, useEffect } from 'react';

const Timer = ({ handleTimeUp }) => {
  const [time, setTime] = useState(20);

  useEffect(() => {
    let timer;
    if (time > 0) {
      timer = setTimeout(() => {
        setTime(time - 1);
      }, 1000);
    } else {
      handleTimeUp();
    }

    return () => clearTimeout(timer);
  }, [time, handleTimeUp]);

  useEffect(() => {
    setTime(20); // Reset timer when question changes
  }, [handleTimeUp]);

  return <div>{time} seconds remaining</div>;
};

export default Timer;