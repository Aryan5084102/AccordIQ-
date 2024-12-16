import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { VscCheck } from "react-icons/vsc";
import { HiOutlineDownload } from "react-icons/hi";
import { BsClock } from "react-icons/bs";

const ContractDetail = () => {
    const { name } = useParams();
    const navigate = useNavigate(); // Hook to navigate to the previous page

    // State to track contract statuses
    const [statuses, setStatuses] = useState([
        { label: "Review", state: "completed" },
        { label: "Sent for Signature", state: "current" },
        { label: "Internal Signature", state: "pending" },
        { label: "Executed", state: "pending" },
    ]);

    // State to manage visibility of signature section
    const [showSignatureSection, setShowSignatureSection] = useState(false);

    // State to disable the "Send for Signature" button
    const [isButtonDisabled, setIsButtonDisabled] = useState(false);

    const handleSendForSignature = () => {
        if (isButtonDisabled) return; // Prevent further clicks

        // Update the state to reflect the new contract status
        setStatuses((prevStatuses) =>
            prevStatuses.map((status, index) => {
                if (index === 0) return { ...status, state: "completed" }; // Already completed
                if (index === 1) return { ...status, state: "completed" }; // Mark as completed
                if (index === 2) return { ...status, state: "current" };   // Set as current
                return status; // Keep the rest as is
            })
        );

        // Show the signature section
        setShowSignatureSection(true);
 
        // Disable the button
        setIsButtonDisabled(true);
    };

    const handleCancel = () => {
        navigate(-1); // Navigate to the previous page
    };

    return (
        <div className="w-[70%] h-screen mx-auto bg-white flex flex-col shadow-lg">
            {/* Header Section */}
            <div className="flex items-center justify-between border-b px-6 py-4">
                <h1 className="text-lg font-semibold">{name}</h1>
                <div className="flex items-center space-x-3">
                    <button className="text-gray-500 hover:text-gray-700">
                        <i className="fa fa-ellipsis-h" aria-hidden="true"></i>
                    </button>
                </div>
            </div>

            {/* Contract Status */}
            <div className="p-4 flex flex-col">
                <h2 className="text-sm font-medium text-black mb-3">Contract Status</h2>
                <div className="flex items-center justify-start space-x-2">
                    {statuses.map((status, index) => (
                        <React.Fragment key={index}>
                            <div key={index} className="flex items-center">
                                <div
                                    className={`flex items-center justify-center space-x-2 px-3 py-1 rounded-full ${status.state === "completed"
                                        ? "bg-[#007f8b] text-white"
                                        : status.state === "current"
                                            ? "bg-[#007f8b] text-white"
                                            : "bg-[#007f8b] text-white"
                                        }`}
                                >
                                    {/* Status Indicator Circle */}
                                    <div
                                        className={`w-5 h-5 rounded-full flex items-center justify-center ${status.state === "completed"
                                            ? "bg-white border-2 border-[#007f8b]"
                                            : status.state === "current"
                                                ? "bg-white"
                                                : "bg-gray-300"
                                            }`}
                                    >
                                        {status.state === "completed" ? (
                                            <VscCheck className="text-teal-500" size={14} />
                                        ) : status.state === "current" ? (
                                            <div className="w-2.5 h-2.5 bg-blue-500 rounded-full"></div>
                                        ) : null}
                                    </div>

                                    {/* Status Label */}
                                    <span className="text-sm font-medium">{status.label}</span>
                                </div>
                            </div>

                            {/* Connecting Pipe */}
                            {index !== statuses.length - 1 && (
                                <div
                                    className={`w-28 h-1 ${index + 1 < statuses.findIndex((s) => s.state === "pending")
                                        ? "bg-teal-500"
                                        : "bg-gray-300"
                                        }`}
                                ></div>
                            )}
                        </React.Fragment>
                    ))}
                </div>
            </div>

            {/* Signature Section */}
            {showSignatureSection && (
                <div className="p-6 bg-gray-100 rounded-lg mt-4 shadow">
                    <div className="flex justify-between items-center mb-2">
                        <h3 className="text-lg font-semibold text-black mb-4">Sign Status</h3>
                        <span className="text-sm text-gray-500">
                            1 out of 2 signatures collected
                        </span>
                    </div>
                    <div className="border rounded-md bg-white">
                        <div className="flex justify-between items-center px-4 py-3 border-b">
                            <span className="text-sm font-medium">Counterparty</span>
                            <span className="text-sm">John</span>
                            <span className="text-sm text-gray-500">Pending</span>
                            <BsClock className="text-[#007f8b]" />
                            <button className="text-[#007f8b] hover:text-gray-700">
                                <i className="fa fa-ellipsis-h" aria-hidden="true">...</i>
                            </button>
                        </div>
                        <div className="flex justify-between items-center px-4 py-3">
                            <span className="text-sm font-medium">Internal</span>
                            <span className="text-sm">Jack Shane</span>
                            <span className="text-sm text-gray-500">Pending</span>
                            <BsClock className="text-[#007f8b]" />
                            <button className="text-[#007f8b] hover:text-gray-700">
                                <i className="fa fa-ellipsis-h" aria-hidden="true">...</i>
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Content Section */}
            <div className="flex-1 p-6">
                <div className="border rounded-lg p-4 bg-gray-50 shadow">
                    <div className="flex justify-between items-center">
                        <p className="text-gray-700">Contract {name} - Version xx</p>
                        <div className="space-x-4 flex items-center">
                            <button className="px-3 py-1 border rounded-2xl text-sm hover:bg-gray-200">
                                Edit Document
                            </button>
                            <button className="px-3 py-1 border rounded-2xl text-sm hover:bg-gray-200">
                                Preview
                            </button>
                            <HiOutlineDownload className="text-2xl cursor-pointer text-[#013566]" />
                        </div>
                    </div>
                    <p className="text-sm text-gray-500 mt-2">Last Updated on 12th September</p>
                </div>
            </div>

            {/* Footer Section */}
            <div className="flex justify-between items-center border-t px-6 py-4">
                <button
                    className="text-gray-500 hover:bg-gray-100 px-4 py-2 rounded"
                    onClick={handleCancel}
                >
                    Cancel
                </button>
                <button
                    className={`px-4 py-2 rounded ${isButtonDisabled
                        ? "bg-gray-400 text-white cursor-not-allowed"
                        : "bg-blue-500 text-white hover:bg-blue-600"
                        }`}
                    onClick={handleSendForSignature}
                    disabled={isButtonDisabled}
                >
                    Send for Signature
                </button>
            </div>
        </div>
    );
};

export default ContractDetail;