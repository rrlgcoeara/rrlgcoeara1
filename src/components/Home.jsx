import React from "react";
import { motion } from "framer-motion";
import img from "../assets/r1.png";

const CONTENT = "From gears and wires to dreams that aspire... .";

const typingContainer = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05, 
    },
  },
};

const typingEffect = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

function Home() {
  return (
    <>
      <div id="Home" className="border-b border-neutral-900 pb-6 lg:pt-28 pt-24">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-center lg:justify-between px-4 lg:px-20">
          <div className="w-full lg:w-1/2 text-center lg:text-center mt-8 lg:mt-0 lg:ml-28">
            <h1 className="text-xl lg:text-4xl font-bold tracking-tight leading-tight">
              Discover The Future At
              <p className="text-2xl lg:text-5xl lg:text-center pt-3 font-extrabold">
                ROBOTICS RESEARCH LAB
              </p>
            </h1>
            <span className="bg-gradient-to-r text-center from-pink-300 via-slate-500 to-purple-300 bg-clip-text text-xl lg:text-4xl text-transparent font-bold block mt-4 lg:mt-6">
              TEAM ABHEDYA
            </span>
            <motion.p
              className="hidden lg:flex mt-5 ml-10 lg:text-xl text-center"
              variants={typingContainer}
              initial="hidden"
              animate="visible"
              style={{ fontFamily: "monospace", whiteSpace: "pre" }}
            >
              {CONTENT.split("").map((char, index) => (
                <motion.span key={index} variants={typingEffect}>
                  {char}
                </motion.span>
              ))}
            </motion.p>
          </div>

          <div className="w-full lg:w-1/2 lg:p-8 flex justify-center">
            <img
              className="rounded-3xl h-60 sm:h-72 md:h-80 lg:h-96 object-cover"
              src={img}
              alt="r1"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
