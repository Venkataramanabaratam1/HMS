import React from "react";

const Biography = ({ imageUrl }) => {
  return (
    <>
      <div className="container biography">
        <div className="banner">
          <img src={imageUrl} alt="Venky Medical Institute" />
        </div>
        <div className="banner">
          <p>Biography</p>
          <h3>Who We Are</h3>
          <p>
            Venky Medical Institute is a leading healthcare provider dedicated to offering comprehensive and personalized medical care. Our mission is to provide world-class medical services in a compassionate and patient-centered environment.
          </p>
          <p>
            At Venky Medical Institute, we combine the latest medical technologies and treatments with a deep commitment to the well-being of our patients. Our experienced team of healthcare professionals works tirelessly to ensure that every patient receives the highest quality care tailored to their individual needs.
          </p>
          <p>
            We focus on delivering exceptional healthcare services across a range of specialties, from preventive care to advanced treatments. Our goal is to improve the health and lives of our community by providing the best possible healthcare solutions.
          </p>
          <p>
            We take pride in fostering an environment where patients feel heard, cared for, and supported at every stage of their healthcare journey. At Venky Medical Institute, your health is our top priority, and we are here to support you every step of the way.
          </p>
        </div>
      </div>
    </>
  );
};

export default Biography;
