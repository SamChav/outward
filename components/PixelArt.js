import React, { useState } from "react";
import styles from "../styles/PixelArtMaker.module.css";
import { CirclePicker } from "react-color";

function buildPixels() {
  let result = [];

  for (let i = 0; i < 1200; i++) {
    result.push({
      key: i,
      color: "#FFFFFF",
    });
  }

  return result;
}

const PixelArtMaker = () => {
  const [pixels, setPixels] = useState(buildPixels());
  let [colorPicker, setColorPicker] = useState("");
  const [isMouseDown, setIsMouseDown] = useState(false);

  function updatePixel(index) {
    setIsMouseDown(true);
    const pixel = pixels[index];
    const updatedPixel = { ...pixel, color: colorPicker };
    const result = [
      ...pixels.slice(0, index),
      updatedPixel,
      ...pixels.slice(index + 1),
    ];
    setPixels(result);
  }

  const colorPicked = (color) => {
    setColorPicker(color.hex);
  };

  const colorMouseOver = (index) => {
    const pixel = pixels[index];
    const updatedPixel = { ...pixel, color: colorPicker };
    if (isMouseDown) {
      const result = [
        ...pixels.slice(0, index),
        updatedPixel,
        ...pixels.slice(index + 1),
      ];
      setPixels(result);
    }
  };

  const stopColoring = () => {
    setIsMouseDown(false);
    console.log("stopcoloring reached");
  };

  return (
    <div className={styles.sampleTwo}>
      <span className={styles.sampleTwoText}>
        My pixel art maker, one of my very first projects that I got to work on!
      </span>
      <div className={styles.pixelArtContainer}>
        <div className={styles.pixelCanvas} onMouseEnter={stopColoring}>
          {pixels.map((x) => {
            return (
              <button
                key={x.key}
                data-key={x.key}
                className={styles.artButtons}
                style={{ backgroundColor: x.color }}
                onMouseDown={() => updatePixel(x.key, colorPicker)}
                onMouseOver={() => colorMouseOver(x.key, colorPicker)}
                onMouseUp={stopColoring}
              ></button>
            );
          })}
        </div>
        {/* <input type="color" id="colorpicker" onChange={colorTime} /> */}

        <CirclePicker onChangeComplete={colorPicked} className={styles.swatch}/>
      </div>
    </div>
  );
};
export default PixelArtMaker;
