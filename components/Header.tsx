import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import Link from "next/link";
import { Social } from "../typings";

type Props = { socials: Social[] };

export default function Header({ socials }: Props) {
  return (
    <header className="absolute top-0 z-20 flex items-start justify-between max-w-5xl p-4 mx-auto my-0 xl:items-center ">
      <motion.div
        className="flex flex-col items-center flex-end"
        initial={{ x: -500, opacity: 0, scale: 0.5 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
      >
        {socials.map((social) => (
          <SocialIcon
            key={social._id}
            url={social.url}
            fgColor="gray"
            bgColor="transparent"
          />
        ))}
      </motion.div>
      <Link href="#contact">
        <motion.div
          initial={{ x: 500, opacity: 0, scale: 0.5 }}
          animate={{ x: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 1.5 }}
          className="fixed text-gray-300 cursor-pointer right-4 top-4"
        >
          <SocialIcon
            className="cursor-pointer"
            network="email"
            fgColor="gray"
            bgColor="transparent"
          />
          <p className="hidden text-sm text-gray-400 uppercase md:inline-flex">
            Get in touch
          </p>
        </motion.div>
      </Link>
    </header>
  );
}
