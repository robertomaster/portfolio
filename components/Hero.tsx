import Link from "next/link";
import React from "react";
import { urlFor } from "../sanity";
import { PageInfo } from "../typings";
import BackgroundCircles from "./BackgroundCircles";

type Props = { pageInfo: PageInfo };

function Hero({ pageInfo }: Props) {
  return (
    <div className="flex flex-col items-center justify-center h-screen space-y-8 overflow-hidden text-center ">
      <BackgroundCircles />
      <img
        className="relative object-cover w-32 h-32 mx-auto rounded-full"
        src={urlFor(pageInfo?.heroImage).url()}
        alt="avatar"
      />
      <div className="z-20">
        <h1 className="px-10 text-5xl font-semibold lg:text-6xl">
          Hi ! My name is {pageInfo?.name}
        </h1>
        <h2 className="pt-5 text-sm uppercase text-gray-50 pb-2 tracking-[15px]">
          {pageInfo?.role}
        </h2>
        <div className="pt-5 space-x-5">
          <Link href="#about">
            <button className="heroButton">About</button>
          </Link>
          <Link href="#experience">
            <button className="heroButton">Experience</button>
          </Link>
          <Link href="#skills">
            <button className="heroButton">Skills</button>
          </Link>
          <Link href="#projects">
            <button className="heroButton">Projects</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Hero;
