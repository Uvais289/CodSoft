// src/Timer.js
import React, { useState, useEffect } from 'react';
import './App.css';

const Timer = () => {
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(true);

  useEffect(() => {
    let intervalId;

    if (isActive) {
      intervalId = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds + 1);
      }, 1000);
    }

    return () => clearInterval(intervalId);
  }, [isActive]);

  const handlePause = () => {
    setIsActive(false);
  };

  const handleResume = () => {
    setIsActive(true);
  };

  const handleStop = () => {
    setIsActive(false);
    setSeconds(0);
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const remainingSeconds = time % 60;
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
  };

  return (
    <div>
      <h1>Timer App</h1>
      <p>Time: {formatTime(seconds)}</p>
      <div>
        <button onClick={handlePause} disabled={!isActive}>
          Pause
        </button>
        <button onClick={handleResume} disabled={isActive}>
          Resume
        </button>
        <button onClick={handleStop}>Stop</button>
      </div>
    </div>
  );
};

export default Timer;
