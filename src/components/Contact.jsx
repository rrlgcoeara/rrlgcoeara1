import { CONTACT } from "../constants";
import { RiContactsFill } from "react-icons/ri";
import { SiGmail } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";

function Contact() {
  return (
    <>
      <div id="Contact" className="border-b border-neutral-900 pb-4 lg:mx-40">
        <h1 className="text-center text-4xl font-bold my-20">Get In Touch</h1>
        <div className="flex flex-wrap justify-center gap-10 items-center mx-6">
          {CONTACT.map((item, index) => (
            <div key={index} className="flex flex-row gap-2 items-center bg-neutral-800 bg-opacity-50 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow" style={{ width: "330px", height: "210px" }} >
              <div className="h-32 w-32 rounded-full bg-neutral-900 mb-4">
                <img src={item.image} alt={item.name} className="rounded-full h-full w-full object-cover" />
              </div>
              <div className="text-center">
                <p className="text-lg font-bold text-white">{item.name}</p>
                <p className="text-gray-300">{item.branch}</p>
                <div className="flex gap-4 mt-4 justify-center">
                  <a
                    href={`tel:${item.contactNo}`}
                    className="text-green-400 hover:text-green-600 transition-colors"
                  >
                    <RiContactsFill className="text-2xl" />
                  </a>
                  <a
                    href={`mailto:${item.mail}`}
                    className="text-red-400 hover:text-red-600 transition-colors"
                  >
                    <SiGmail className="text-2xl" />
                  </a>
                  <a
                    href={item.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-600 transition-colors"
                  >
                    <FaLinkedin className="text-2xl" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Contact;
