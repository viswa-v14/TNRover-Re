import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <section className="f-wrapper">
      <div className="paddings innerWidth flexCenter f-container">
        <div className="flexColStart f-left">
          <img src="./logo2.png" alt="" width={120} />
        </div>
        <div className="flexColStart f-right">
          <div className="flexCenter f-menu">
            <span>Contact</span>
            <span>Services</span>
            <span>Product</span>
            <span>About</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
