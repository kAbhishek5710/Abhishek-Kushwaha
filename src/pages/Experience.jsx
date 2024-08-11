import React from "react";
import { Timeline, EventTimeline } from "react-tailwind-timeline-component";
import { FaTasks } from "react-icons/fa";
import { Link, Element } from "react-scroll";

export default function Experience() {
  return (
    <>
      <Element name="experience" className="element">
        <div className="relative h-auto mt-20">
          <div className="flex flex-col items-center h-full w-full ">
            <div className="flex items-center justify-center mt-10 ml-6 h-14 w-66 pl-6 pr-6 pt-2 pb-2 border-transparent rounded-lg shadow-md shadow-cyan-300">
              <h1 className="text-3xl text-teal-500 text-center font-semibold ">
                Experience Details
              </h1>
            </div>

            <div className="w-full h-auto flex items-center justify-center mt-10">
              <div className="mt-12 w-4/6 relative before:absolute before:top-0 before:left-16 before:rounded-full before:bottom-10 sm:before:bottom-2 before:w-1 before:bg-white">
                <div className="pl-24 relative before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:absolute before:rounded-full before:left-[58px] ">
                  <h3 className="absolute text-wrap left-0 mr-4 text-lg text-teal-500 font-semibold">
                    2023
                  </h3>

                  <h3 className="text-teal-400 text-md font-semibold">
                    Frontend Developer Intern (Oasis Infobyte)
                  </h3>
                  <p className="text-gray-300 text-sm">
                    During my tenure at Oasis Infobyte as a Frontend Developer, I
                    actively contributed to diverse projects, notably
                    spearheading the development of a Netflix homepage clone and
                    a user-friendly temperature converter website
                  </p>
                </div>
                <div className="pl-24 mt-24 relative before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:absolute before:rounded-full before:left-[58px]">
                  <h3 className="absolute left-0 text-lg text-teal-500 font-semibold">
                    2024
                  </h3>
                  <h3 className="text-teal-400 text-md font-semibold">
                    Frontend Developer Intern(@GSSOC'24)
                  </h3>
                  <p className="text-gray-300">
                    Participating in GirlScript Summer Of Code has been an
                    incredibly enriching experience. Over the three-month
                    program, I had the opportunity to contribute to numerous
                    open-source projects, working alongside skilled mentors who
                    provided invaluable guidance and support. This experience
                    not only enhanced my technical skills but also allowed me to
                    collaborate with a diverse group of passionate developers.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Element>
    </>
  );
}
