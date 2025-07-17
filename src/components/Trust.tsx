import Image from "next/image";
import React from "react";

const TrustSection = () => {
  const features = [
    {
      title: "Secure by design",
      description:
        "Built with bank-grade encryption and the highest security standards to ensure your data and transactions are always protected",
    },
    {
      title: "Built for you",
      description:
        "Tailored to fit real-world needs whether you're managing your finances in Nigeria or transacting across borders",
    },
    {
      title: "Mobile first",
      description:
        "Wherever life takes you, Finapt is right there with you. Designed for seamless mobile experiences, anytime, anywhere",
    },
    {
      title: "People-Centered",
      description:
        "Created by people who understand the daily realities of managing money making your financial life easier, not harder",
    },
  ];

  return (
    <section className="relative w-full py-20 px-6 md:px-12 overflow-hidden">
      {/* Blue shape on the left */}
      <div className="absolute top-1/4 left-0 z-0 -translate-x-1/4 -translate-y-1/4">
        <Image
          src="/assets/images/decorative-shape-blue.svg"
          alt="Decorative Blue Shape"
          width={250}
          height={250}
          className="w-[120px] h-[120px] md:w-[180px] md:h-[180px] lg:w-[250px] lg:h-[250px]"
        />
      </div>

      {/* Yellow shape on the right */}
      <div className="absolute bottom-[-20px] right-[-20px] md:bottom-0 md:right-0 z-0 md:translate-x-1/4 md:-translate-y-1/2">
        <Image
          src="/assets/images/decorative-shape-yellow.svg"
          alt="Decorative Yellow Shape"
          width={250}
          height={250}
          className="w-[120px] h-[120px] md:w-[180px] md:h-[180px] lg:w-[250px] lg:h-[250px]"
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-5xl mx-auto text-center">
        {/* Icon */}
        <div className="flex justify-center mb-2">
          <Image
            src="/assets/icons/trust-icon.svg"
            alt="Trust Icon"
            width={40}
            height={40}
          />
        </div>

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Trust built in
        </h2>

        {/* Subheading */}
        <p className="text-sm md:text-base text-[#7B7B7B] mb-12 max-w-2xl mx-auto">
          Your security is never an afterthought. Every layer of Finapt is
          designed to keep your money safe while keeping you in control.
        </p>
        {/* Features */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-24 gap-y-20 max-w-3xl mx-auto">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-[#7B7B7B]">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
