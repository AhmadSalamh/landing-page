import Image from "next/image";
import Slider from "react-slick";
import "./mySlider.modules.scss";

const MySlider = ({ images }) => {
  var settings = {
    dots: true,
    infinite: true,
    centerMode: true,
    autoplay: true,
    speed: 100,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          centerMode: false,
        },
      },
    ],
  };
  return (
    <Slider {...settings}>
      {images.map((image) => (
        <div>
          <Image
            src={image.src}
            alt={image.src}
            width="500"
            height="500"
          />
        </div>
      ))}
    </Slider>
  );
};

export default MySlider;
