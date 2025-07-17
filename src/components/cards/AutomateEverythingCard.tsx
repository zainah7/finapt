import Image from "next/image";
import React from "react";

const AutomateEverythingCard = () => {
  return (
    <div className="bg-[#F7F7F7] rounded-[30px] p-8 flex flex-col items-start text-left shadow-sm w-full h-auto min-h-[400px] gap-2.5">
      <p className="text-sm font-medium text-[#7B7B7B] mb-4">
        Set it and forget it.
      </p>
      {/* Image for Scheduled Payments */}
      <div className="w-full h-40 relative mb-4 flex-grow">
        <Image
          src="/assets/images/scheduled-payments.svg" 
          alt="Scheduled Payments"
          layout="fill"
          objectFit="contain"
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
