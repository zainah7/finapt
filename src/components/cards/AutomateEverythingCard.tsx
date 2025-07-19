'use client';

import Image from "next/image";
import React from "react";
import { useInView } from "react-intersection-observer";

const AutomateEverythingCard = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <div
      ref={ref}
      className={`bg-[#F7F7F7] rounded-[30px] p-8 flex flex-col items-start text-left shadow-sm w-full h-full gap-2.5
        transition-all duration-700 ease-out transform
        ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}
        hover:scale-[1.03] hover:shadow-lg`}
    >
      <p className="text-sm font-medium text-[#7B7B7B] mb-4">
        Set it and forget it.
      </p>
      {/* Image for Scheduled Payments */}
      <div className="w-full h-40 relative mb-4 flex-grow">
        <Image
          src="/assets/images/scheduled-payments.svg" 
          alt="Scheduled Payments"
          fill
          className="object-contain"
        />
      </div>
      <h3 className="text-xl font-medium text-gray-900 mb-2">
        Automate everything
      </h3>
      <p className="text-sm text-gray-600">
        Schedule recurring payments for rent, subscriptions, and more.
        No stress, no late fees
      </p>
    </div>
  );
};

export default AutomateEverythingCard;