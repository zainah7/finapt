"use client";

import React from "react";
import { motion } from "framer-motion";
import SmartBudgetingCard from "./cards/SmartBudgetingCard";
import VirtualBankingCard from "./cards/VirtualBankingCard";
import AskAnythingCard from "./cards/AskAnythingCard";
import VisualizeSpendingCard from "./cards/VisualizeSpendingCard";
import AutomateEverythingCard from "./cards/AutomateEverythingCard";

const FeaturesShowcase = () => {
  return (
    <section className="w-full px-6 md:px-16 py-12 md:py-20 mx-auto relative">
      <div className=" mx-auto relative bg-[url('/assets/images/curve-top-right.svg')] bg-no-repeat bg-cover bg-center">
        {/* Heading */}
        <div className="md:ml-14 md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-4 md:mb-14">
            Meet your money manager
          </h2>
        </div>

        {/* Intro text aligned to the right */}
        <div className="flex justify-end md:mr-34 mb-6 p-6 md:p-0">
          <p className="text-base md:text-lg text-gray-600 max-w-lg">
            Managing your money shouldn&#39;t be a full-time job. Finapt helps
            you stay in control effortlessly
          </p>
        </div>

        {/* Cards Section */}
        <div className="flex flex-col gap-8 md:gap-16 p-4 sm:p-6">
          {/* Top row with 2 cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.03 }}
            >
              <AutomateEverythingCard />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              whileHover={{ scale: 1.03 }}
            >
              <VisualizeSpendingCard />
            </motion.div>
          </div>

          {/* Bottom row with 3 cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ scale: 1.03 }}
            >
              <SmartBudgetingCard />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              whileHover={{ scale: 1.03 }}
            >
              <VirtualBankingCard />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              whileHover={{ scale: 1.03 }}
            >
              <AskAnythingCard />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesShowcase;
