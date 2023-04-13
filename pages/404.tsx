import React from "react";
import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Link from "next/link";

type Props = {};

const FourOhFour = (props: Props) => {
  return (
    <div className="flex flex-col bg-gray-50">
      <Head>
        <title>Oops !</title>
      </Head>
      <Header />
      <h1 className="text-8xl font-extrabold text-center uppercase mt-14 sm:mt-20 font-raleway lg:text-9xl">
        404 - Page Not Found
      </h1>
      <div className="font-raleway my-20 text-center">
        <Link href={"/"}>
          <h1 className="cursor-pointer hover:underline uppercase">Go home</h1>
        </Link>
      </div>
      <hr className="w-full bg-gray-500 h-0.5" />
      <Footer />
    </div>
  );
};

export default FourOhFour;
