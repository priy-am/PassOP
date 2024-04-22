import React from "react";
import { FaGithub } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="bg-slate-800 text-white">
      <div className="mycontainer flex justify-between items-center  py-5 px-5 md:px-20 h-14">
        <div className="logo font-bold text-2xl">
          <span className="text-green-800">&lt;</span>
          <span>Pass</span>
          <span className="text-green-800">OP/&gt;</span>
        </div>
        {/* <ul>
          <li className="flex gap-3 ">
            <a className="hover:font-bold" href="#">
              Home
            </a>
            <a className="hover:font-bold" href="#">
              About
            </a>
            <a className="hover:font-bold" href="#">
              Contact us
            </a>
          </li>
        </ul> */}
        <button className="flex items-center justify-between gap-2 bg-green-500 rounded-full px-3 py-2 shadow-lg hover:shadow-green-700 ring-1 ring-white">
          <FaGithub/>
          <span className="">GitHub</span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
