import Slider from "react-slick";
import { ACHIEVEMENT_DATA } from "../constants";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useRef, useState } from "react";
import { GrPrevious, GrNext } from "react-icons/gr";

function Achievements() {
  const sliderRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "40px",
    beforeChange: (current, next) => setCurrentSlide(next),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          centerMode: true,
          centerPadding: "20px",
        },
      },
      {
        breakpoint: 768, 
        settings: {
          slidesToShow: 1,
          centerMode: true,
          centerPadding: "20px",
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          centerMode: false,
          centerPadding: "0px",
        },
      },
    ],
  };

  return (
    <div id="Achievements" className="pt-10 border-b border-neutral-900 lg:mx-32 mx-4">
      {" "}
      <h1 className="text-center text-3xl lg:text-4xl font-bold my-12 lg:my-10">
        Achievements
      </h1>{" "}
     
      <Slider ref={sliderRef} {...settings}>
        {ACHIEVEMENT_DATA.map((item, index) => (
          <div
            key={index}
            className={`p-2 lg:p-4 transition-transform duration-500 ease-in-out mb-2 mt-2 ${
              index === currentSlide
                ? "scale-105 lg:scale-110 opacity-100"
                : "scale-95 lg:scale-90 opacity-80"
            }`}
          >
            <div className="border border-gray-300 bg-gray-800 rounded-lg shadow-lg h-80 lg:h-96 flex flex-col justify-between transition-opacity duration-500 ease-in-out p-4">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-32 lg:h-48 object-cover rounded-t-lg"
              />
              <div className="flex-grow">
                <h2 className="text-xs lg:text-sm font-semibold text-white">
                  {item.achivement}
                </h2>
                <p className="text-xs lg:text-sm text-white">
                  Theme: {item.title}
                </p>
                <p className="text-xs lg:text-sm text-white">
                  Host City: {item.hostCity}
                </p>
                <p className="text-xs lg:text-sm text-white">
                  Team Leader: {item.teamLeader}
                </p>
                <p className="text-xs lg:text-sm text-white">
                  Operator: {item.operator}
                </p>
                <p className="text-xs lg:text-sm text-white">
                  Pit Crews: {item.pitCrews}
                </p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
      
      <div className="flex justify-center items-center mt-4">
        <button
          onClick={() => sliderRef.current.slickPrev()}
          className="mx-2 p-2 text-4xl lg:text-6xl text-blue-700 rounded-full transition duration-300"
        >
          <GrPrevious />
        </button>

        <div className="flex space-x-2">
          {ACHIEVEMENT_DATA.map((_, index) => (
            <span
              key={index}
              className={`w-2 lg:w-3 h-2 lg:h-3 rounded-full ${
                index === currentSlide ? "bg-blue-700" : "bg-gray-300"
              }`}
            />
          ))}
        </div>

        <button
          onClick={() => sliderRef.current.slickNext()}
          className="mx-2 p-2 text-4xl lg:text-6xl text-blue-700 rounded-full transition duration-300"
        >
          <GrNext />
        </button>
      </div>
    </div>
  );
}

export default Achievements;
