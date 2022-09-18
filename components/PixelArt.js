import React, { useState } from "react";
import styles from "../styles/PixelArtMaker.module.css";
const PixelArtMaker = () => {
  let [pixel, setPixel] = useState([]);
  const [isBoardOpen, setIsBoardOpen] = useState(false);
  let [colorPicker, setColorPicker] = useState("");
  const [isMouseDown, setIsMouseDown] = useState(false)
  // const colorChoice = (e) => {
  //   const colorValue = e.target.value;
  //   setColorPicker((colorPicker = colorValue));
  //   console.log(colorPicker);
  // };

  // const paintCanvas = () => {
  //   const targetPixel = pixel.currentTarget;
  //   if (isMouseDown === true) {
  //     targetPixel.style.backgroundColor = colorPicker;
  //   }
  // }

  const colorTime = (pixel) => {
    console.log(colorPicker);
    setColorPicker(
      (colorPicker = document.getElementById("colorpicker").value)
    );
    const targetPixel = pixel.currentTarget;
    targetPixel.style.backgroundColor = colorPicker; //holy shit, i had to dig to target this.
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
            onMouseDown={colorTime}
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
      <input type="color" id="colorpicker" />
    </div>
  );
};
export default PixelArtMaker;
