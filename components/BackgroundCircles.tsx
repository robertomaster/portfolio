import React from "react";

type Props = {};

function BackgroundCircles({}: Props) {
  return (
    <div className="relative flex items-center justify-center">
      {/* <div className="absolute border border-[#333333] rounded-full h-[200px] w-[200px] mt-52 animate-ping" />
      <div className="absolute border border-[#333333] rounded-full h-[250px] w-[250px] mt-52 animate-ping" />
      <div className="absolute border border-[#333333] rounded-full h-[300px] w-[300px] mt-52 animate-ping" />
      <div className="rounded-full border border-[#9391ec] opacity-20 h-[350px] w-[350px] absolute mt-52 animate-pulse" />
      <div className="rounded-full border border-[#9391ec] opacity-20 h-[350px] w-[350px] absolute mt-52" /> */}
      <div className="absolute h-screen w-[1920px]">
        <video autoPlay loop muted>
          <source src="/video.mp4" type="video/mp4" />
        </video>
      </div>
    </div>
  );
}

export default BackgroundCircles;
