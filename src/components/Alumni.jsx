import Slider from "react-slick";
import { ALUMNI } from "../constants";
import { SiGmail } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";

function Alumni() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div id="Alumni" className="border-b border-neutral-900 pb-4 lg:mx-40">
      <h1 className="my-20 text-center text-4xl font-bold">About Our Alumni</h1>
      <Slider {...settings}>
        {ALUMNI.map((item, index) => (
          <div
            key={index}
            className="relative bg-neutral-800 mt-12 bg-opacity-55 shadow-md rounded-lg text-center w-50 h-80 pt-12"
          >
            <div className="absolute -top-12 left-1/2 transform -translate-x-1/2">
              <img
                className="w-32 h-32 rounded-full"
                src={item.image}
                alt={item.name}
              />
            </div>

            <div className="text-lg italic mb-4 mt-12">"{item.msg}"</div>
            <div className="font-bold text-xl">{item.name}</div>
            <div className="text-white">{item.branch}</div>
            <div className="text-white">Passout At {item.passOutYear}</div>
            <div className="mt-4 flex justify-center space-x-4">
              <a
                href={item.mail}
                className="text-red-400 hover:text-red-600 transition-colors"
              >
                <SiGmail size={24} />
              </a>
              <a
                href={item.linkedin}
                className="text-blue-400 hover:text-blue-600 transition-colors"
              >
                <FaLinkedin size={24} />
              </a>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Alumni;
