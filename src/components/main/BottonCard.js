import React from 'react';
import Card from 'react-bootstrap/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faComment, faCopy } from '@fortawesome/free-solid-svg-icons'; // Import the icons you need

function BottonCard({imgSrc, imgAlt, imgText, Title, likeCount , commentCount}) {
  return (
    <div className="col-md-3">
        <Card className="bg-white text-dark text-white imgparent container ">
      <Card.Img className='m-1' height={100} src={imgSrc} alt={imgAlt} />
      <Card.ImgOverlay className='cardtextarea'>
     <p className='text-end px-2'>
     <FontAwesomeIcon icon={faCopy} />
     </p>
        <Card.Text className='p-2'>
          {imgText}
        </Card.Text>
        <Card.Text className='position-relative cardtextareaChild mt-0 justify-content-evenly d-flex'>
        <p className='d-flex align-items-center'> <FontAwesomeIcon className='px-2' icon={faHeart} />  {likeCount}</p>
          <p className='d-flex align-items-center'> <FontAwesomeIcon className='px-2' icon={faComment} /> {commentCount}</p>

        </Card.Text>
      </Card.ImgOverlay>
      <Card.Body>
        <p className="text-dark card-title">{Title}</p>
        <div className='text-dark position-relative mt-5 justify-content-evenly d-flex'>
        <p> <FontAwesomeIcon icon={faHeart} />  {likeCount}</p>
          <p> <FontAwesomeIcon icon={faComment} /> {commentCount}</p>
        </div>
      </Card.Body>
    </Card>
    </div>
  );
}

export default BottonCard;
