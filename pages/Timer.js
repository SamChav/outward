import React, { useState } from "react";
import styles from "../styles/Timer.module.css";
import Head from "next/head";
import Header from "../components/Header";

const Timer = () => {
  let [counter, setCounter] = useState(0);
  let [tracker, setTracker] = useState(false);
  let [lap, setLap] = useState([]);

  const startCounting = counter;
  const timer = () => {
    startCounting++;
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

  return (
    <div className="root">
      <Head>
        <title>Samuel Chavez - Full Stack Developer</title>
      </Head>
      <div className={styles.appContainer}>
        <Header />
        <div className={styles.samplesContainer}>
          <div className={styles.sampleOne}>
            <div className={styles.sampleOneText}>
              <p className={styles.paragraph}>
                During my first developer interview, I had a bit of a struggle
                designing a self incrementing counter. I did not expect to have
                trouble with it until I realized I had to go back to the basics
                and it took a while, but here it is! You can view the code{" "}
                <a
                  style={{ textDecoration: "none" }}
                  target="blank"
                  href="https://github.com/SamChav/outward/blob/master/pages/Timer.js"
                >
                  here
                </a>
                .
              </p>
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
              {/* <button className={styles.button} onClick={lapFunc}>
          Lap
        </button> */}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timer;
