import Head from "next/head";
import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ProjectCard from "../components/ProjectsPage/ProjectCard";
import { GetStaticProps } from "next";
import { Project } from "../typings";
import { fetchProject } from "../utils/fetchProjects";

type Props = { projects: Project[] };

const Projects = ({ projects }: Props) => {
  return (
    <div className="scroll-smooth bg-gray-50">
      <Head>
        <title>Projects</title>
      </Head>
      <Header />
      <h1 className="text-5xl font-extrabold mt-14 font-raleway md:text-8xl lg:text-9xl md:mt-0 uppercase">
        Projects
      </h1>
      {projects.map((item, index) => (
        <ProjectCard projects={item} index={index} key={index} />
      ))}
      <Footer />
    </div>
  );
};

export default Projects;

export const getStaticProps: GetStaticProps<Props> = async () => {
  const projects: Project[] = await fetchProject();
  return {
    props: {
      projects,
    },
  };
};
