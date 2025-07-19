'use client';

import Image from "next/image";
import React from "react";
import Card from '../Card';
import { useInView } from 'react-intersection-observer';

const VirtualBankingCard = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <Card
      ref={ref}
      className={`bg-[#F7F7F7] rounded-3xl p-8 flex flex-col items-start text-gray-900 relative overflow-hidden w-full h-[400px] md:w-auto md:h-[500px] transition-all duration-700 ease-out ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      } hover:scale-[1.03] hover:shadow-lg`}
    >
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