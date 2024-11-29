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
          <h2 className="text-4xl font-bold text-white mb-4">This is Me</h2>
          <span className="text-base lg:text-lg text-neutral-400">
            I am an enthusiastic and versatile software developer who&apos;s
            still learning IT. Passionate about building innovative and
            efficient solutions. I have worked with a variety of technologies.
            <br /> My adventures in software/web development began back in high
            school. We would have exam tests where we had to memorize two whole
            pages of hardcopy code and type it in Notepad++ and sometimes,
            we&apos;d have performance tasks where we had to integrate code
            where we successfully moved a sprite. It was so scary for me that it
            gave me Stockholm syndrome (which is probably the reason why
            I&apos;m pursuing it today 😀🤙).
            <br /> I thrive in collaborative environments and enjoy solving new
            challenges to deliver high-quality solutions. Outside of
            programming, I LOVE sleeping and playing video games like
            Reverse1999 and Life is Strange series ✨.
          </span>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutMe;
