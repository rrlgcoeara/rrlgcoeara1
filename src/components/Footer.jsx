import { IoLogoYoutube } from "react-icons/io5";
import { FaLinkedin, FaSquareInstagram } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-gray-900 bg-opacity-0 text-white p-6 mt-14">
      <div className="container mx-auto flex flex-col lg:flex-col justify-between items-center">
        <div className="flex space-x-4 mb-4">
          <Link
            to=" https://www.youtube.com/@TeamAbhedya/"
            target="_blank"
            className="text-2xl transition-transform transform hover:scale-110"
            title="YouTube"
          >
            <IoLogoYoutube />
          </Link>
          <Link
            to="https://in.linkedin.com/company/robotics-research-lab"
            target="_blank"
            className="text-2xl transition-transform transform hover:scale-110"
            title="LinkedIn"
          >
            <FaLinkedin />
          </Link>
          <Link
            to="https://www.instagram.com/team_abhedya_gcoeara/"
            target="_blank"
            className="text-2xl transition-transform transform hover:scale-110"
            title="Instagram"
          >
            <FaSquareInstagram />
          </Link>
          <Link
            to="mailto:rrlgcoeara2@gmail.com "
            target="_blank"
            className="text-2xl transition-transform transform hover:scale-110"
            title="Instagram"
          >
            <SiGmail />
          </Link>
        </div>

        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-6 mb-4 text-center">
          <Link to="/" className="hover:text-gray-400 transition-colors">
            Home
          </Link>
          <Link to="About" className="hover:text-gray-400 transition-colors">
            About Us
          </Link>
          <Link
            to="Achievements"
            className="hover:text-gray-400 transition-colors"
          >
            Achievements
          </Link>
          <Link to="Contact" className="hover:text-gray-400 transition-colors">
            Contact Us
          </Link>
          <Link to="Team" className="hover:text-gray-400 transition-colors">
            Our Team
          </Link>
        </div>

        <div className="text-center">
          <p className="text-sm text-gray-400">
            @Robotics Research Lab. All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
