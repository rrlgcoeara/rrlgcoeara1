import { Memory } from "../constants";
import { useState } from "react";

function Memories() {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (item) => {
    setSelectedImage(item);
  };

  const handleCloseLightbox = () => {
    setSelectedImage(null);
  };

  return (
    <>
      <div id="Memories" className="border-b border-neutral-900 pb-4 lg:mx-40">
        <h1 className="my-20 text-center text-4xl font-bold">Memories</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {Memory.map((item, index) => (
            <div
              key={index}
              className="relative group cursor-pointer overflow-hidden"
              onClick={() => handleImageClick(item)}
            >
              {/* Image */}
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-64 object-cover rounded-lg transform transition duration-500 group-hover:scale-110"
              />
              {/* Title text overlay */}
              <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50">
                <p className="text-white text-xl text-center font-semibold px-4 py-2">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {selectedImage && (
          <div
            className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50"
            onClick={handleCloseLightbox}
          >
            <div className="relative max-w-3xl mx-auto">
              <img
                src={selectedImage.img}
                alt={selectedImage.title}
                className="w-full h-auto rounded-lg shadow-lg"
              />
              <button
                onClick={handleCloseLightbox}
                className="absolute top-4 right-4 text-white text-3xl font-bold"
              >
                &times;
              </button>
              <p className="text-white text-center mt-4 text-lg">
                {selectedImage.description}
              </p>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Memories;
