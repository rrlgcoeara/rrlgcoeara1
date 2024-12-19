import { useEffect, useRef, useState } from "react";
import { TEAM } from "../constants";
import { FaLinkedin } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";
import { GrPrevious, GrNext } from "react-icons/gr";

function Team() {
  const scrollRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(getVisibleCardsCount());
  const totalCards = TEAM.length;

  function getVisibleCardsCount() {
    if (window.innerWidth <= 640) return 1;
    if (window.innerWidth <= 1024) return 2;
    return 3;
  }

  useEffect(() => {
    const handleResize = () => {
      setVisibleCards(getVisibleCardsCount());
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      handleNext();
    }, 3000); // Adjust the interval time (3000ms = 3 seconds)

    return () => clearInterval(intervalId); // Clear interval on component unmount
  }, [currentIndex]);

  const handleDotClick = (index) => {
    const scrollContainer = scrollRef.current;
    const cardWidth = scrollContainer.scrollWidth / (totalCards + 2);
    scrollContainer.scrollTo({
      left: cardWidth * (index + 1),
      behavior: "smooth",
    });
    setCurrentIndex(index);
  };

  const handleNext = () => {
    const scrollContainer = scrollRef.current;
    const cardWidth = scrollContainer.scrollWidth / (totalCards + 2);
    scrollContainer.scrollBy({ left: cardWidth, behavior: "smooth" });
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalCards);
  };

  const handlePrev = () => {
    const scrollContainer = scrollRef.current;
    const cardWidth = scrollContainer.scrollWidth / (totalCards + 2);
    scrollContainer.scrollBy({ left: -cardWidth, behavior: "smooth" });
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalCards) % totalCards);
  };

  const clonedItems = [TEAM[totalCards - 1], ...TEAM, TEAM[0]];

  return (
    <div id="Team" className="border-b border-neutral-900 pb-4 lg:mx-40">
      <h1 className="my-20 text-center text-4xl font-bold">Meet The Team</h1>

      <div
        ref={scrollRef}
        className="scrolling-container flex overflow-hidden space-x-10 pb-4"
      >
        {clonedItems.map((item, index) => (
          <div
            key={index}
            className="team-card flex flex-col justify-center items-center min-w-[100%] sm:min-w-[50%] lg:min-w-[30.33%] p-4 bg-gradient-to-r bg-neutral-900 bg-opacity-55 shadow-lg rounded-lg transition-transform transform hover:shadow-2xl"
          >
            <img
              src={item.img}
              alt={item.name}
              className="w-36 h-36 sm:w-52 sm:h-52 rounded-full mb-4 border-4 border-white"
            />
            <span className="text-lg sm:text-xl font-semibold text-white">
              {item.name}
            </span>
            <span className="text-white">{item.designation}</span>
            <div className="flex gap-3">
              <a
                href={item.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 text-blue-300 hover:text-blue-500 transition-colors"
              >
                <FaLinkedin className="text-2xl" />
              </a>
              <a
                href={item.mail}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 text-red-400 hover:text-red-600 transition-colors"
              >
                <SiGmail className="text-2xl" />
              </a>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center items-center mt-4">
        <button
          onClick={handlePrev}
          className="p-2 text-4xl lg:text-6xl text-blue-700 rounded-full transition duration-300"
        >
          <GrPrevious />
        </button>
        <div className="flex flex-col items-center mt-4">
          <div className="flex justify-center space-x-2 mb-2">
            {TEAM.map((_, index) => (
              <div
                key={index}
                onClick={() => handleDotClick(index)}
                className={`cursor-pointer w-4 h-4 rounded-full transition-colors ${
                  currentIndex === index ? "bg-blue-500" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>
        <button
          onClick={handleNext}
          className="p-2 text-4xl lg:text-6xl text-blue-700 rounded-full transition duration-300"
        >
          <GrNext />
        </button>
      </div>

      <style jsx>{`
        .scrolling-container {
          display: flex;
          white-space: nowrap;
          overflow: hidden;
          width: 100%;
        }
        .team-card {
          flex: 0 0 auto;
        }

        @media (max-width: 640px) {
          .team-card {
            min-width: 100%;
          }
        }

        @media (min-width: 641px) and (max-width: 1024px) {
          .team-card {
            min-width: 50%;
          }
        }

        @media (min-width: 1025px) {
          .team-card {
            min-width: 30.33%;
          }
        }
      `}</style>
    </div>
  );
}

export default Team;
