import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="flex justify-around items-center h-30 p-2 pb-3 px-8 mb-1 md:px-20 shadow-md">
      <Link to={"/"}>
        <div className="flex items-center gap-2 uppercase">
          <h1 className="text-slate-200 font-semibold text-2xl">
            <span className="text-red-600 text-4xl">A</span>bhishek
          </h1>
          <h1 className="text-slate-200 font-semibold text-2xl">
            <span className="text-red-600 text-4xl">K</span>ushwaha
          </h1>
        </div>
      </Link>
      <div>
        <ul className="items-center hidden md:flex gap-4 text-slate-300 text-lg font-semibold">
          <Link to={"#"}>
            <li className="hover:opacity-75">About</li>
          </Link>
          <Link to={"#"}>
            <li className="hover:opacity-75">Education</li>
          </Link>
          <Link to={"#"}>
            <li className="hover:opacity-75">Skills</li>
          </Link>
          <Link to={"#"}>
            <li className="hover:opacity-75">Projects</li>
          </Link>
          <Link to={"#"}>
            <li className="hover:opacity-75">Contact</li>
          </Link>
        </ul>
      </div>
    </div>
  );
}
