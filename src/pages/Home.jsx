import React from "react";
import bg from "../assets/bg3.mp4";
import About from "./About";
import Education from "./Education";
import Skills from "./Skills";
import Projects from "./Projects";
import Experience from "./Experience";

export default function Home() {
  return (
    <>
      <video
        className={
          "fixed -z-10 inset-0 w-full object-cover flex-grow overflow-hidden transition-all duration-300 h-full"
        }
        // className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
      >
        <source src={bg} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <About />
      <Education />
      <Skills />
      <Projects />
      <Experience />
    </>
  );
}
