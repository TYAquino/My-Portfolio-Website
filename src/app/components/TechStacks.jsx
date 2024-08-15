import { RiReactjsLine } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import { AiOutlinePython } from "react-icons/ai";
import { FaHtml5 } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
import { IoLogoJavascript } from "react-icons/io5";
import { SiMysql } from "react-icons/si";
import { FaFigma } from "react-icons/fa";
import { IoLogoFirebase } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
import { SiCsharp } from "react-icons/si";

const TechStacks = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <h2 className="my-20 text-center text-4xl font-bold">Technologies</h2>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <RiReactjsLine className="text-7xl text-cyan-400" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <TbBrandNextjs className="text-7xl" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <AiOutlinePython className="text-7xl text-yellow-500" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiCsharp className="text-7xl text-purple-600" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <FaHtml5 className="text-7xl text-orange-500" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <IoLogoCss3 className="text-7xl text-blue-700" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <IoLogoJavascript className="text-7xl text-yellow-500" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiMysql className="text-7xl text-sky-500" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <FaFigma className="text-7xl text-violet-800" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <IoLogoFirebase className="text-7xl text-orange-700" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <FaGithub className="text-7xl text-gray-800" />
        </div>
      </div>
    </div>
  );
};

export default TechStacks;
