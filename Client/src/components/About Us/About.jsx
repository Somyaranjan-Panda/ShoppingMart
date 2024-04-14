import React from "react";
import "./About.scss";

const About = () => {
  return (
    <div className="about-us">
      <div className="about-container">
        <div className="about-heading">About ShoppingMart</div>
        <div className="about-section">
          <h2>Welcome</h2>
          <p>
            Welcome to <strong>ShoppingMart</strong>, your ultimate destination
            for cutting-edge electronics and gadgets.
          </p>
        </div>
        <div className="about-section">
          <h2>Our Mission</h2>
          <p>
            At ShoppingMart, we're committed to providing you with a curated
            selection of the latest smart watches, headphones, earbuds,
            Bluetooth speakers, and more. Our mission is to enhance your
            lifestyle with innovative technology that meets the highest
            standards of performance and design.
          </p>
        </div>
        <div className="about-section">
          <h2>Our Vision</h2>
          <p>
            Our vision at ShoppingMart is to become the go-to platform for tech
            enthusiasts seeking quality electronics and exceptional customer
            service. We strive to foster a community of passionate individuals
            who share our love for technology and innovation.
          </p>
        </div>
        <div className="about-section">
          <h2>Our Values</h2>
          <p>
            Innovation: We are constantly seeking out the latest advancements in
            technology to bring you the most innovative products. Quality: We
            believe in offering only the highest quality electronics that meet
            our rigorous standards. Customer Satisfaction: Your satisfaction is
            our top priority. We're dedicated to providing you with a seamless
            shopping experience and responsive customer support. Transparency:
            We believe in being transparent and honest in all our interactions
            with our customers.
          </p>
        </div>
      </div>
      <div className="about-thankyou">
        <h2>Thank you</h2>
        <p>
          Thank you for choosing ShoppingMart. We appreciate your support and
          look forward to serving you!
        </p>
      </div>
    </div>
  );
};

export default About;
