import React from "react";
import "./Home.css";
import Image1 from "../../Images/Home_Images/img1.jpg";
import Image2 from "../../Images/Home_Images/img2.jpg";
import Image3 from "../../Images/Home_Images/img3.jpg";
import Resume from "../../Images/Resume_Titas Saha.pdf";
const Home = () => {
  return (
    <div className="homeintro">
      <div className="h-left">
        <span>Hello! I Am</span>
        <span>Titas Saha</span>
        <a className="h-button" href={Resume}>
          Download CV
        </a>
      </div>
      <div className="h-right">
        <img src={Image1} alt="" />
        <img src={Image2} alt="" />
        <img src={Image3} alt="" />
        <div className="blur1"></div>
        <div className="blur2"></div>
        <div className="blur3"></div>
      </div>
    </div>
  );
};
export default Home;
