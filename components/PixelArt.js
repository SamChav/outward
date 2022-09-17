import React, { useState } from "react";
import styles from "../styles/PixelArtMaker.module.css";
const PixelArtMaker = () => {
  let [pixel, setPixel] = useState([]);
  const [isBoardOpen, setIsBoardOpen] = useState(false);
    let [isActive, setIsActive] = useState(false)
  const colorTime = () => {
    setIsActive(current => !current)
    console.log(pixel)
  };

  const boardSetUp = () => {
    if (isBoardOpen === false) {
      setIsBoardOpen((isBoardOpen = true));
      for (let i = 0; i < 800; i++) {
        setPixel((pixel) => [
          ...pixel,
          <button
            key={i}
            className={styles.artButtons}
            onClick={colorTime}            
          ></button>,
        ]);
      }
    } else {
      return null;
    }
  };

  return (
    <div className={styles.pixelArtContainer}>
      <button className={styles.openBoardButton} onClick={boardSetUp}>
        Open
      </button>
      <div className={styles.pixelCanvas}>{pixel}</div>
    </div>
  );
};
export default PixelArtMaker;
