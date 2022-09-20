import React, { useState } from "react";
import styles from "../styles/PixelArtMaker.module.css";
import { CirclePicker } from "react-color";

function buildPixels() {
  let result = [];

  for (let i = 0; i < 1200; i++) {
    result.push({
      key: i,
      color: "#FFFFFF"
    });
  }

  return result;
}

const PixelArtMaker = () => {
  const [pixels, setPixels] = useState(buildPixels());
  let [colorPicker, setColorPicker] = useState('');
  const [isMouseDown, setIsMouseDown] = useState(false);

  function updatePixel(index) {
    console.log(colorPicker)
    setIsMouseDown(true)  
    const pixel = pixels[index];
    const updatedPixel = { ...pixel, color: colorPicker };
    const result = [
      ...pixels.slice(0, index),
      updatedPixel,
      ...pixels.slice(index + 1)
    ];
    setPixels(result);
  }

  const colorPicked = (color) => {
    setColorPicker(color.hex)
    console.log(colorPicker)
  }

  // const colorTime = (pixel) => {
  //   console.log(colorPicker)
  //   const targetPixel = pixel.currentTarget;
  //   setIsMouseDown((isMouseDown = true));
  //   targetPixel.style.backgroundColor = colorPicker;
  // };

  const colorMouseOver = (index) => {
    const pixel = pixels[index];
    const updatedPixel = { ...pixel, color: colorPicker };  /*incorprate this <------------------------------------------------ */
    console.log(isMouseDown);
    if (isMouseDown) {
      const result = [
        ...pixels.slice(0, index),
         updatedPixel,
         ...pixels.slice(index + 1)
       ];
       setPixels(result);
     }
    }
    

  const stopColoring = () => {
    setIsMouseDown(false);
    console.log("stopcoloring reached");
  };

  // const boardSetUp = () => {
  //   if (isBoardOpen === false) {
  //     setIsBoardOpen((isBoardOpen = true));
  //     for (let i = 0; i < 1200; i++) {
  //       setPixel((pixel) => [
  //         ...pixel,
  //         <button
  //           key={i}
  //           data-key={i}
  //           className={styles.artButtons}
  //           onMouseDown={updatePixel}
  //           onMouseOver={colorMouseOver}
  //           onMouseUp={stopColoring}
  //         ></button>,
  //       ]);
  //     }
  //   } else {
  //     return null;
  //   }
  // };


  // boardSetUp();

  return (
    <div className={styles.pixelArtContainer}>
      <div className={styles.pixelCanvas} onMouseEnter={stopColoring}>
        {pixels.map(x => {
          return (
            <button
              key={x.key}
              data-key={x.key}
              className={styles.artButtons}
              style={{backgroundColor: x.color}}
              onMouseDown={() => updatePixel(x.key, colorPicker)}
              onMouseOver={() => colorMouseOver(x.key, colorPicker)}
              onMouseUp={stopColoring}
              ></button>
          );
        })}
      </div>
      {/* <input type="color" id="colorpicker" onChange={colorTime} /> */}

      <CirclePicker onChangeComplete={colorPicked} />
    </div>
  );

  // return (
  //   <div className={styles.pixelArtContainer}>
  //     <div className={styles.pixelCanvas} onMouseEnter={stopColoring}>
  //       {pixel}
  //     </div>
  //     <input type="color" id="colorpicker" onChange={updatePixel} />
  //     {/* <button className={styles.openBoardButton}>
  //       reset
  //     </button> */}
  //     <CirclePicker value={colorPicker} onChangeComplete={colorPicked}/>
  //   </div>
  // );
};
export default PixelArtMaker;
