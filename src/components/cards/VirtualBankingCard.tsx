import Image from "next/image";
import React from "react";
import Card from "../Card";

const VirtualBankingCard = () => {
  return (
    <Card className="bg-[#F7F7F7] rounded-3xl p-8 flex flex-col items-start text-gray-900 relative overflow-hidden w-full h-[400px] md:w-auto md:h-[500px]">
      {/* Top text */}
      <p className="text-sm font-semibold text-[#717171] mb-6">
        One dashboard, all your funds
      </p>
      {/* Headline */}
      <h3 className="text-lg md:text-2xl font-medium mb-4 leading-tight">
        Virtual banking, <br /> simplified
      </h3>
      {/* Subtext */}
      <p className="text-base text-[#7B7B7B] font-medium mb-8">
        Track balances, send/receive money, and manage your finances with
        ease.
      </p>
      {/* Bank Building Image */}
      <div className="w-full flex justify-center mt-auto">
        <Image
          src="/assets/images/bank-building.svg"
          alt="Bank Building"
          width={250}
          height={200}
          className="mt-auto"
        />
      </div>
    </Card>
  );
};

export default VirtualBankingCard;
