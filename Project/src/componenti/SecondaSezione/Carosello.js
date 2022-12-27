import classes from "./Carosello.module.css";
import { useState, useEffect } from "react";
import React from "react";

const Carosello = (props) => {
  const { children } = props;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchPosition, setTouchPosition] = useState(null);
  const [length, setLength] = useState(children.length);

  // Set the length to match current children from props
  useEffect(() => {
    setLength(children.length);
  }, [children]);

  const handleTouchStart = (e) => {
    const touchDown = e.touches[0].clientX;
    setTouchPosition(touchDown);
  };

  const handleTouchMove = (e) => {
    const touchDown = touchPosition;

    if (touchDown === null) {
      return;
    }

    const currentTouch = e.touches[0].clientX;
    const diff = touchDown - currentTouch;

    if (diff > 5) {
      next();
    }

    if (diff < -5) {
      prev();
    }

    setTouchPosition(null);
  };

  const next = () => {
    if (currentIndex < length - 1) {
      setCurrentIndex((prevState) => prevState + 1);
    }
    console.log(props.children[1].props.src);
  };

  const prev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevState) => prevState - 1);
    }
  };

  return (
    // <a href={props.children[props.index].props.src}>
    <div className={classes["carousel-container"]}>
      <div className={classes["carousel-wrapper"]}>
        {/* You can alwas change the content of the button to other things */}
        {currentIndex > 0 && (
          <button className={classes["left-arrow"]} onClick={prev}>
            &lt;
          </button>
        )}
        {/* You can alwas change the content of the button to other things */}
        {currentIndex < length - 1 && (
          <button className={classes["right-arrow"]} onClick={next}>
            &gt;
          </button>
        )}
        <div
          className={classes["carousel-content-wrapper"]}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
        >
          <div
            className={classes["carousel-content"]}
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {props.children}
          </div>
        </div>
      </div>
    </div>
    // </a>
  );
};

export default Carosello;
