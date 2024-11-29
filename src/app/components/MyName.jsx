"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

const handleScroll = () => {
  if (typeof window !== "undefined") {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: "smooth",
    });
  }
};

const MyName = () => {
  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-12 border-b border-neutral-900 xl:px-11 pb-[15vh] pt-10">
        <div className="col-span-7 place-self-center text-center sm:text-left">
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
              Hey there, I&apos;m{" "}
            </span>
            <br />
            <TypeAnimation
              sequence={[
                "Trisha Aquino",
                1000,
                "a Software Developer",
                1000,
                "an IT person wannabe",
                1000,
                "an Artist",
                1000,
              ]}
              wrapper="span"
              speed={15}
              repeat={Infinity}
              preRenderFirstString
            />{" "}
          </h1>
          <span className="text-[#ADB7BE] text-lg lg:text-xl mb-6">
            Welcome! I&apos;m Trisha Yvonne Aquino, a software and IT wannabe
            based in Calgary, AB, with experience in multimedia arts.
          </span>
          <div>
            <button
              onClick={handleScroll}
              className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-white text-white hover:scale-110 transition duration-300 ease-in-out cursor-pointer bg-gradient-to-br from-blue-600 via-purple-600 to-pink-500"
            >
              Contact Me
            </button>
            <a
              href="/assets/cv/TYAquinoResume.pdf"
              download="TYAquinoResume.pdf"
              className="inline-block px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-600 via-purple-600 to-pink-500 hover:scale-110 transition duration-300 ease-in-out cursor-pointer text-white mt-3"
            >
              <span className="block bg-[#0f0a17] rounded-full px-5 py-2">
                Download my CV
              </span>
            </a>
          </div>
        </div>
        <div className="col-span-5 place-self-center mt-12 sm:mt-4 lg:mt-0">
          <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[300px] lg:h-[300px] relative">
            <Image
              src="/images/mee.png"
              alt="my image"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={400}
              height={400}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyName;
