import React from "react";
import { Link } from "react-router-dom";
import BannerImage from "../images/zomato2.jpeg";
import "../styles/Home.css";

function Home() {
  return <>
    <div className="home" style={{ backgroundImage: `url(${BannerImage})` }} >
      <div className="headerContainer" >
        <h1><b>Food Corner</b></h1> 
           <p><b>INDIAN FOOD AT A CLICK</b></p> 
        <Link to="/menu">
          <button >ORDER NOW</button>
        </Link>
      </div>
    </div>
  </>;
}

export default Home;