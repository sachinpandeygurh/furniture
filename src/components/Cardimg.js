import React from 'react';

const Img = ({ cardImgLink }) => {
  return (
    <div className=''>
      <img className='card-img ' src={cardImgLink} alt={`LUXURY FURNITURE ${cardImgLink}`} />
    </div>
  );
}

export default Img;
