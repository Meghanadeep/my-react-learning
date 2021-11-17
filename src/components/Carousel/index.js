import React, { useState } from "react";
import './index.css';

const Carousel = ({ SliderData }) => {
  const [current, setCurrent] = useState(0);
  const length = SliderData.length;
  const prevClickHandler = () => {
     setCurrent(current === 0 ? length - 1 : current-1);
  }

  const nextClickHandler = () => {
    setCurrent(current === length -1 ? 0 : current+1);
  }

  const onDotClickHandler = (index) => {
    setCurrent(index)
  }

  return (
    <div className="slider">
      <div className="prev" onClick={prevClickHandler}>Prev</div>
      <div className="next" onClick={nextClickHandler}>Next</div>
      {SliderData.map((indvSlid, index) => {
        return (
          <div key={index} className="slide">
            {index === current && <img alt={"carouselImage"} className="image" src={indvSlid.image} />}
          </div>
        );
      })}
      <div className="dot-container">
      {SliderData.map((indv, index) => {
        return <div key={`dot-${index}`} className={`dot ${current === index ? 'active' : " "}`} onClick={() => onDotClickHandler(index)}></div>
      })}
      </div>
    </div>
  );
};

export default Carousel;
