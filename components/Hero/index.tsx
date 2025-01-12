"use client";
import React, { useState } from "react";
import Image from "next/image";

import { motion } from "framer-motion";

const Hero = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <section className="bg-gradient-to-r from-bggrad2 via-bggrad1 via-30% to-txt-grad2 pt-35 md:pt-40 xl:pt-46 pb-20 xl:pb-25 overflow-hidden">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          <div className="flex lg:items-center lg:gap-8 xl:gap-32.5">
            <div className=" md:w-1/2">
              <h4 className="text-black dark:text-white text-lg font-medium mb-4.5 ">
                🔥 The Blockchain Venture Platform for Digital Assets
              </h4>
              <h1 className="bg-gradient-to-r from-txtgrad1 to-black bg-clip-text text-transparent text-5xl xl:text-hero font-bold mb-5 pr-16">
              Next Gen Digital Asset Platform
              </h1>
              <p>
              Welcome to VNOC – the cutting-edge platform and network that harnesses the power of blockchain technology, premium URL's, innovative business models (eCorp), and connected networks (Contrib) to empower you to build, manage, and monetize your digital assets like never before.
              </p>

              <div className="mt-10">
                <form onSubmit={handleSubmit}>
                  <div className="flex flex-wrap gap-5">
                    <input
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      type="text"
                      placeholder="Enter your email address"
                      className="dark:bg-black border border-stroke dark:border-strokedark shadow-solid-2 dark:shadow-none rounded-full focus:outline-none focus:border-primary dark:focus:border-primary py-2.5 px-6"
                    />
                    <button
                      aria-label="signup to newsletter"
                      className="flex bg-black hover:bg-blackho dark:bg-btndark text-white rounded-full ease-in-out duration-300 px-7.5 py-2.5"
                    >
                      Get Started
                    </button>
                  </div>
                </form>

             
              </div>
            </div>

            <div className="animate_right md:w-1/2 hidden lg:block">
              <div className="relative 2xl:-mr-7.5">
                <Image
                  src="/images/shape/shape-01.png"
                  alt="shape"
                  width={46}
                  height={246}
                  className="absolute -left-11.5 top-0"
                />
                <Image
                  src="/images/shape/shape-02.svg"
                  alt="shape"
                  width={36.9}
                  height={36.7}
                  className="absolute right-0 bottom-0 z-10"
                />
                <Image
                  src="/images/shape/shape-03.svg"
                  alt="shape"
                  width={21.64}
                  height={21.66}
                  className="absolute -right-6.5 bottom-0 z-1"
                />
                <div className=" relative aspect-[700/444] w-full">
                  <Image
                    className="dark:hidden shadow-solid-l"
                    src="/images/hero/hero-light.svg"
                    alt="Hero"
                    fill
                  />
                  <Image
                    className="hidden dark:block shadow-solid-l"
                    src="/images/hero/hero-dark.svg"
                    alt="Hero"
                    fill
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
