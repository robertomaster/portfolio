import React from "react";
import { motion } from "framer-motion";
import { Project } from "../typings";
import { urlFor } from "../sanity";
import Link from "next/link";

type Props = { projects: Project[] };

function Projects({ projects }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      transition={{ duration: 1.5 }}
      whileInView={{ opacity: 1 }}
      className="relative z-0 flex flex-col items-center h-screen max-w-full mx-auto overflow-hidden text-left md:flex-row justify-evenly "
    >
      <h3 className="absolute underline top-10 uppercase tracking-[25px] text-gray-500">
        .Projects
      </h3>
      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#9391ec]">
        {projects.map((project, i) => (
          <div
            key={project._id}
            className="flex flex-col items-center justify-center flex-shrink-0 w-screen h-screen px-5 space-y-5 snap-center md:p-44"
          >
            <Link href={project.linkToBuild}>
              <a target="_blank">
                <motion.img
                  initial={{ y: -100, opacity: 0 }}
                  transition={{ duration: 1.2 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  src={urlFor(project?.image).url()}
                  alt="logo"
                  className="cursor-pointer"
                />
              </a>
            </Link>
            <div className="max-w-6xl px-0 space-y-5 md:px-10">
              <h4 className="text-3xl font-semibold text-center">
                <span className="underline decoration-[#9391ec]/50">
                  Case {i + 1}:
                </span>{" "}
                {project?.title}
              </h4>
              <p className="text-lg text-center md:text-left">
                {project.summary}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="w-full absolute top-[30%] bg-[#9391ec]/10 left-o h-[300px] -skew-y-12" />
    </motion.div>
  );
}

export default Projects;
