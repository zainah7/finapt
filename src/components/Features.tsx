'use client';

import React from "react";
import SmartBudgetingCard from "./cards/SmartBudgetingCard";
import VirtualBankingCard from "./cards/VirtualBankingCard";
import AskAnythingCard from "./cards/AskAnythingCard";
import VisualizeSpendingCard from "./cards/VisualizeSpendingCard";
import AutomateEverythingCard from "./cards/AutomateEverythingCard";

const FeaturesShowcase = () => {
  return (
    <section className="w-full px-6 md:px-16 py-12 md:py-20 mx-auto relative">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
        <h2 className="text-3xl md:text-4xl font-bold md:text-gray-900 leading-tight mb-4 md:mb-0">
          Meet your money manager
        </h2>
        
      </div>

      <div className="z-10 flex flex-col gap-8 md:gap-16 bg-white p-4 sm:p-6 rounded-4xl  ">
        <div className="flex justify-end">
          <p className="text-base md:text-lg text-gray-600 max-w-2xl mb-4">
            Managing your money shouldn&#39;t be a full-time job. Finapt helps
            you stay in control effortlessly
          </p>
        </div>

        {/* Top Card Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          <AutomateEverythingCard />
          <VisualizeSpendingCard />
        </div>

        {/* Bottom Card Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          <SmartBudgetingCard />
          <VirtualBankingCard />
          <AskAnythingCard />
        </div>
      </div>
    </section>
  );
};

export default FeaturesShowcase;

