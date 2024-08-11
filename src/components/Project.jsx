import React from "react";
import SliderComp from "./SliderComp";
import PillBadges from "./PillBadges";
import { Link } from "react-router-dom";

export default function Project({ project }) {
  const tech = project.techStack;
  return (
    <div className="border rounded-lg p-2 md:p-4 backdrop-blur-md border-slate-400 shadow-red-200 shadow-md max-w-lg mx-auto md:max-w-3xl md:mx-auto">
      <Link to={project.live} target="_blank">
        <SliderComp images={project.images} />
      </Link>
      <div className=" mt-3 md:mt-4">
        <h1 className="text-center font-bold underline underline-offset-2 text-yellow-400 text-lg md:text-2xl lg:text-3xl">
          {project.title}
        </h1>

        {/* <div className="flex flex-col items-center text-lg gap-4 mt-12">
          <h1 className="text-center text-slate-100 mb-3">Tech Stack : </h1>
          
        </div> */}
        <PillBadges techs={tech} />

        <div className="flex justify-evenly items-center text-center mt-6 mb-4">
          <a
            href={project.github}
            target="_blank"
            className="bg-red-500 p-2 px-6 rounded-lg text-slate-200 font-semibold hover:text-sm"
          >
            Github Repo
          </a>
          <a
            href={project.live}
            target="_blank"
            className="bg-red-500 p-2 px-9 rounded-lg text-slate-200 font-semibold hover:text-sm"
          >
            Live Link
          </a>
        </div>
      </div>
    </div>
  );
}
