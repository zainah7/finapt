import React from "react";

const VisualizeSpendingCard = () => {
  return (
    <div className="bg-[#F7F7F7] rounded-[30px] p-8 flex flex-col items-start text-left shadow-sm w-full h-auto min-h-[400px] justify-between">
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

          {/* Bar Chart with exact dimensions */}
          <div className="w-full flex items-end  justify-between h-[112px] mb-2">
            {/* Sunday */}
            <div
              className="w-[36px] bg-[#D3D3D3] rounded-[12.95px]"
              style={{ height: "46.6px" }}
            ></div>

            {/* Monday */}
            <div
              className="w-[36px] bg-[#D3D3D3] rounded-[12.95px]"
              style={{ height: "82.85px" }}
            ></div>

            {/* Tuesday */}
            <div
              className="w-[36px] bg-[#D3D3D3] rounded-[12.95px]"
              style={{ height: "91.91px" }}
            ></div>

            {/* Wednesday */}
            <div
              className="w-[36px] bg-[#D3D3D3] rounded-[12.95px]"
              style={{ height: "73.79px" }}
            ></div>

            {/* Thursday */}
            <div
              className="w-[36px] rounded-[12.95px]"
              style={{
                height: "112.62px",
                background: "linear-gradient(180deg, #0066DA 0%, #00AC47 100%)",
              }}
            ></div>

            {/* Friday */}
            <div
              className="w-[36px] bg-[#D3D3D3] rounded-[12.95px]"
              style={{ height: "69.9px" }}
            ></div>

            {/* Saturday */}
            <div
              className="w-[36px] bg-[#D3D3D3] rounded-[12.95px]"
              style={{ height: "46.6px" }}
            ></div>
          </div>
          {/* Day labels */}
          <div className="flex justify-between w-full text-xs text-gray-500 mt-2">
            <span className="w-[36px] text-center">S</span>
            <span className="w-[36px] text-center">M</span>
            <span className="w-[36px] text-center">T</span>
            <span className="w-[36px] text-center">W</span>
            <span className="w-[36px] text-center">T</span>
            <span className="w-[36px] text-center">F</span>
            <span className="w-[36px] text-center">S</span>
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
