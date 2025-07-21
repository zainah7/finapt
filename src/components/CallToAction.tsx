'use client';

import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { useInView } from 'react-intersection-observer';
import { motion } from "framer-motion";

const CallToActionSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });
  return (
    <section className="w-full py-12 px-4 md:px-16 flex flex-col items-center justify-center text-center">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.7 }}
        className="w-full  bg-white rounded-[30px] shadow-sm flex flex-col lg:flex-row items-center justify-between gap-10 px-6 md:px-16 py-14"
      >
        {/* Left Content */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex items-center space-x-2 bg-[#F7F7F7] text-gray-800 px-4 py-2 rounded-full border "
          >
            <Image
              src="/assets/icons/sparkle.svg"
              alt="Sparkle Icon"
              width={18}
              height={18}
            />
            <span className="text-sm font-medium text-[#868686]">
              Take control today
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-3xl sm:text-4xl md:text-3xl lg:text-4xl font-medium text-[#000000]leading-tight"
          >
            <span className="text-[#0066DA]">Spend</span>{" "}
            <span className="text-[#A8A8A8]">smarter</span>.{" "}
            <span className="text-[#00AC47]">Save</span>{" "}
            <span className="text-[#A8A8A8]">easier.</span>
            <br />
            Live better with Finapt.
          </motion.h1>
        </div>

        <div className="flex flex-col items-center space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Button className="flex items-center justify-center bg-[#0066DA] w-[224px] h-[51px] rounded-full gap-2 px-[16px] py-[14px] text-white font-semibold shadow-lg hover:bg-blue-700 transition-colors duration-300">
              <Link href="#" className="flex items-center gap-2">
                <span>Download app</span>
                <Image
                  src="/assets/icons/arrow-up-right.svg"
                  alt="arrow"
                  width={20}
                  height={20}
                />
              </Link>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex items-center  space-x-2 text-gray-700 text-sm"
          >
            <Image
              src="/assets/icons/store.svg"
              alt="Apple Logo"
              width={20}
              height={20}
            />
            <Image
              src="/assets/icons/play.svg"
              alt="Google Play"
              width={20}
              height={20}
            />
            <span>Available on</span>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default CallToActionSection;
