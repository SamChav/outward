import React from "react";
import styles from "../styles/About.module.css";
import Image from "next/image";
const About = (props) => {
  return (
    <div className={styles.aboutContainer}>
      <div className={styles.aboutText}>
      <p className={styles.paragraph}>Hi, and welcome to my portfolio! Currently, this is a work in progress. I do plan to have this complete in the next few weeks, but I'll always be improving.</p>
      <p className={styles.paragraph}>This site was designed with Next.js, React, JavaScript, Hero Icons, and React Color, with more to come. I can build full stack applications utilizing Express, PostgreSQL, MySQL, RESTful API development, React, Tailwind, Threejs, HTML, ES6, and CSS.  </p>
      <p className={styles.paragraph}>I currently have hundreds of hours of coding experience and I love programming! I'm eager to learn, moldable, and I am often told by colleagues that I am very relaxed. I hope to be a great fit in my upcoming work environment.
      </p>
      <p className={styles.paragraph}>I have a wonderful family of five who supports me in my coding endeavors. I'm grateful for all that I have!</p>   
      <div className={styles.imageDiv}><Image src="/christmas.png" layout="fill" objectPosition="center" className={styles.imageDiv} /></div>
      </div>
    </div>
  );
};

export default About;
