'use client';

import Image from "next/image";
import React from "react";
import { useInView } from "react-intersection-observer";
import Card from "../Card";

const AskAnythingCard = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <Card
      ref={ref}
      className={`bg-[#F7F7F7] rounded-3xl p-4 sm:p-6 md:p-8 flex flex-col items-start text-gray-900 relative w-full h-[350px] sm:h-[400px] md:h-[500px]
        transition-all duration-700 ease-out
        ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}
        hover:scale-[1.03] hover:shadow-lg`}
    >
      {/* Decorative Blob with Question Mark */}
      <div className="absolute -top-12 sm:-top-16 -left-10 sm:-left-14 z-0">
        <Image
          src="/assets/images/question-blob.svg"
          alt="Question Blob"
          width={120}
          height={100}
          className="w-[120px] h-[100px] sm:w-[150px] sm:h-[130px] md:w-[170px] md:h-[150px]"
        />
      </div>

      {/* Chat Conversation Container */}
      <div className="bg-white p-4 sm:p-6 md:p-8 rounded-3xl md:rounded-4xl w-full mt-6 sm:mt-8 flex flex-col gap-3 sm:gap-4">
        <div className="relative z-10 bg-[#EFEFEF] rounded-tl-[15px] rounded-tr-[3px] rounded-br-[15px] rounded-bl-[15px] shadow-sm ml-auto max-w-[85%] sm:max-w-[80%] p-2 sm:p-3">
          <p className="text-xs sm:text-sm text-gray-800">
            Hey, tell me about my financial behaviour in the past 3 days
          </p>
        </div>

        {/* Chat Typing Indicator (Finapt's response) */}
        <div className="flex items-end justify-start">
          <div className="bg-[#EFEFEF] rounded-full w-6 h-6 sm:w-8 sm:h-8 flex items-center justify-center mr-2 flex-shrink-0">
            <Image
              src="/assets/icons/logo.svg"
              alt="Finapt Icon"
              width={10}
              height={10}
              className="w-[8px] h-[8px] sm:w-[10px] sm:h-[10px] md:w-[12px] md:h-[12px]"
            />
          </div>
          <div className="relative z-10 bg-[#EFEFEF] rounded-xl p-2 sm:p-3 flex items-center space-x-2 max-w-[75%] sm:max-w-[70%]">
            <div className="flex space-x-1">
              <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gray-400 rounded-full animate-pulse"></span>
              <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gray-400 rounded-full animate-pulse delay-75"></span>
              <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gray-400 rounded-full animate-pulse delay-150"></span>
            </div>
          </div>
        </div>
      </div>

      {/* Content below chat */}
      <div className="mt-4 sm:mt-6">
        <p className="text-xs sm:text-sm font-semibold text-[#717171] mb-1 sm:mb-2">
          Talk to finapt
        </p>
        <h3 className="text-lg sm:text-xl md:text-2xl font-medium mb-2 sm:mb-4 leading-tight">
          Ask anything, get
          <br /> answers
        </h3>
        <p className="text-sm sm:text-base text-[#7B7B7B]">
          Ask your AI assistant anything about your money from how much you&lsquo;ve
          spent to what you can save.
        </p>
      </div>
    </Card>
  );
};

export default AskAnythingCard;
