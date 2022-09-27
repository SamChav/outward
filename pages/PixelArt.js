import React, { useState } from "react";
import styles from "../styles/PixelArtMaker.module.css";
import { CirclePicker } from "react-color";
import Head from "next/head";
import Header from "../components/Header";
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
  let [colorPicker, setColorPicker] = useState("#F44336");
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
  };

  const resetBoard = () => {
    setPixels(buildPixels());
  };

  return (
    <div className="root">
      <Head>
        <title>Samuel Chavez - Full Stack Developer</title>
      </Head>
      <div className={styles.appContainer}>
        <Header />
        <div className={styles.samplesContainer}>
          <div className={styles.sampleTwo}>
            <div className={styles.sampleTwoText}>
              <p className={styles.paragraph}>
                This is my pixel art maker project, one of the first projects I
                worked on. I did refactor all the code so this would work with
                React! You can view the code{" "}
                <a
                  style={{ textDecoration: "none" }}
                  target="blank"
                  href="https://github.com/SamChav/outward/blob/master/pages/PixelArt.js"
                >
                  here
                </a>
                .
              </p>
            </div>
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
              <div className={styles.pallet}>
                <p style={{ marginRight: "20px", marginTop: "35px" }}>Current color:</p>
                <div
                  style={{
                    backgroundColor: colorPicker,
                    width: "40px",
                    height: "40px",
                    borderRadius: "10px",
                  }}
                ></div>
                <CirclePicker
                  onChangeComplete={colorPicked}
                  className={styles.swatch}
                />
                <button className={styles.resetButton} onClick={resetBoard}>
                  Reset
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default PixelArtMaker;
