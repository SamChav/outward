import React from "react";
import styles from "../styles/Header.module.css";
const Header = () => {
  return (
    <div className={styles.navBar}>
    <div className={styles.dropdownDiv}>
      <button className={styles.menuButton}>Menu</button>
      <div className={styles.dropdown}>
        <a href="/">Home</a><br></br>
        <a href="/samples">View Examples of My Work</a>
      </div>
      </div>
      <h1 className={styles.header}>
        Welcome, I'm Sam Chavez and I'm a full stack developer and an 11 year US
        Army veteran!
      </h1>
    </div>
  );
};

export default Header;
