import React, { useState } from "react";
import { IoLogoYoutube } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";
import img from "../assets/download.png";

import { FaSquareInstagram } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { SiGmail } from "react-icons/si";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className="fixed top-0 left-0 w-full  bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))] shadow-md z-50 bg-black">
        <div className="container mx-auto flex justify-evenly items-center py-4 px-6">
          <div className="sm:hidden">
            <button onClick={toggleMenu} className="text-white">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>

          <div className="flex items-center sm:order-none order-last">
            <Link to="/">
              <img className="h-16 w-16" src={img} alt="logo" />
            </Link>
          </div>

          <div className="hidden sm:flex space-x-4 text-white lg:text-xl gap-5">
            <Link className="hover:text-blue-400" to="/">
              Home
            </Link>
            <Link className="hover:text-blue-400" to="About">
              About
            </Link>
            <Link className="hover:text-blue-400" to="Achievements">
              Achievements
            </Link>
            <Link className="hover:text-blue-400" to="Projects">
              Projects
            </Link>
            <Link className="hover:text-blue-400" to="Team">
              Team
            </Link>
            {/* <Link className="hover:text-blue-400" to="Alumni">
              Alumni
            </Link> */}
            <Link className="hover:text-blue-400" to="Sponsors">
              Sponsors
            </Link>
            <Link className="hover:text-blue-400" to="History">
              History
            </Link>
            <Link className="hover:text-blue-400" to="Memories">
              Memories
            </Link>
            <Link className="hover:text-blue-400" to="Contact">
              Contact
            </Link>
          </div>
        </div>
      </nav>

      <div
        className={`fixed top-0 left-0 h-full w-full bg-black  text-white p-5 transition-transform transform text-center mt-10 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } sm:hidden z-40`}
      >
        <div className="flex justify-between mb-4">
          <button onClick={toggleMenu} className="text-white text-2xl">
            &times;
          </button>
        </div>
        <div className="flex flex-col gap-4">
          <Link
            onClick={toggleMenu}
            to="/"
            className="hover:bg-gray-700 p-2 rounded-md"
          >
            Home
          </Link>
          <Link
            onClick={toggleMenu}
            to="About"
            className="hover:bg-gray-700 p-2 rounded-md"
          >
            About
          </Link>
          <Link
            onClick={toggleMenu}
            to="Achievements"
            className="hover:bg-gray-700 p-2 rounded-md"
          >
            Achievements
          </Link>
          <Link
            onClick={toggleMenu}
            to="Projects"
            className="hover:bg-gray-700 p-2 rounded-md"
          >
            Projects
          </Link>
          <Link
            onClick={toggleMenu}
            to="Team"
            className="hover:bg-gray-700 p-2 rounded-md"
          >
            Team
          </Link>
          {/* <Link
            onClick={toggleMenu}
            to="Alumni"
            className="hover:bg-gray-700 p-2 rounded-md"
          >
            Alumni
          </Link> */}
          <Link
            onClick={toggleMenu}
            to="Sponsors"
            className="hover:bg-gray-700 p-2 rounded-md"
          >
            Sponsors
          </Link>
          <Link
            onClick={toggleMenu}
            to="History"
            className="hover:bg-gray-700 p-2 rounded-md"
          >
            History
          </Link>
          <Link
            onClick={toggleMenu}
            to="Memories"
            className="hover:bg-gray-700 p-2 rounded-md"
          >
            Memories
          </Link>
          <Link
            onClick={toggleMenu}
            to="Contact"
            className="hover:bg-gray-700 p-2 rounded-md"
          >
            Contact
          </Link>

          <div className="flex justify-center gap-4 mt-4 text-2xl">
            <Link to="https://www.youtube.com/@TeamAbhedya/">
              <IoLogoYoutube />
            </Link>
            <Link to=" https://in.linkedin.com/company/robotics-research-lab">
              <FaLinkedin />
            </Link>
            <Link to="https://www.instagram.com/team_abhedya_gcoeara/">
              <FaSquareInstagram />
            </Link>
            <Link
            to="mailto:rrlgcoeara2@gmail.com "
            target='_blank'
            className="text-2xl transition-transform transform hover:scale-110"
            title="Instagram"
          >
            <SiGmail />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
