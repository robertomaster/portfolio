import React from "react";
import ContactInfo from "../components/ContactPage/ContactInfo";
import Form from "../components/ContactPage/Form";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Head from "next/head";

type Props = {};

const Contact = (props: Props) => {
  return (
    <div className="flex flex-col scroll-smooth bg-gray-50">
      <Head>
        <title>Contact Roberto</title>
      </Head>
      <Header />
      <div className="border-b border-b-gray-500">
        <h1 className="text-5xl font-extrabold text-center mt-14 font-raleway md:text-8xl lg:text-9xl md:mt-0 md:text-left">
          Contact Roberto
        </h1>
        <hr className="w-full bg-gray-500 h-0.5" />
        <div className="flex flex-col-reverse w-full md:flex-row">
          <div className="w-full border-0 md:w-1/3 md:border-r md:border-r-gray-500">
            <ContactInfo />
          </div>
          <div className="w-full p-5 border-b md:w-2/3 md:border-0 border-b-gray-500">
            <Form />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
