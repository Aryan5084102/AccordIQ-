import React from 'react'
import { MdArrowForwardIos } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
import {data} from '../table-content/tableData'

const TableMain = () => {
  const navigate = useNavigate();

  const TableHeader = ({ children }) => (
    <th className="px-4 py-2 text-sm font-medium text-gray-600">{children}</th>
  );

  return (
    <div className="overflow-x-auto h-56 overflow-y-auto   p-4 ">
      <table className="table-auto w-full text-left">
        <thead>
          <tr className="border-b">
            <TableHeader>NAME</TableHeader>
            <TableHeader>STATUS</TableHeader>
            <TableHeader>ASSIGNED</TableHeader>
            <TableHeader>UPLOADED</TableHeader>
            <TableHeader>ACTIVITY</TableHeader>
            <TableHeader>LAST UPDATED</TableHeader>
          </tr>
        </thead>
        <tbody className=''>
          {data.map((item, index) => (
            <tr
              key={index}
              className={`border-b ${index % 2 === 0 ? "bg-blue-50" : ""}`}

            >
              <td
                className="px-4 py-2 text-sm underline text-blue-500 font-medium cursor-pointer hover:underline"
                onClick={() => navigate(`/details/${item.name}`)}
              >
                {item.name}
              </td>

              <td className="px-4 py-2 flex items-center text-sm font-medium">
                <span
                  className={`w-2 h-2  rounded-full bg-${item.statusColor} mr-2`}
                ></span>
                {item.status}
              </td>

              <td className="px-4 py-2 text-sm">
                <div className="flex -space-x-0">
                  {item.assigned.map((initial, i) => (
                    <span
                      key={`assigned-${i}`}
                      className="w-6 h-6 bg-blue-500 text-white text-xs flex items-center justify-center font-bold rounded-full border-2 border-white"
                    >
                      {initial}
                    </span>
                  ))}
                  {item.unassigned.map((initial, i) => (
                    <span
                      key={`unassigned-${i}`}
                      className="w-6 h-6 bg-yellow-500 text-white text-xs flex items-center justify-center font-bold rounded-full border-2 border-white"
                    >
                      {initial}
                    </span>
                  ))}
                </div>
              </td>
              <td className="px-4 py-2 text-sm text-gray-600">{item.uploaded}</td>
              <td className="px-4 py-2 text-sm text-gray-600">{item.activity}</td>
              <td className="px-4 py-2 text-sm text-gray-600">{item.updated}</td>
              <td
                onClick={() => navigate(`/details/${item.name}`)}
              >
                <MdArrowForwardIos className='cursor-pointer' />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default TableMain