import Head from "next/head";
import React from "react";
import About from "../components/About";
import Header from "../components/Header";
import Todo from "../components/Todo";
import Timer from "../components/Timer";
import PixelArtMaker from "../components/PixelArt";
import styles from "../styles/Samples.module.css"
const App = () => {
  return (
    <div className="root">
      <Head>
        <title>Samuel Chavez - Full Stack Developer</title>
      </Head>
        <Header />
        <About />
 
    <div className={styles.samplesContainer}>
      <div className={styles.statement}>
        <p className={styles.paragraph}>
          Below are multiple small projects! If you would like to see larger
          works, please choose one from the menu at the top.
        </p>
      </div>
      <Todo />
      <Timer />
      <PixelArtMaker />
    </div>


    </div>
  );
};

export default App;
