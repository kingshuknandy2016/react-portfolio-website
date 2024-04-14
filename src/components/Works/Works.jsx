import React, { useState } from "react";
import "./Works.scss";
import { workData } from "../../data";

export default function Works() {
  const [currentSlider, setCurrentSlider] = useState(0);

  const handleClick = (way) => {
    console.log(way);
    const lastSlideIndex = workData.length - 1;
    let sliderValue;
    // When clicking on left arrow
    if (way === "left") {
      sliderValue = currentSlider > 0 ? currentSlider - 1 : lastSlideIndex;
    } else {
      //When clicking the right arrow
      sliderValue = currentSlider < lastSlideIndex ? currentSlider + 1 : 0;
    }
    setCurrentSlider(sliderValue);
  };

  return (
    <div className="works" id="works">
      <div
        className="slider"
        style={{ transform: `translateX(-${currentSlider * 100}vw)` }}
      >
        {workData.map((data) => (
          <div key={data.id} className="container">
            <div className="item">
              <div className="left">
                <div className="leftContainer">
                  <div className="imgContainer">
                    <img src={data.icon} alt="" />
                  </div>
                  <h2>{data.title}</h2>
                  <p>{data.desc}</p>
                  <span>Projects</span>
                </div>
              </div>
              <div className="right">
                <img src={data.img} alt="" />
              </div>
            </div>
          </div>
        ))}
      </div>
      <img
        src="assets/arrow.png"
        className="arrow left"
        alt=""
        onClick={() => handleClick("left")}
      />
      <img
        src="assets/arrow.png"
        className="arrow right"
        alt=""
        onClick={() => handleClick("right")}
      />
    </div>
  );
}
