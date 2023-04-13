import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import About from "../components/About";
import ContactME from "../components/ContactME";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import WorkExperience from "../components/WorkExperience";
import { Experience, PageInfo, Skill, Project, Social } from "../typings";
import { fetchPageInfo } from "../utils/fetchPageInfo";
import { fetchExperience } from "../utils/fetchExperience";
import { fetchSkills } from "../utils/fetchSkills";
import { fetchProject } from "../utils/fetchProjects";
import { fetchSocial } from "../utils/fetchSocials";

type Props = {
  pageInfo: PageInfo;
  experiences: Experience[];
  skills: Skill[];
  projects: Project[];
  socials: Social[];
};

const Home = ({ pageInfo, experiences, projects, skills, socials }: Props) => {
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll z-0 overflow-x-hidden scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#9391ec]">
      <Head>
        <title>Roberto - Portfolio</title>
      </Head>
      <Header socials={socials} />
      <section id="hero">
        <Hero pageInfo={pageInfo} />
      </section>
      <section id="about">
        <About pageInfo={pageInfo} />
      </section>
      <section id="experience">
        <WorkExperience experiences={experiences} />
      </section>
      <section id="skills">
        <Skills skills={skills} />
      </section>
      <section id="projects">
        <Projects projects={projects} />
      </section>
      <section id="contact">
        <ContactME />
      </section>

      {/* <Link href="#hero">
        <footer className="sticky w-full cursor-pointer bottom-5">
          <div className="flex items-center justify-center ">
            <ArrowSmallUpIcon className="w-10 cursor-pointer h10 filter grayscale hover:grayscale-0" />
          </div>
        </footer>
      </Link> */}
    </div>
  );
};

export default Home;

export const getStaticProps: GetStaticProps<Props> = async () => {
  const pageInfo: PageInfo = await fetchPageInfo();
  const experiences: Experience[] = await fetchExperience();
  const skills: Skill[] = await fetchSkills();
  const projects: Project[] = await fetchProject();
  const socials: Social[] = await fetchSocial();
  return {
    props: {
      pageInfo,
      experiences,
      skills,
      projects,
      socials,
    },
    revalidate: 10,
  };
};
