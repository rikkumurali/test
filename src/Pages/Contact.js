import React from "react";
import ContactImage from "../images/contactimage.jpg";
import "../styles/Contact.css";

function Contact() {
  return (
    <div className="contact">
      <div
            className="leftSide"
            style={{ backgroundImage: `url(${ContactImage})` }} >

        </div>
      <div className="rightSide">
        <h1> Contact Us</h1>

        <form id="contact-form" method="POST">
          <label htmlFor="name">Full Name</label>
          <input name="name" placeholder="Enter Full Name" type="text" />
          <label htmlFor="email">E-mail</label>
          <input name="email" placeholder="Enter E-mail" type="email" />
          <label htmlFor="message">Message</label>
          <textarea
            rows="6"
            placeholder="Enter Message"
            name="message"
            required
          ></textarea>
          <button type="submit"> Send Message</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
