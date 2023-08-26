"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const FunFact = () => {
  return (
    <>
      {/* <!-- ===== Funfact Start ===== --> */}
      <section className="py-20 lg:py-22.5 px-4 md:px-8 2xl:px-0">
        <div className="mx-auto max-w-c-1390 py-22.5 xl:py-27.5 relative z-1 rounded-lg bg-gradient-to-t from-[#F8F9FF] to-[#DEE7FF] dark:bg-gradient-to-t dark:from-transparent dark:to-transparent dark:bg-blacksection dark:stroke-strokedark">
          <Image
            width={335}
            height={384}
            src="/images/shape/shape-04.svg"
            alt="Man"
            className="absolute -top-25 -left-15 lg:left-0 -z-1"
          />
          <Image
            width={132}
            height={132}
            src="/images/shape/shape-05.svg"
            alt="Doodle"
            className="absolute bottom-0 right-0 -z-1"
          />

          <Image
            fill
            src="/images/shape/shape-dotted-light-02.svg"
            alt="Dotted"
            className="absolute top-0 left-0 -z-1 dark:hidden"
          />
          <Image
            fill
            src="/images/shape/shape-dotted-dark-02.svg"
            alt="Dotted"
            className="absolute top-0 left-0 -z-1 hidden dark:block"
          />

          <motion.div
            variants={{
              hidden: {
                opacity: 0,
                y: -20,
              },

              visible: {
                opacity: 1,
                y: 0,
              },
            }}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 1, delay: 0.1 }}
            viewport={{ once: true }}
            className="animate_top mx-auto text-center md:w-4/5 lg:w-2/3 xl:w-1/2 mb-12.5 lg:mb-17.5 px-4 md:px-0"
          >
            <h2 className="font-bold text-black dark:text-white text-3xl xl:text-sectiontitle3 mb-4">
              Trusted by Top Domainers.
            </h2>
            <p className="lg:w-11/12 mx-auto">
            VNOC empowers you to make informed decisions:Build Ventures: Start from scratch or utilize our frameworks to create innovative projects.
Sell Ventures: Explore opportunities to monetize and divest your ventures as needed.
Partner Ventures: Collaborate with experts and like-minded professionals to drive shared success.
Co-Own Ventures: Embrace co-ownership models that leverage the strength of collective expertise.


            </p>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-8 lg:gap-42.5">
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  y: -20,
                },

                visible: {
                  opacity: 1,
                  y: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1, delay: 0.5 }}
              viewport={{ once: true }}
              className="animate_top text-center"
            >
              <h3 className="font-bold text-black dark:text-white text-3xl xl:text-sectiontitle3 mb-2.5">
                24K
              </h3>
              <p className="text-lg lg:text-para2">Premium Assets</p>
            </motion.div>
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  y: -20,
                },

                visible: {
                  opacity: 1,
                  y: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1, delay: 0.7 }}
              viewport={{ once: true }}
              className="animate_top text-center"
            >
              <h3 className="font-bold text-black dark:text-white text-3xl xl:text-sectiontitle3 mb-2.5">
                80k+
              </h3>
              <p className="text-lg lg:text-para2">Network</p>
            </motion.div>
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  y: -20,
                },

                visible: {
                  opacity: 1,
                  y: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1, delay: 0.8 }}
              viewport={{ once: true }}
              className="animate_top text-center"
            >
              <h3 className="font-bold text-black dark:text-white text-3xl xl:text-sectiontitle3 mb-2.5">
                865
              </h3>
              <p className="text-lg lg:text-para2">Successful Exits</p>
            </motion.div>
          </div>
        </div>
      </section>
      {/* <!-- ===== Funfact End ===== --> */}
    </>
  );
};

export default FunFact;
