import React, { useState } from "react";
import styles from "../styles/Samples.module.css";
import PixelArtMaker from "../components/PixelArt";
import Header from "../components/Header";
import Timer from "../components/Timer";
const Samples = () => {
  return (
    <div className={styles.samplesContainer}>
      <Header />
      <div className={styles.statement}>
        <p className={styles.paragraph}>
          Below are multiple small projects! If you would like to see larger
          works, please choose one from the menu at the top.
        </p>
      </div>
      <Timer />
      <PixelArtMaker />
    </div>
  );
};

export default Samples;
