import React from "react";
import AboutImage from "../images/aboutimage.jpg";
import "../styles/About.css";

function About() {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${AboutImage})` }}
      ></div>
      <div className="aboutBottom">
        <h1><b>ABOUT US</b></h1>
        <p>
            Company Profile is an initiative by StartupTalky to publish verified information on different startups and organizations.
            The content in this post has been approved by ZOMATO. There were days when we used to call different restaurants to 
            place orders and again call up for corrections and directions and reservations. Then came in applications like Zomato,
            which reversed the whole scenario and made it extremely simple for the consumers. Deepinder Goyal and Pankaj Chaddah founded Zomato in 2008
            further aided this process of eating out and food delivery.
        </p>
      </div>
    </div>
  );
}

export default About;