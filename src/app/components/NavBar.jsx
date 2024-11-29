"use client";
import Link from "next/link";
import React from "react";
import { FaGithubSquare, FaLinkedin, FaInstagram } from "react-icons/fa";

const NavBar = () => {
  return (
    <nav className="top-0 left-0 right-0 z-10 bg-[#0f0a17] fixed w-full">
      <div className="flex flex-wrap items-center justify-between mx-auto px-4 py-4">
        <Link href={"/"} className="md:text-4xl text-4xl text-white">
          TYA
        </Link>
        <div className="menu md:block md:w-auto" id="navbar">
          <div className="flex p-4 md:p-0 md:flex-row md:space-x-4 mt-0">
            <Link href="https://github.com/TYAquino" target="_blank">
              <FaGithubSquare className="text-4xl" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/trishaaquino/"
              target="_blank"
            >
              <FaLinkedin className="text-4xl" />
            </Link>
            <Link
              href="https://www.instagram.com/leakissha/?hl=en"
              target="_blank"
            >
              <FaInstagram className="text-4xl" />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
