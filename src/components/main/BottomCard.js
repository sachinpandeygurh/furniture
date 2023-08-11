import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faComment, faCopy } from "@fortawesome/free-solid-svg-icons";

function BottomCard({
  imgSrc,
  imgAlt,
  imgText,
  Title,
  likeCount,
  commentCount,
}) {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div className="col-md-3">
      <Card className={`bg-white text-dark text-white imgparent container ${isHovered ? 'hovered' : ''}`}>
        <div
          className="card-img m-1"
          style={{
            backgroundImage: `url(${imgSrc})`,
            backgroundColor: isHovered ? 'black' : 'transparent',
            height: "12em",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        ></div>

        <Card.ImgOverlay className="cardtextarea">
          <p className="text-end px-2">
            <FontAwesomeIcon icon={faCopy} />
          </p>
          <Card.Text className="p-2">{imgText}</Card.Text>
          <Card.Text className="position-relative cardtextareaChild mt-0 justify-content-evenly d-flex">
            <p className="d-flex align-items-center">
              <FontAwesomeIcon className="px-2" icon={faHeart} /> {likeCount}
            </p>
            <p className="d-flex align-items-center">
              <FontAwesomeIcon className="px-2" icon={faComment} /> {commentCount}
            </p>
          </Card.Text>
        </Card.ImgOverlay>
        <Card.Body>
          <p className="text-dark card-title">{Title}</p>
          <div className="text-dark position-relative mt-5 justify-content-evenly d-flex">
            <p>
              <FontAwesomeIcon icon={faHeart} /> {likeCount}
            </p>
            <p>
              <FontAwesomeIcon icon={faComment} /> {commentCount}
            </p>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}

export default BottomCard;
