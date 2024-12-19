import { useEffect, useState } from "react";
import { VM } from "../constants";
import { FaPlus } from "react-icons/fa";

function About() {
  const [teamMembers, setTeamMembers] = useState(0);
  const [robots, setRobots] = useState(0);
  const [participants, setParticipants] = useState(0);
  const [alumni, setAlumni] = useState(0);

  useEffect(() => {
    const targetCounts = {
      teamMembers: 40,
      robots: 25,
      participants: 20,
      alumni: 50,
    };

    const incrementCount = (setter, target) => {
      let count = 0;
      const interval = setInterval(() => {
        if (count < target) {
          count++;
          setter(count);
        } else {
          clearInterval(interval);
        }
      }, 20);
    };

    incrementCount(setTeamMembers, targetCounts.teamMembers);
    incrementCount(setRobots, targetCounts.robots);
    incrementCount(setParticipants, targetCounts.participants);
    incrementCount(setAlumni, targetCounts.alumni);

    return () => {
      clearInterval();
    };
  }, []);

  return (
    <div id="About" className="border-b border-neutral-900  lg:pb-5">
      <h1 className="my-20 text-center text-4xl font-bold ">About</h1>
      <div className="flex flex-wrap justify-center gap-10 mx-4">
        {[
          { label: "Team Members", count: teamMembers },
          { label: "Robots", count: robots },
          { label: "Participants", count: participants },
          { label: "Alumni", count: alumni },
        ].map(({ label, count }, index) => (
          <div
            key={index}
            className="flex  flex-col items-center p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105"
          >
            <div className="flex items-center space-x-2">
              <p className="text-center text-4xl lg:text-5xl font-semibold">
                {count}
              </p>
              <FaPlus className="lg:text-2xl text-red-600" />
            </div>
            <span className="text-center">{label}</span>
          </div>
        ))}
      </div>

      <div className="mt-24">
        <div className="flex justify-center flex-shrink flex-wrap gap-10">
          {VM.map((item, index) => (
            <div
              className="text-justify rounded-lg shadow-lg p-6 lg:w-96 "
              key={index}
            >
              <p className="text-center text-lg font-semibold pb-2">
                {item.h1}
              </p>
              <span className="">{item.info}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default About;
