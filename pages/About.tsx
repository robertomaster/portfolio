import React from "react";
import type { GetStaticProps } from "next";
import Head from "next/head";
import Header from "../components/Header";
import { Experience, OtherExperiences, PageInfo, Studies } from "../typings";
import { fetchPageInfo } from "../utils/fetchPageInfo";
import { fetchStudies } from "../utils/fetchStudies";
import { fetchOtherExperiences } from "../utils/fetchOtherExperiences";
import { fetchExperience } from "../utils/fetchExperience";
import Info from "../components/AboutPage/Info";
import Study from "../components/AboutPage/Study";
import WorkExperience from "../components/AboutPage/WorkExperience";
import OthersExp from "../components/AboutPage/OthersExp";
import Footer from "../components/Footer";

type Props = {
  pageInfo: PageInfo;
  studies: Studies[];
  otherExperiences: OtherExperiences[];
  experiences: Experience[];
};

const About = ({ pageInfo, studies, otherExperiences, experiences }: Props) => {
  return (
    <div className="flex flex-col w-full bg-gray-50 scroll-smooth">
      <Head>
        <title>About Roberto</title>
      </Head>
      <Header />
      <h1 className="text-5xl font-extrabold text-center uppercase mt-14 font-raleway md:text-8xl lg:text-9xl md:mt-0 md:text-left">
        About Roberto
      </h1>
      <Info pageInfo={pageInfo} />
      <Study studies={studies} />
      <WorkExperience experiences={experiences} />
      <OthersExp otherExperiences={otherExperiences} />
      <Footer />
    </div>
  );
};

export default About;

export const getStaticProps: GetStaticProps<Props> = async () => {
  const pageInfo: PageInfo = await fetchPageInfo();
  const studies: Studies[] = await fetchStudies();
  const otherExperiences: OtherExperiences[] = await fetchOtherExperiences();
  const experiences: Experience[] = await fetchExperience();

  return {
    props: {
      pageInfo,
      studies,
      otherExperiences,
      experiences,
    },
  };
};
