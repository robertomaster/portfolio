import React, { useState } from "react";
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { useForm, SubmitHandler } from "react-hook-form";
import Lottie from "react-lottie";
import animationData from "./animations/email.json";
import robot from "./animations/robot.json";
import ReCAPTCHA from "react-google-recaptcha";

type Inputs = {
  name: string;
  email: string;
  message: string;
};

const isValidEmail = (email: any) =>
  // eslint-disable-next-line no-useless-escape
  /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );

type Props = {};

function ContactME({}: Props) {
  const [emailMessage, setEmailMessagge] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [send, setSend] = useState(false);
  const [captcha, setCaptcha] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = async (formData: Inputs) => {
    try {
      setIsLoading(true);
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const body = await res.json();

      if (res.ok) {
        setSend(true);
      }

      if (res.status === 400) {
        alert(`${body.message} 😢`);
      }
      setIsLoading(false);
    } catch (err) {
      alert(`Something gone wrong: ${err} 😢`);
    }
  };
  const handleEmailValidation = (email: any) => {
    const isValid = isValidEmail(email);

    const validityChanged =
      (errors.email && isValid) || (!errors.email && !isValid);
    if (validityChanged) {
      isValid
        ? setEmailMessagge("")
        : setEmailMessagge("Insert a valid email address");
    }

    return isValid;
  };
  const onReCAPTCHAChange = async (captchaCode: any) => {
    if (!captchaCode) {
      return;
    }
    setCaptcha(captchaCode);
  };
  return (
    <div className="items-center w-screen h-screen px-10 pt-24 mx-auto text-center md:flex-row justify-evenly lg:mb-24">
      <div className="flex flex-col space-y-5">
        <h4 className="md:text-3xl font-semibold text-center text-[18px]">
          You have new projects in mind?{" "}
          <span className="decoration-[#9391ec]/50 underline">Lets talk.</span>
        </h4>
        <div className="space-y-5">
          <div className="flex items-center justify-center space-x-5">
            <PhoneIcon className="text-[#9391ec] h-7 w-7 animate-pulse" />
            <p className="md:text-2xl sm:text-[14px]">+351 920 096 725</p>
          </div>
          <div className="flex items-center justify-center space-x-5">
            <EnvelopeIcon className="text-[#9391ec] h-7 w-7 animate-pulse" />
            <p className="md:text-2xl sm:text-[14px]">
              roberto.andres.master@gmail.com
            </p>
          </div>
          <div className="flex items-center justify-center space-x-5">
            <MapPinIcon className="text-[#9391ec] h-7 w-7 animate-pulse" />
            <p className="md:text-2xl sm:text-[14px]">Oeiras, Portugal</p>
          </div>
        </div>
        {send ? (
          <div className="p-1 md:p-5">
            <Lottie
              isClickToPauseDisabled={true}
              options={{
                loop: true,
                autoplay: true,
                animationData: animationData,
              }}
              height={400}
              width={400}
            />
            <p>Thank you for contacting me, we are in touch now</p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col space-y-2 md:w-[400px] sm:mx-10px md:mx-auto"
          >
            <div className="flex flex-col">
              <input
                {...register("name", { required: true })}
                aria-invalid={errors.name ? "true" : "false"}
                placeholder="Name"
                className="contactInput"
                type="text"
              />
              {errors.name && (
                <span className="text-[#bdfffe]">⚠ Name is required</span>
              )}
            </div>
            <div className="flex flex-col">
              <input
                {...register("email", {
                  required: "Email Address is required",
                  validate: handleEmailValidation,
                })}
                aria-invalid={errors.email ? "true" : "false"}
                placeholder="Email"
                className="contactInput"
                type="text"
              />
              {errors.email && (
                <p role="alert" className="text-[#bdfffe]">
                  ⚠ {emailMessage.length ? emailMessage : errors.email?.message}
                </p>
              )}
            </div>
            <div className="flex flex-col">
              <textarea
                {...register("message", { required: "Message is required" })}
                aria-invalid={errors.message ? "true" : "false"}
                placeholder="Message"
                className="contactInput"
              />
              {errors.message && (
                <p role="alert" className="text-[#bdfffe]">
                  ⚠ {errors.message?.message}
                </p>
              )}
            </div>

            {captcha === ""! ? (
              <div className="p-5">
                <div className="relative flex items-center content-center">
                  <Lottie
                    isClickToPauseDisabled={true}
                    options={{
                      loop: true,
                      autoplay: true,
                      animationData: robot,
                    }}
                    height={50}
                    width={50}
                  />
                  <p
                    title="Are you a robot 😒 ?"
                    className="absolute items-center justify-center opacity-40"
                  >
                    01011001 01101111 01110101 00100000 01100001 01110010
                    01100101 00100000 01100001 00100000 01110010 01101111
                    01100010 01101111 01110100 00111111
                  </p>
                </div>
              </div>
            ) : (
              <button
                disabled={isLoading || captcha === ""}
                className={`${
                  isLoading || captcha === ""
                    ? "bg-[#9391ec]/20"
                    : "bg-[#9391ec]"
                } py-5 rounded-md text-white tracking-[10px] font-bold`}
              >
                {isLoading ? (
                  <svg className="spinner" viewBox="0 0 50 50">
                    <circle
                      className="path"
                      cx="25"
                      cy="25"
                      r="20"
                      fill="none"
                      strokeWidth="5"
                    ></circle>
                  </svg>
                ) : (
                  "Send"
                )}
              </button>
            )}
            <div className="flex justify-center w-full">
              <ReCAPTCHA
                onChange={onReCAPTCHAChange}
                theme="dark"
                sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
                onExpired={() => setCaptcha("")}
              />
            </div>
          </form>
        )}
      </div>
    </div>
  );
}

export default ContactME;
