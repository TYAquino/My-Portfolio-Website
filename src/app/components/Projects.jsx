"use client";
import { PROJECTS } from "../constants";
import ImgModal from "./ImgModal";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const Projects = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleImageClick = (image, title) => {
    setSelectedImage({ image, title });
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  if (!isClient) return null;

  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl"
      >
        Projects
      </motion.h2>
      <div>
        {PROJECTS.map((project, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className="w-full lg:w-1/4"
            >
              <Image
                src={project.image}
                width={200}
                height={200}
                alt={project.title}
                className="mb-6 rounded transform transition-transform duration-300 ease-in-out hover:scale-110"
                onClick={() => handleImageClick(project.image)}
              />
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              className="w-full max-w-md sm:max-w-lg md:max-w-lg lg:max-w-xl xl:max-w-2xl"
            >
              <h6 className="mb-2 font-semibold">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-purple-400 transition-colors"
                >
                  {project.title}
                </a>
              </h6>
              <p className="mb-4 text-neutral-400">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="mr-2 md:mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        ))}
        {selectedImage && (
          <ImgModal
            image={selectedImage.image}
            title={selectedImage.title}
            onClose={closeModal}
          />
        )}
      </div>
    </div>
  );
};

export default Projects;
