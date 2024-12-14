import React from 'react';

const Task = () => {
  const tasks = [
    {
      title: "Request Ticket",
      contract: "Contract xyz",
      dateTime: "10th August 12:00",
      status: "completed",
    },
    {
      title: "Request Ticket",
      contract: "Contract xyz",
      dateTime: "10th August 12:00",
      status: "completed",
    },
    {
      title: "Signature Pending",
      contract: "Contract xyz",
      dateTime: "10th August 12:00",
      status: "pending",
    },
  ];

  return (
    <div className="bg-white p-3 rounded-3xl shadow-lg w-full max-w-md h-[50vh]">
      <h2 className="text-xl font-medium text-black ml-2 mb-2">Task Log</h2>
      <div className="h-[calc(100%-3rem)] overflow-y-auto overflow-x-hidden">
        {tasks.map((task, index) => (
          <div
            key={index}
            className="bg-blue-50 w-72 py-2 mx-3 rounded-lg shadow-md flex justify-between items-center mb-2"
          >
            <div className="p-1">
              <h3 className="text-lg font-medium text-black">{task.title}</h3>
              <p className="text-sm text-black mb-3">{task.contract}</p>
              <p className="text-sm text-black">{task.dateTime}</p>
            </div>
            <div>
              {task.status === "completed" ? (
                <div className="bg-white cursor-pointer mr-2 rounded-full flex items-center justify-center w-10 h-10">
                  <span className="w-6 h-6 text-2xl flex items-center justify-center text-[#013566] font-bold">✓</span>
                </div>
              ) : (
                <div className="bg-white cursor-pointer mr-2 rounded-full flex items-center justify-center w-10 h-10">
                  <span className="w-6 h-6 flex items-center text-2xl justify-center text-yellow-500 font-bold">!</span>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Task;
