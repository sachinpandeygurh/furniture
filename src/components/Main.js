import React from "react";
import Slider from "./Slider";
import { CImage } from "@coreui/react";
import "react-awesome-slider/dist/styles.css";
import { CardImg, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaHeart, FaInstagram, FaPlayCircle } from "react-icons/fa";
import BottonCard from "./main/BottonCard";
import VideoControl from "./main/VideoControl";
import AboutMain from "./main/AboutMain";
import DesignServices from "./main/DesignServices";

const Main = () => {
  const imageSources = [
    "https://www.marcpridmore.com/wp-content/uploads/2023/02/Slideshow1.jpg",
    "https://www.marcpridmore.com/wp-content/uploads/2023/02/Slideshow2.jpg",
    "https://www.marcpridmore.com/wp-content/uploads/2023/02/Slideshow3.jpg",
    "https://www.marcpridmore.com/wp-content/uploads/2023/02/Slideshow4.jpg",
  ];
  let low = 0;
  const arr = [
    "Starburst channeled swivel chairs by ...",
    "Mix metals, mix manufacturers, make magic. ...",
    "Style and sophistication. Find it all at Marc ...",
    "Sleep in Beauty, get your own custom designed ...  ",
  ];
  return (
    <div>
      <h2 className="text-center bg-dark text-white py-2">
        SOUTHERN CALIFORNIA'S LARGEST LUXURY FURNITURE & INTERIOR DESIGN
        SHOWROOM
      </h2>
      <Slider srcImg="https://www.marcpridmore.com/wp-content/uploads/2023/02/Slideshow1.jpg" />
      <div className="row mt-5 justify-content-evenly">
        <h3
          className="bg-dark text-white text-center py-1"
          style={{ fontFamily: "Cinzel, SansSerif" }}
        >
          Recent Interior Design Work
        </h3>
        <div className="container px-5 d-flex justify-content-evenly">
          {imageSources.map((src, index) => (
            <CardImg key={index} src={src} className="card-img" />
          ))}
        </div>
      </div>
      <div className="d-flex justify-content-center mt-5">
        <CImage
          className="rounded"
          width={1000}
          src="https://i0.wp.com/www.marcpridmore.com/wp-content/uploads/2023/03/HT6A5292a-scaled.jpg"
          alt="marcpridmore"
        />
      </div>
      <div className="d-flex justify-content-center mt-5">
        <h2 className="text-center" style={{ fontFamily: "Cinzel, SansSerif" }}>
          SOUTHERN CALIFORNIA'S LARGEST LUXURY FURNITURE & INTERIOR DESIGN
          SHOWROOM
        </h2>
      </div>
      <div className="d-flex justify-content-center mt-3">
        <img
          className="w-100"
          src="https://i0.wp.com/www.marcpridmore.com/wp-content/uploads/2023/02/Screenshot-2023-02-28-at-5.44.31-PM.png"
          alt="marcpridmore"
        />
      </div>
      <div className="d-flex justify-content-center my-3">
        <Button className="border-dark rounded bg-dark text-white p-2 px-5 fs-3 mx-2">
          SHOP ON-LINE NOW
        </Button>
        <Button className="border-dark rounded bg-white text-dark p-2 px-5 fs-3 mx-2">
          VISIT SHOWROOM
        </Button>
      </div>
      <VideoControl />
      <DesignServices/>
      <div>
        <AboutMain />
      </div>
      <div className="row container m-auto justify-content-between;">
        {imageSources.map((imgSrc, index) => {
          let idx = low;
          low++;
          return (
            <BottonCard
              imgAlt={index}
              imgSrc={imgSrc}
              imgText={arr[idx]}
              Title={arr[idx]}
              likeCount={Math.round(Math.random() * 100)}
              commentCount={Math.round(Math.random() * 100)}
            />
          );
        })}
      </div>
      <div className="container mt-3 d-flex justify-content-center align-items-center">
        <button className="btn border-none rounded text-white bg-info ">
          {" "}
          <FaInstagram /> Follow on Instagram
        </button>
      </div>
    </div>
  );
};

export default Main;
