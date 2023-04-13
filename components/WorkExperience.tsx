import React from "react";
import { motion } from "framer-motion";
import ExperienceCard from "./ExperienceCard";
import { Experience } from "../typings";

type Props = { experiences: Experience[] };

function WorkExperience({ experiences }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      transition={{ duration: 1.2 }}
      whileInView={{ opacity: 1 }}
      className="relative flex flex-col items-center justify-center h-screen max-w-full px-1 overflow-hidden text-left md:flex-row"
    >
      <h3 className="absolute underline top-16 uppercase tracking-[20px] text-gray-500">
        .Experience
      </h3>
      <div className="w-full flex overflow-x-scroll pt-20 snap-x snap-mandatory scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#9391ec]">
        {experiences.map((experience) => (
          <ExperienceCard key={experience._id} experience={experience} />
        ))}
      </div>
    </motion.div>
  );
}

export default WorkExperience;
