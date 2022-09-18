import React, { useState } from "react";
import styles from "../styles/PixelArtMaker.module.css";
const PixelArtMaker = () => {

  let [pixel, setPixel] = useState([]);
  const [isBoardOpen, setIsBoardOpen] = useState(false);
  let [isActive, setIsActive] = useState(false);
  let [paintbrush, setPaintbrush] = useState('#F0FFFF')  //user chooses paintbrush, set state, update style in the button, might have to make a a new button and replace it?
  const colorTime = (pixel) => {
    const targetPixel = pixel.currentTarget
    setPaintbrush(paintbrush = "#000000")
    targetPixel.style.backgroundColor = paintbrush //holy shit, i had to dig to target this.
  };

  const boardSetUp = () => {
    if (isBoardOpen === false) {
      setIsBoardOpen((isBoardOpen = true));
      for (let i = 0; i < 800; i++) {
        setPixel((pixel) => [
          ...pixel,
          <button
            key={i}
            data-key={i}
            className={styles.artButtons}
            onClick={colorTime}
            style={{background: paintbrush}}
           >
            </button>,
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
      hello
    </div>
  );
};
export default PixelArtMaker;
