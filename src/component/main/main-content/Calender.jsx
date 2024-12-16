import React, { useState } from "react";
import { ChevronDownIcon, ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Calender = () => {
  const [selectedOption, setSelectedOption] = useState("Monthly");

  const upcomingExpirations = [
    { title: "January 2024", count: 1 },
    { title: "March 2024", count: 5 },
    { title: "July 2024", count: 7 },
  ];

  const upcomingRenewals = [
    { title: "January 2024", count: 2 },
    { title: "April 2024", count: 3 },
    { title: "August 2024", count: 4 },
  ];

  return (
    <div className="bg-white p-3 rounded-3xl shadow-lg w-full h-[50vh] flex flex-col sm:flex-row gap-4">
  <div className="flex flex-col w-full sm:w-1/2 gap-4 overflow-hidden">
    {/* Header Section */}
    <div className="flex justify-between items-center">
      <h2 className="text-lg font-medium text-black">Calendar</h2>
      <div className="flex items-center space-x-2">
        <button
          className="flex items-center space-x-1 border border-gray-300 rounded-full px-3 py-1 hover:bg-gray-100 focus:ring focus:ring-blue-300"
        >
          <span className="text-black text-sm">{selectedOption}</span>
          <ChevronDownIcon className="w-5 h-5 text-[#013566]" />
        </button>
        <button className="bg-gray-100 p-2 rounded-full hover:bg-gray-200 focus:ring">
          <ArrowTopRightOnSquareIcon className="w-5 h-5 text-[#013566]" />
        </button>
      </div>
    </div>

    {/* Calendar */}
    <div className="bg-gray-50 p-3 rounded-2xl shadow-md flex-1">
      <div className="flex items-center justify-between mb-2">
        <p className="font-bold text-base">JANUARY 2024</p>
        <div className="flex space-x-1">
          <button className="w-6 h-6 flex items-center justify-center bg-black rounded-full hover:bg-gray-300">
            <FaChevronLeft className="text-white text-sm" />
          </button>
          <button className="w-6 h-6 flex items-center justify-center bg-black rounded-full hover:bg-gray-300">
            <FaChevronRight className="text-white text-sm" />
          </button>
        </div>
      </div>
      <div className="grid grid-cols-7 gap-y-1 text-center">
        {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day, index) => (
          <span key={index} className="font-normal text-gray-600 text-xs">
            {day}
          </span>
        ))}
        {Array.from({ length: 31 }, (_, i) => (
          <button
            key={i}
            className={`w-8 h-8 rounded-full text-xs flex items-center justify-center ${
              i + 1 === 2
                ? "bg-yellow-100 text-black font-bold"
                : i + 1 === 11
                ? "bg-yellow-300 text-black font-bold"
                : "bg-white text-gray-800 border border-gray-200"
            }`}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  </div>

  {/* Right Section */}
  <div className="flex flex-col w-full sm:w-1/2 gap-4 overflow-hidden">
    <div className="flex-1">
      <h2 className="text-sm font-bold text-gray-800 mb-2">Upcoming Expirations</h2>
      <div className="bg-blue-50 p-3  overflow-y-auto rounded-lg shadow-md h-32">
        {upcomingExpirations.map((item, index) => (
          <div
            key={index}
            className="flex justify-between items-center bg-blue-100 p-2 mb-2 rounded-md"
          >
            <span className="font-medium text-sm text-gray-800">{item.title}</span>
            <span className="bg-blue-500 text-white text-xs font-bold px-2 py-1 rounded-full">
              {item.count}
            </span>
          </div>
        ))}
      </div>
    </div>
    <div className="flex-1">
      <h2 className="text-sm font-bold text-gray-800 mb-2">Upcoming Renewals</h2>
      <div className="bg-blue-50 p-3 rounded-lg overflow-y-auto  shadow-md h-32">
        {upcomingRenewals.map((item, index) => (
          <div
            key={index}
            className="flex justify-between items-center  bg-blue-100 p-2 mb-2 rounded-md"
          >
            <span className="font-medium text-sm text-gray-800">{item.title}</span>
            <span className="bg-blue-500 text-white text-xs font-bold px-2 py-1 rounded-full">
              {item.count}
            </span>
          </div>
        ))}
      </div>
    </div>
  </div>
</div>

  );
};

export default Calender;
