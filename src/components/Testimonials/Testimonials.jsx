import React from "react";
import "./Testimonials.scss";
import { testimonialsData } from "../../data";

export default function Testimonials() {
  return (
    <div className="testimonials" id="testimonials">
      <h1>Testimonials</h1>
      <div className="container">
        {testimonialsData.map((each) => (
          <div className={"card " + (each.featured ? "featured" : "")}>
            <div className="top">
              <img src="assets/right-arrow.png" className="left" alt="" />
              <img className="user" src={each.img} alt="" />
              <img className="right" src={each.icon} alt="" />
            </div>
            <div className="center">{each.desc}</div>
            <div className="bottom">
              <h3>{each.name}</h3>
              <h4>{each.title}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
