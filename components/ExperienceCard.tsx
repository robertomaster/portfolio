import React from "react";
import { motion } from "framer-motion";
import { Experience } from "../typings";
import { urlFor } from "../sanity";

type Props = { experience: Experience };

function ExperienceCard({ experience }: Props) {
  return (
    <article className="flex flex-col items-center space-y-7 flex-shrink-0 w-[400px] xl:w-[600px] snap-center bg-[#292929] p-5 mt-24 hover:opacity-100 md:opacity-40 cursor-pointer transition-opacity duration-200 ">
      <motion.img
        initial={{ y: -100, opacity: 0 }}
        transition={{ duration: 1.2 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        className="w-32 h-32 rounded-full xl:w-[100px] xl:h-[100px] object-cover object-center"
        src={urlFor(experience?.companyImage).url()}
        alt="logo"
      />
      <div className="px-0 md:px-10">
        <h4 className="font-light">{experience.jobTitle}</h4>
        <p className="mt-1 text-2xl font-bold">{experience.company}</p>
        <div className="flex w-full my-2 space-x-2">
          {experience.technologies.map((technology) => (
            <img
              key={technology._id}
              className="w-10 h-10 rounded-full"
              src={urlFor(technology.image).url()}
              alt="icon"
            />
          ))}
        </div>
        <p className="py-5 text-gray-300 uppercase">{experience.date}</p>
        <p className="text-justify">{experience.points}</p>
      </div>
    </article>
  );
}

export default ExperienceCard;
