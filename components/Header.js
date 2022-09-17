import React from "react";
import styles from "../styles/Header.module.css";
const Header = () => {
  return (
    <div className={styles.navBar}>
      <button className={styles.menuButton}>Menu</button>
      <h1 className={styles.header}>
        Welcome, I'm Sam Chavez and I'm a full stack developer and an 11 year US
        Army veteran!
      </h1>
    </div>
  );
};

export default Header;
