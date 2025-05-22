"use client";
import Link from "next/link";
import React from "react";
import { FaGithubSquare, FaLinkedin, FaInstagram } from "react-icons/fa";

const NavBar = () => {
  return (
    <nav className="top-0 left-0 right-0 z-10 bg-[#0f0a17] fixed">
      <div className="flex flex-wrap items-center justify-between mx-auto px-4 py-4">
        <Link href={"/"} className="md:text-4xl text-4xl text-white">
          TYA
        </Link>
        <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4">
          <div className="flex items-center space-x-4">
            <Link href="https://github.com/TYAquino" target="_blank">
              <FaGithubSquare className="text-2xl md:text-4xl text-white" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/trishaaquino/"
              target="_blank"
            >
              <FaLinkedin className="text-2xl md:text-4xl text-white" />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
