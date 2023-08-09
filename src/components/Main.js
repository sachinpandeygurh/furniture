import React from 'react';
import Slider from './Slider';
import { CImage } from '@coreui/react';
import 'react-awesome-slider/dist/styles.css';
import { CardImg } from 'react-bootstrap';

const Main = () => {
  const imageSources = [
    'https://www.marcpridmore.com/wp-content/uploads/2023/02/Slideshow1.jpg',
    'https://www.marcpridmore.com/wp-content/uploads/2023/02/Slideshow2.jpg',
    'https://www.marcpridmore.com/wp-content/uploads/2023/02/Slideshow3.jpg',
    'https://www.marcpridmore.com/wp-content/uploads/2023/02/Slideshow4.jpg',
  ];

  return (
    <div className='row'>
      <div className='text-center bg-dark text-white py-2'>
        SOUTHERN CALIFORNIA'S LARGEST LUXURY FURNITURE & INTERIOR DESIGN SHOWROOM
      </div>
      <Slider srcImg='https://www.marcpridmore.com/wp-content/uploads/2023/02/Slideshow1.jpg' />
      <div className='row mt-5 justify-content-evenly'>
        <h3
          className='bg-dark text-white text-center py-1'
          style={{ fontFamily: 'Cinzel, SansSerif' }}
        >
          Recent Interior Design Work
        </h3>
        <div className='container px-5 d-flex justify-content-evenly'>
          {imageSources.map((src, index) => (
            <CardImg key={index} src={src} />
          ))}
        </div>
      </div>
      <div className='d-grid justify-items-center f-img'>
        <h2 className='text-center'>LUXURY FURNITURE FOR UNIQUE INTERIORS</h2>
        <CImage
          className='rounded'
          width={1000}
          src='https://i0.wp.com/www.marcpridmore.com/wp-content/uploads/2023/03/HT6A5292a-scaled.jpg'
          alt='marcpridmore'
        />
      </div>
      <div className='d-grid f-img'>
        <h2 className='text-center' style={{ fontFamily: 'Cinzel, SansSerif' }}>
          SOUTHERN CALIFORNIA'S LARGEST LUXURY FURNITURE & INTERIOR DESIGN SHOWROOM
        </h2>
        <img
          className='w-100'
          src='https://i0.wp.com/www.marcpridmore.com/wp-content/uploads/2023/02/Screenshot-2023-02-28-at-5.44.31-PM.png'
          alt='marcpridmore'
        />
      </div>
      <div className='m-2 px-3 d-flex f-img justify-content-evenly'>
        <button className='btn border rounded bg-dark text-white'>SHOP ON-LINE NOW</button>
        <button className='btn border rounded bg-white'>VISIT SHOWROOM</button>
      </div>
      <div className='video-wrapper full'>
      <video class="fill" width='100%' src="https://www.marcpridmore.com/wp-content/uploads/2020/03/video-crystal-cove.mp4" poster="https://www.marcpridmore.com/wp-content/uploads/2020/10/home-page.jpg" loop="" playsinline="" reload="" webkit-playsinline=""></video>
      </div>
    </div>
  );
};

export default Main;
