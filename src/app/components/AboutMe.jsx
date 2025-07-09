"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const AboutMe = () => {
  return (
    <section className="text-white border-b border-neutral-900 pb-5">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ x: -100, opacity: 0 }}
          transition={{ duration: 1, delay: 1 }}
          animate="animate"
          variants={iconVariants(3)}
        >
          <Image
            src="/images/meeeee.png"
            alt="my face"
            width={600}
            height={500}
          />
        </motion.div>
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ x: 100, opacity: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-4xl font-bold text-white mb-4">This is Me ❤️</h2>
          <span className="text-base lg:text-lg text-neutral-400">
            I&apos;m an enthusiastic and versatile developer currently learning
            IT and Analytics, passionate about building efficient and creative
            solutions.
            <br /> My adventures in technology began in high school. We would
            have exams where we had to memorize two whole pages of hardcopy code
            and type it on Notepad++ and build our own PCs. It was terrifying
            yet fun, that&apos;s probably why I stuck with it.
            <br /> I thrive in collaborative environments and enjoy solving new
            challenges to deliver high-quality solutions. Outside work, I LOVE
            sleeping and playing video games like Reverse1999 and Life is
            Strange series ✨
          </span>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutMe;
