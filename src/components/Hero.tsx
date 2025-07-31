'use client';
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Pacifico } from "next/font/google";
import AnimatedQrCode from "./AnimatedQrCode";
import { motion, Variants } from 'framer-motion';

const pacifico = Pacifico({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export default function Hero() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.2 },
    },
  };

  const titleVariants: Variants = {
    hidden: { y: 50, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const subtitleVariants: Variants = {
    hidden: { y: 30, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: "easeOut", delay: 0.2 } },
  };

  const buttonVariants: Variants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { scale: 1, opacity: 1, transition: { duration: 0.5, ease: "backOut" } },
    hover: { scale: 1.05, transition: { duration: 0.2 } },
  };

  const imageVariants: Variants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: { scale: 1, opacity: 1, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const greenCircleVariants: Variants = {
    hidden: { scale: 0, rotate: -90 },
    visible: { scale: 1, rotate: 0, transition: { duration: 0.7, ease: "easeOut", delay: 0.5 } },
  };

  const downloadSectionVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2, delay: 0.4 } },
  };

  return (
    <main className="flex-grow flex items-center justify-center px-4 md:px-16 md:py-0 mb-10">
      <motion.div
        className="w-full flex flex-col md:flex-row gap-8 items-center justify-between"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Left Column */}
        <motion.div
          className="bg-white w-full md:w-[685px] h-auto md:h-[685px] rounded-[30px] p-6 md:p-[38px] flex flex-col justify-between"
        >
          <div>
            <motion.h1
              className="text-[36px] md:text-[50px] font-medium text-slate-900 leading-[120%] tracking-[-0.01em] mb-4"
              variants={titleVariants}
            >
              Your Smart <br />
              <span
                className={`text-blue-600 relative ${pacifico.className} text-[32px] md:text-[45px] leading-[120%] tracking-[-0.01em]`}
              >
                <span className="inline-block">
                  Financial
                </span>
                <motion.img
                  src="/assets/images/green-circle.svg"
                  alt="Green Circle"
                  width={200}
                  height={80}
                  className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-auto"
                  variants={greenCircleVariants}
                  initial="hidden"
                  animate="visible"
                />
              </span>{" "}
              Sidekick
            </motion.h1>
            <motion.p
              className="text-base md:text-lg text-slate-500 mb-8"
              variants={subtitleVariants}
            >
              Automate your payments, track your expenses, and get AI-powered
              budgeting, personalized just for you.
            </motion.p>
          </div>

          <motion.div variants={buttonVariants} whileHover="hover">
            <Button
              asChild
              className="bg-blue-600 hover:bg-blue-500 rounded-full w-[200.51px] h-[51px] p-4 text-base shadow-lg"
            >
              <Link href="#" className="flex items-center gap-2">
                Get started for free
                <Image
                  src="/assets/icons/arrow-up-right.svg"
                  alt="Arrow Icon"
                  width={16}
                  height={16}
                />
              </Link>
            </Button>
          </motion.div>

          <motion.div className="mt-12" variants={downloadSectionVariants}>
            <h3 className="text-lg font-semibold text-slate-900 mb-2">
              Download our App
            </h3>
            <div className="mb-4">
              <AnimatedQrCode />
            </div>
            <div className="flex items-center gap-5">
              <div className="flex items-center gap-3">
                <Image
                  src="/assets/icons/apple.svg"
                  alt="App Store"
                  width={20}
                  height={20}
                />
                <Image
                  src="/assets/icons/google-play.svg"
                  alt="Google Play"
                  width={20}
                  height={20}
                />
              </div>
              <p className="text-slate-900 font-medium text-lg">Available on</p>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Column */}
        <motion.div
          className="w-full md:w-[543px] h-auto md:h-[685px] flex justify-center items-center"
          variants={imageVariants}
        >
          <Image
            src="/assets/images/hero-image.svg"
            alt="Finapt App Screenshot"
            width={543}
            height={685}
            className="object-contain h-full w-full"
          />
        </motion.div>
      </motion.div>
    </main>
  );
}


