import React from "react";
import SmartBudgetingCard from "./cards/SmartBudgetingCard";
import VirtualBankingCard from "./cards/VirtualBankingCard";
import AskAnythingCard from "./cards/AskAnythingCard";
import VisualizeSpendingCard from "./cards/VisualizeSpendingCard";
import AutomateEverythingCard from "./cards/AutomateEverythingCard";

const FeaturesShowcase = () => {
  return (
    <section className="w-full px-6 md:px-16 py-12 md:py-20 mx-auto relative">
      <div className="  z-10 flex flex-col gap-8 md:gap-16 bg-white p-4 sm:p-6 rounded-3xl md:rounded-4xl">
        {/* Top Section: Meet your money manager */}
        <div className="flex flex-col items-start text-left mb-6 md:mb-10">
          <div className="flex flex-col md:flex-row gap-4 md:gap-8 items-start md:items-center justify-between w-full">
            <h2 className="text-3xl md:text-4xl font-bold text-white md:text-gray-900 leading-tight">
              Meet your money manager
              
            </h2>
            <p className="text-base md:text-lg text-white md:text-gray-600 max-w-2xl">
              Managing your money shouldn&#39;t be a full-time job. Finapt helps
              you stay in control effortlessly
            </p>
          </div>

          {/* "Set it and forget it" subtitle */}
          <p className="text-white text-sm font-medium mt-4 md:hidden">
            Set it and forget it
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
