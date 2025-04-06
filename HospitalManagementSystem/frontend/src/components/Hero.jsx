import React from "react";

const Hero = ({ title, imageUrl }) => {
  return (
    <>
      <div className="hero container">
        <div className="banner">
          <h1>{title}</h1>
          <p>
            Venky Medical Institute is a cutting-edge healthcare facility focused
            on providing holistic and advanced medical care. Our dedicated team
            of professionals strives to offer personalized services designed to
            meet the unique needs of each patient. At Venky Medical Institute, we
            are committed to ensuring your health and well-being by delivering
            world-class care in a compassionate and supportive environment.
          </p>
        </div>
        <div className="banner">
          <img src={imageUrl} alt="hero" className="animated-image" />
          <span>
            <img src="/Vector.png" alt="vector" />
          </span>
        </div>
      </div>
    </>
  );
};

export default Hero;
