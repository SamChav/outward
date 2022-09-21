import React, { useEffect, useState } from "react";
import styles from "../styles/Timer.module.css";

const Timer = () => {
  let [counter, setCounter] = useState(0);
  let [tracker, setTracker] = useState(false);
  let [lap, setLap] = useState([]);

  const startCounting = counter;
  const timer = () => {
      startCounting++;
      console.log(startCounting);
      setCounter(startCounting);
  };

  const startTimer = () => {
    if (!tracker) {
      setTracker(setInterval(timer, 1000));
    } else if (tracker === true) {
      return null;
    }
  };

  const stopTimer = () => {
    clearInterval(tracker);
    setTracker(false);
  };

  const resetTimer = () => {
    clearInterval(tracker);
    setCounter(0);
    setTracker(false);
  };

  const lapFunc = () => {
    setLap([counter]);
    console.log(lap);
  };

  return (
    <div className={styles.sampleOne}>
      <div className={styles.sampleOneText}>
        So, in my first ever developer interviewer I stumbled trying to get a
        simple timer working. So here it is, a simple timer!
      </div>

      <div className={styles.counterDiv}>
        Time:
        <span id={styles.timer}>{counter}</span>
        <div>
          {lap.map((el, i) => {
            <ul key={i}>Lap: {el}</ul>;
          })}
        </div>
      </div>
      <span className={styles.sampleOneButtons}>
        <button className={styles.button} onClick={startTimer}>
          start
        </button>
        <button className={styles.button} onClick={stopTimer}>
          stop
        </button>
        <button className={styles.button} onClick={resetTimer}>
          reset
        </button>
        <button className={styles.button} onClick={lapFunc}>
          Lap
        </button>
      </span>
    </div>
  );
};

export default Timer;
