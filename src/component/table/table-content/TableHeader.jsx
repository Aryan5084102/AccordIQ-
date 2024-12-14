import React, {useState} from 'react'
import { FaFilter, FaEye } from "react-icons/fa";
import { AiOutlineMenu } from "react-icons/ai";

const TableHeader = () => {
    const [activeTab, setActiveTab] = useState("Name");

    const tabs = [
      { title: "Name", count: 23 },
      { title: "Participating", count: 14 },
      { title: "All Contracts", count: 50 },
      { title: "Completed" },
    ];

  return (
    <div className="flex items-center justify-between p-4   shadow-sm">
      {/* Tabs */}
      <div className="flex items-center space-x-2">
        {tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(tab.title)}
            className={`flex items-center px-4 py-2 rounded-full border text-sm font-medium whitespace-nowrap shadow-sm transition-all duration-150 ${
              activeTab === tab.title
                ? "bg-[#013566] text-white border-blue-800"
                : " text-black border-gray-300 hover:bg-gray-100"
            }`}
          >
            <AiOutlineMenu className="mr-2 text-xs flex items-center justify-center text-white font-bold" />
            {tab.title}
            {tab.count !== undefined && (
              <span
                className={`ml-2 text-xs font-bold px-2 py-0.5 rounded-full ${
                  activeTab === tab.title
                    ? "bg-blue-100 text-blue-800"
                    : "bg-gray-200 text-gray-600"
                }`}
              >
                {tab.count}
              </span>
            )}
          </button>
        ))}
      </div>

      {/* Actions */}
      <div className="flex items-center space-x-2">
        <button className="flex items-center px-4 py-2 border rounded-full text-sm font-medium text-gray-700 bg-white hover:bg-gray-100">
          <FaFilter className="mr-2 text-[#013566]" /> Filter
        </button>
        <button className="flex items-center px-4 py-2 border rounded-full text-sm font-medium text-gray-700 bg-white hover:bg-gray-100">
          <FaEye className="mr-2 text-[#013566]" /> View
        </button>
      </div>
    </div>
  )
}

export default TableHeader