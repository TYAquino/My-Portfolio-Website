"use client";
import { CONTACT } from "../constants/index";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div className="pb-20">
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1 }}
        className="my-10 text-center text-4xl"
      >
        Get in Touch
      </motion.h2>
      <div className="text-center tracking-tighter text-lg text-neutral-400">
        <motion.a
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
          href={`mailto:${"trishasalubreaquino@gmail.com"}`}
          className="hover:text-purple-400 transition duration-300 ease-in-out border-b-2"
        >
          {CONTACT.email}
        </motion.a>
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1 }}
          className="my-2"
        >
          {CONTACT.phoneNo}
        </motion.p>
        <p className="my-2">{CONTACT.address}</p>
      </div>
    </div>
  );
};

export default Contact;
