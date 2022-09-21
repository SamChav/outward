import React, { useState } from "react";
import styles from "../styles/Samples.module.css";
import PixelArtMaker from "../components/PixelArt";
import Header from "../components/Header";
import Timer from "../components/Timer";
const Samples = (props) => {
  // ___________________________this is the timer and its functions
  const [counter, setCounter] = useState(0);
  let [tracker, setTracker] = useState(false);
  let [lap, setLap] = useState([]);
  let lapArray = []
  const timer = () => {
    setCounter(counter++);
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
    lapArray.push(counter)    
    setLap(lapArray)
    console.log(lap)
  };
  // ___________________________this is the timer and its functions(end)

  return (
    <div className={styles.samplesContainer}>    
      <Header />
      <div className={styles.statement}><p className={styles.paragraph}>Below are multiple small projects! If you would like to see larger works, please view the menu at the top.</p></div>
      <Timer />
       <PixelArtMaker />
    </div>
  );
};

export default Samples;
