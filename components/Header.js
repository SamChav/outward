import React, { useEffect, useRef } from "react";
import styles from "../styles/Header.module.css";
import Typed from "typed.js";
import Link from "next/link";
const Header = () => {
  // Create reference to store the DOM element containing the animation
  const el = useRef(null);
  // Create reference to store the Typed instance itself
  const typed = useRef(null);
  useEffect(() => {
    const options = {
      strings: [
        `"Hi..."`,
        `"Welcome to my portfolio"`,
        `"I'm currently open to work!"`,
      ],
      smartBackspace: true,
      typeSpeed: 60,
      backSpeed: 20,
      startDelay: 100,
      backDelay: 100,
      loop: true,
      showCursor: true,
      cursorChar: "|",
      autoInsertCss: true,
    };

    // elRef refers to the <span> rendered below
    typed.current = new Typed(el.current, options);

    return () => {
      // Make sure to destroy Typed instance during cleanup
      // to prevent memory leaks
      typed.current.destroy();
    };
  }, []);

  return (
    <div className={styles.navBar}>
      <div className={styles.text}>
        <h1 className={styles.header} ref={el}></h1>
      </div>
      <div className={styles.contactMe}>Chavez.samuel1@gmail.com</div>
      <span className={styles.examplesHeader}>Professional Links</span>
      <div className={styles.buttonRow}>
        <a
          href="https://www.linkedin.com/in/samuel-i-chavez/"
          className={styles.links}
          target="blank"
        >
          <button className={styles.menuButton}>Linked In</button>
        </a>
        <a
          href="https://docs.google.com/document/d/1eiakTCDdTXU2w9vtD_cXVurR797gSyKUAtgTrrAP7cE/"
          target="blank"
          className={styles.links}
        >
          <button className={styles.menuButton}>My Resume</button>
        </a>
        <a
          href="https://github.com/SamChav?tab=repositories"
          className={styles.links}
          target="blank"
        >
          <button className={styles.menuButton}>Github</button>
        </a>

      </div>
      <span className={styles.examplesHeader}>Site Navigation</span>
      
      <div className={styles.buttonRow}>
     
        <Link href="/">
          <button className={styles.menuButton}>Home</button>
        </Link>
        <Link href="/Todo">
          <button className={styles.menuButton}>To Do List</button>
        </Link>
        <Link href="/Timer">
          <button className={styles.menuButton}>Timer</button>
        </Link>
        <Link href="/PixelArt">
          <button className={styles.menuButton}>Pixel Art Maker</button>
        </Link>
        
      </div>
      <span className={styles.examplesHeader}>Projects</span>
      
      <div className={styles.buttonRow}>
     
      <a
          href="http://planetsandstuff.surge.sh/"
          className={styles.links}
          target="blank"
        >
          <button className={styles.menuButton}>Planet Project</button>
        </a>
        <a
          href="http://forguinny.surge.sh/"
          className={styles.links}
          target="blank"
        >
          <button className={styles.menuButton}>Anime Generator</button>
        </a>
        
      </div>
    </div>
  );
};

export default Header;
