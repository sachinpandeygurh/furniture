import { CCarousel, CCarouselItem, CImage } from "@coreui/react";
import React from "react";

const Slider = ({ srcImg }) => {

  return (
    <CCarousel>
      <CCarouselItem>
        <CImage className="d-block w-100" src={srcImg} alt="slide 1" />
      </CCarouselItem>
    </CCarousel>
  );
};

export default Slider;
