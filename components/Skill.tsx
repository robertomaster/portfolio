import React from "react";
import { motion } from "framer-motion";
import { Skill } from "../typings";
import { urlFor } from "../sanity";

type Props = {
  skill: Skill;
};

function Skill({ skill }: Props) {
  return (
    <div className="relative flex cursor-pointer group">
      <motion.img
        src={urlFor(skill?.image).url()}
        alt="logo"
        className="object-cover transition duration-300 ease-in-out border border-gray-500 rounded-full md:w-16 md:h-16 w-14 h-14 filter group-hover:grayscale"
      />
      <motion.div className="absolute z-0 transition duration-300 ease-in-out rounded-full opacity-0 w-14 h-14 md:w-16 md:h-16 group-hover:opacity-80 group-hover:bg-white">
        <div className="flex items-center justify-center h-full">
          <p className="font-bold text-black opacity-100">{skill.progress}%</p>
        </div>
      </motion.div>
    </div>
  );
}

export default Skill;

/*
initial={{ x: directionLeft ? -200 : 200, opacity: 0 }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, x: 0 }}

        
initial={{ x: directionLeft ? -200 : 200 }}
        transition={{ duration: 1 }}
        whileInView={{ x: 0 }} */
