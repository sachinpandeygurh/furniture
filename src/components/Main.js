import React from 'react';
import Slider from './Slider';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import { CardImg } from 'react-bootstrap';

const Main = () => {
  return (
    <div className='row'>
      <h2 className='bg-dark text-white text-center'>SOUTHERN CALIFORNIA'S LARGEST LUXURY FURNITURE & INTERIOR DESIGN SHOWROOM</h2>
      <div className=''>
        <AwesomeSlider>
          <Slider src='https://www.marcpridmore.com/wp-content/uploads/2023/02/Slideshow1.jpg' />
          <Slider src='https://www.marcpridmore.com/wp-content/uploads/2023/02/Slideshow2.jpg' />
          <Slider src='https://www.marcpridmore.com/wp-content/uploads/2023/02/Slideshow3.jpg' />
          <Slider src='https://www.marcpridmore.com/wp-content/uploads/2023/02/Slideshow4.jpg' />
        </AwesomeSlider>
      </div>
      <div className="row mt-5 ">
        <h3 className='bg-dark text-white text-center'>Recent Interior Design Work</h3>
        <div className="container px-5">
        <CardImg src="https://i0.wp.com/www.marcpridmore.com/wp-content/uploads/2023/03/HT6A5292a-scaled.jpg" />
        <CardImg src="https://i0.wp.com/www.marcpridmore.com/wp-content/uploads/2023/03/HT6A5292a-scaled.jpg" />
        <CardImg src="https://i0.wp.com/www.marcpridmore.com/wp-content/uploads/2023/03/HT6A5292a-scaled.jpg" />
        <CardImg src="https://i0.wp.com/www.marcpridmore.com/wp-content/uploads/2023/03/HT6A5292a-scaled.jpg" />
        </div>
      </div>
      <div className='d-grid justify-items-center f-img' >
        <h2 className='text-center'>LUXURY FURNITURE FOR UNIQUE INTERIORS</h2>
        <img className='rounded' width={1000} src="https://i0.wp.com/www.marcpridmore.com/wp-content/uploads/2023/03/HT6A5292a-scaled.jpg" alt="marcpridmore" />
      </div>
    </div>
  );
}

export default Main;
