import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Skill from "./Skill";
import { Skill as SkillType } from "../typings";
import useWindowDimensions from "./hooks/useWindowDimensions";

type Props = { skills: SkillType[] };

function Skills({ skills }: Props) {
  const { width } = useWindowDimensions();
  const [word, setWord] = useState("Hover");
  useEffect(() => {
    if (width < 1024) {
      setWord("Tap");
    } else {
      setWord("Hover");
    }
  });
  return (
    <motion.div
      initial={{ opacity: 0 }}
      transition={{ duration: 1.5 }}
      whileInView={{ opacity: 1 }}
      className="flex relative flex-col text-center md:px-10 xl:flex-row md:w-[400px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center"
    >
      <h3 className="absolute underline top-24 uppercase tracking-[25px] text-gray-500">
        .Skills
      </h3>
      <h3 className="absolute top-36 tracking-[3px] text-gray-500">
        {word} over a skill for current profieciency
      </h3>
      <motion.div
        initial={{ y: -200, opacity: 0 }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="grid grid-cols-4 gap-6 md:grid-cols-4 md:gap-5 pt-36"
      >
        {skills?.map((skill) => (
          <Skill key={skill._id} skill={skill} />
        ))}
      </motion.div>
    </motion.div>
  );
}

export default Skills;
