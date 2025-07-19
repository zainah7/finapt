'use client';

import React from "react";
import Image from "next/image";
import { useInView } from "react-intersection-observer";

const VisualizeSpendingCard = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <div
      ref={ref}
      className={`bg-[#F7F7F7] rounded-[30px] p-8 flex flex-col items-start text-left shadow-sm w-full h-full justify-between
        transition-all duration-700 ease-out transform
        ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}
        hover:scale-[1.03] hover:shadow-lg`}
    >
      <p className="text-sm font-medium text-[#7B7B7B] mb-4">
        See your money clearly
      </p>

      {/* Spending Chart */}
      <div className="w-full h-auto mb-4 flex flex-col justify-center items-start">
        <div className="bg-[#FFFFFF] w-full rounded-[30px] p-6 shadow-sm">
          <p className="text-lg font-semibold text-gray-900 mb-1">₦156.53</p>
          <div className="text-xs text-[#A3A3A3] mb-4 flex gap-2 items-center">
            <p className="">Total spent this week</p>
            <p>
              <span className="text-[#2DB300] font-medium">1.6% </span>
              from last week
            </p>
          </div>
          <div className="w-full h-40 relative flex-grow">
            <Image
              src="/assets/images/Chart.svg"
              alt="Spending Chart"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </div>

      <div className="mt-auto">
        <h3 className="text-lg md:text-xl font-medium text-gray-900 mb-2">
          Visualize your spending
        </h3>
        <p className="text-sm md:text-base text-[#7B7B7B]">
          Get breakdowns and charts that help you understand where your
          money&rsquo;s going
        </p>
      </div>
    </div>
  );
};

export default VisualizeSpendingCard;