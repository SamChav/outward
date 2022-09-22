import React from "react";
import styles from "../styles/Header.module.css";
const Header = () => {
  return (
    <div className={styles.navBar}>
      <div className={styles.dropdownDiv}>
        <button className={styles.menuButton}>Menu</button>
        <div className={styles.dropdown}>
          <a href="/">Home</a>
          <br></br>
          <a href="/samples">View Examples of My Work</a>
          <br></br>
          <a href="http://planetsandstuff.surge.sh/" target="blank">My very first Front End Project</a>
          <br></br>
          <a href="https://github.com/SamChav?tab=repositories" target="blank">My GitHub</a>
        </div>
      </div>
      <h1 className={styles.header}>
        Hi, I'm Sam Chavez and this is my portfolio!
      </h1>
    </div>
  );
};

export default Header;
