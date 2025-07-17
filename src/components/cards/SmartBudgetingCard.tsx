import Image from "next/image";
import React from "react";
import Card from "../Card";

const SmartBudgetingCard = () => {
  return (
    <Card className="bg-[#0066DA] rounded-3xl p-6 md:p-8 flex flex-col justify-between items-start text-white overflow-hidden relative w-full h-[300px] sm:h-[350px] md:h-[500px]">
      {/* Decorative Stars */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0">
        <Image
          src="/assets/images/stars.svg"
          alt="Decorative Stars"
          width={170}
          height={100}
          className="w-[170px] h-[100px] md:w-[300px] md:h-[200px]"
        />
      </div>
      <div className="relative z-10 flex flex-col h-full justify-end pt-0">
        <p className="text-xs sm:text-sm mb-2 opacity-80 text-[#78B7FF]">
          Tailored to your lifestyle
        </p>
        <h3 className="text-base sm:text-xl font-medium mb-3 sm:mb-4 leading-tight">
          Smart budgeting, <br /> powered by AI
        </h3>
        <p className="text-sm sm:text-base text-[#78B7FF] opacity-90">
          Finapt generates budget suggestions based on your goals and habits and
          tracks them in real time.
        </p>
      </div>
    </Card>
  );
};

export default SmartBudgetingCard;
