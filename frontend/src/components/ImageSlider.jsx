import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/ImageSlider.css"; // Add your custom styles for the slider if needed
import img1 from "../assets/1.jpg"; // Import the images
import img2 from "../assets/2.jpg";
import img3 from "../assets/3.jpg";

const ImageSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <Slider {...settings}>
      <div>
        <img src={img1} alt="Slider Image 1" />
      </div>
      <div>
        <img src={img2} alt="Slider Image 2" />
      </div>
      <div>
        <img src={img3} alt="Slider Image 3" />
      </div>
      {/* Add more slides as needed */}
    </Slider>
  );
};

export default ImageSlider;
