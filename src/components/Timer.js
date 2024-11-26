import React, { useState, useRef } from 'react'

const Timer = () => {
    const [time, setTime] = useState(0);
    const [isRunning, setIsRunning] = useState(false);
    const intervalRef = useRef(null);
  
    const startTimer = () => {
      if (!isRunning) {
        intervalRef.current = setInterval(() => {
          setTime((prevTime) => prevTime + 1);
        }, 1000);
        setIsRunning(true);
      }
    };
  
    const stopTimer = () => {
      clearInterval(intervalRef.current);
      setIsRunning(false);
    };
  
    const resetTimer = () => {
      clearInterval(intervalRef.current);
      setTime(0);
      setIsRunning(false);
    };


  return (
    <div className='timer-div'>
        <p className='timer'>Simple Timer</p>
        <p id='time' className='time'><span id='minute'>{Math.floor(time/60)}</span>:<span id='second'>{time%60}</span></p>
        <div className='buttons'>

            <button onClick={startTimer}>Start</button>
            <button onClick={stopTimer}>Stop</button>
            <button onClick={resetTimer}>Reset</button>

        </div>
    </div>
  )
}

export default Timer
