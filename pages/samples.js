import React, { useState } from "react";
import styles from "../styles/Samples.module.css";
import PixelArtMaker from "../components/PixelArt";
import Header from "../components/Header";
const Samples = (props) => {

// ___________________________this is the timer and its functions
  const [counter, setCounter] = useState(0);
  let [tracker, setTracker] = useState(false);

  const timer = async () => {
    setCounter(counter++);
  };

  const startTimer = () => {
    if (tracker === false) {
      setTracker((tracker = setInterval(timer, 1000)));
    } else if (tracker != false) {
      return null;
    }
  };

  const stopTimer = () => {
    clearInterval(tracker);
    setTracker((tracker = false));
  };

  const resetTimer = () => {
    setCounter((counter = 0));
    setTracker((tracker = false));
  };
// ___________________________this is the timer and its functions(end)

// ___________________________moving pixel art maker to its own component(end)

  return (    
    <div className={styles.samplesContainer}>
    <Header />
      <div className={styles.sampleOne}>
        <div className={styles.sampleOneText}>
          So, in my first ever developer interviewer I stumbled trying to get a
          simple timer working. Therefore, behold, a simple timer!{" "}
        </div>

        <div className={styles.counterDiv}>
          Time:
          <span id={styles.timer}>{counter}</span>
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
        </span>
      </div>
      <div className={styles.sampleTwo}>
        <span className={styles.sampleTwoText}>My pixel art maker, one of my very first projects that I found to be
        very cool.</span>
        <PixelArtMaker></PixelArtMaker>
      </div>
    </div>
  );
};

export default Samples;
