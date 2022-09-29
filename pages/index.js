import Head from "next/head";
import React from "react";
import Header from "../components/Header";
import styles from "../styles/About.module.css";
const App = () => {
  return (
    <div className="root">
      <Head>
        <title>Samuel Chavez - Full Stack Developer</title>
        <link rel="shortcut icon" href="/static/favicon.ico" />
      </Head>
      <div className={styles.appContainer}>
        <Header />
        <div className={styles.samplesContainer}>
          <div className={styles.aboutText}>
            <p className={styles.paragraph}>
              Hi, and welcome to my portfolio! This site is under permanent construction as I will always be improving it.
            </p>
            <p className={styles.paragraph}>
              This site was designed with Next.js, React, JavaScript, Hero
              Icons, and React Color, with more to come. I can build full stack
              applications utilizing Express, PostgreSQL, MySQL, RESTful API
              development, React, Tailwind, Threejs, HTML, ES6, and CSS. I Have built and rebuilt small applications you can find
              on this site from scratch to demonstrate some of my proficiency as well as links to the code on my github.
            </p>
            <p className={styles.paragraph}>
              I currently have over 1,000 of hours of coding experience and I love
              programming! I am open to remote, relocation, and in-person work. I'm eager to learn, moldable, and I am often told by
              colleagues that I am very relaxed. I hope to be a great fit in my
              upcoming work environment.
            </p>
            <p className={styles.paragraph}>
              I have a wonderful family of five who supports me in my coding
              endeavors. I'm grateful for all that I have!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
