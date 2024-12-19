import { PROJECTS } from "../constants";

function Projects() {
  return (
    <>
      <div id="Projects" className="border-b border-neutral-900 pb-12 lg:mx-40 ">
        <h1 className="my-20 text-center text-4xl font-bold text-white">
          Projects
        </h1>

        {/* Professional Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 px-4">
          {PROJECTS.map((item, index) => (
            <div
              key={index}
              className="group rounded-lg shadow-lg bg-neutral-900 overflow-hidden bg-opacity-55 transition-transform transform hover:scale-105 hover:shadow-xl"
            >
              <div className="relative">
                {/* Handle single or array of images */}
                {Array.isArray(item.img) ? (
                  <div className="grid grid-cols-2 gap-2">
                    {item.img.map((img, idx) => (
                      <img
                        key={idx}
                        src={img}
                        alt={`${item.title}-${idx}`}
                        className="w-full h-56 rounded-t-lg"
                      />
                    ))}
                  </div>
                ) : (
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-56 rounded-t-lg"
                  />
                )}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-white">
                  {item.title}
                </h3>
                <p className="text-white">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Projects;
