import React from 'react'

const Contract = () => {
  const metrics = [
    {
      title: "Contract Value",
      value: "$2.58B",
      subtext: "No. of contracts - 2.1K",
    },
    {
      title: "Total Contracts",
      value: "2,034",
      subtext: null,
    },
    {
      title: "Under Review",
      value: "50",
      subtext: null,
    },
  ];

  return (
    <div className="flex flex-col gap-4">
      {metrics.map((metric, index) => (
        <div
          key={index}
          className="bg-white shadow-md w-64 p-4 rounded-3xl flex flex-col items-start space-y-2"
        >
          <p className="text-black text-base">{metric.title}</p>
          <h2 className="text-3xl font-bold text-blue-900">{metric.value}</h2>
          {metric.subtext && <p className="text-black text-sm">{metric.subtext}</p>}
        </div>
      ))}
    </div>
  )
}

export default Contract