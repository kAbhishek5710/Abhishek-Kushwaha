import React from "react";
import SwiperComp from "../components/SwiperComp";

import dD1 from "../assets/proj/DreamDwellings/8.png";
import dD3 from "../assets/proj/DreamDwellings/3.png";
import dD4 from "../assets/proj/DreamDwellings/4.png";
import dD5 from "../assets/proj/DreamDwellings/5.png";
import dD6 from "../assets/proj/DreamDwellings/6.png";
import dD7 from "../assets/proj/DreamDwellings/7.png";

import bW1 from "../assets/proj/BasicWebsite/1.png";
import bW2 from "../assets/proj/BasicWebsite/2.png";
import bW3 from "../assets/proj/BasicWebsite/3.png";
import bW4 from "../assets/proj/BasicWebsite/4.png";
import bW5 from "../assets/proj/BasicWebsite/5.png";
import bW6 from "../assets/proj/BasicWebsite/6.png";

import wl1 from "../assets/proj/Wanderlust/1.png";
import wl2 from "../assets/proj/Wanderlust/2.png";
import wl3 from "../assets/proj/Wanderlust/3.png";
import wl4 from "../assets/proj/Wanderlust/4.png";

const projects = [
  {
    title: "Dream Dwellings - A Real Estate Web Application",
    images: [dD1, dD3, dD4, dD5, dD6, dD7],
    techStack: [
      "ReactJS",
      "NodeJS",
      "ExpressJS",
      "MongoDB",
      "TailwindCSS",
      "Redux",
      "Firebase",
      "MVC",
    ],
    github: "https://github.com/kAbhishek5710/DreamDwellings",
    live: "https://dream-dwellings.onrender.com/",
  },
  {
    title: "Wanderlust - A Holiday Destination Application",
    images: [wl1, wl2, wl3, wl4],
    techStack: [
      "HTML",
      "CSS",
      "JavaScript",
      "NodeJS",
      "ExpressJS",
      "EJS",
      "MVC",
      "Bootstrap",
      "Passport",
    ],
    github: "https://github.com/kAbhishek5710/wanderlust",
    live: "https://wanderlust-50a3.onrender.com/listings",
  },
  {
    title: "Fyle - A Functionalities offering Website",
    images: [bW1, bW2, bW3, bW4, bW5, bW6],
    techStack: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/kAbhishek5710/basic-website",
    live: "https://kabhishek5710.github.io/basic-website/",
  },
];

export default function Projects() {
  return (
    <div className="mb-24">
      <div className="flex justify-center">
        <h1 className="text-4xl font-medium text-center shadow-xl shadow-green-300 rounded-lg p-3 text-gray-200 my-20">
          PROJECTS
        </h1>
      </div>

      <div>
        <SwiperComp projects={projects} />

        {/* {projects.map((project) => (
          <Project project={project} />
        ))} */}
      </div>
    </div>
  );
}
