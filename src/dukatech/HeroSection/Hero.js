import React from "react";
import "./hero.css";
import image1 from "../../images/img1.jpeg";
const Hero = () => {
  return (
    <section className="hero-1">
      <div className="hero-container">
        <div className="info-container">
          <h1>Digitizing Africa</h1>
          <h2>
            We build and scale tech-enabled solutions across various industries,
            with a focus on Africa.
          </h2>
          <h4>
            We focus on promoting growth and transforming markets across Africa
            through integrated business and software solutions.
          </h4>
          <button className="btn">Learn More</button>
        </div>
        <div className="img-container">
          <img src={image1} alt="ShopOkoa Team" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
