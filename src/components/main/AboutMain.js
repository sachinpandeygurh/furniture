import React from 'react';

const AboutMain = () => {
  return (
    <div className="container my-5">
      <div className="row align-items-center">
        <div className="col-md-6 d-flex justify-content-around">
          <img
            className="img-fluid rounded w-50"
            src="https://i0.wp.com/www.marcpridmore.com/wp-content/uploads/2020/10/marc-scaled.jpg?resize=1122%2C1536&ssl=1"
            alt=""
          />
        </div>
        <div className="col-md-6 "style={{ fontFamily: 'Cinzel, SansSerif' }}>
          <h3 className="text-dark text-uppercase" style={{ fontFamily: 'Cinzel, SansSerif' }}>
            Crystal Cove Interior Design
          </h3>
          <p className="text-dark px-2 py-3 textRightBorder" >
            Marc Pridmore is the designer and consultant for Southern California’s most discerning clientele. Additionally serving international clients with unique Interior Design and Luxury Furniture pieces around the globe.
          </p>
          <p className="text-muted">
            Marc Pridmore Designs was established in 2012 in Costa Mesa, California, serving homes both locally and internationally with custom interior design and high-end furniture. With a showroom spanning 50,000 sq ft, we offer some of the most exclusive luxury furniture on the market. Our showroom curates an experience that is able to showcase these peerless pieces.
          </p>
          <button className="btn btn-white border-dark rounded px-4 py-2">BOOK A DESIGN CONSULTATION</button>
        </div>
      </div>
    </div>
  );
};

export default AboutMain;
