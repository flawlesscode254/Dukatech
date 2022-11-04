import React from "react";
import "./about.css";
const About = () => {
  return (
    <section className="about-1">
      <h2 className="heading">Mission</h2>
      <p className="text-1">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam illo
        iusto quisquam quod exercitationem voluptates dolores repudiandae
        praesentium assumenda sint quae, modi dolore. Voluptates debitis amet
        velit doloremque commodi perspiciatis.
      </p>
      <div className="line"></div>
      <div className="statistics">
        <div className="stat">
          <h3>100+</h3>
          <p className="text-1">Number of merchants</p>
        </div>
        <div className="stat">
          <h3>20+</h3>
          <p className="text-1">Number of Wholesellers</p>
        </div>
        <div className="stat">
          <h3>100+</h3>
          <p className="text-1">Number of Users</p>
        </div>
      </div>
    </section>
  );
};

export default About;
