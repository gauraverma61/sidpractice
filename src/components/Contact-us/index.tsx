import React from "react";
import CustomButton from "../Button";

const ContactUsComp = () => {
  return (
    <div className="screen">
      <div className="container">
        <h1 className="header">Sid Goswami</h1>
        <p className="para">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod minus
          ducimus est incidunt consequuntur maxime, laboriosam atque similique
          quis deleniti odio. Dolorum obcaecati impedit labore quia ipsam fugit
          incidunt saepe?
        </p>
        <div className="btn">
          <button>Click me</button>
        </div>
      </div>
      <div className="grid">
        <div>Gaurav</div>
        <div>Gaurav</div>
        <div>Gaurav</div>
        <div>Gaurav</div>
        <div>Gaurav</div>
        <div>Gaurav</div>
        <div>Gaurav</div>
        <div>Gaurav</div>
        <div>Gaurav</div>
        <div>Gaurav</div>
      </div>
      <CustomButton title="Click me"/>
      <CustomButton title="Confirm"/>
      <CustomButton title="Exit"/>
    </div>
  );
};

export default ContactUsComp;
