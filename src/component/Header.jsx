import React from 'react';
import { AiOutlineSearch } from "react-icons/ai";
import { IoMdNotifications, IoMdCheckboxOutline } from "react-icons/io";

const Header = ({
  onSearch,
  onUpload,
  profileImage = "https://img.freepik.com/free-vector/young-prince-vector-illustration_1308-174367.jpg?t=st=1734026207~exp=1734029807~hmac=36f166de5521e7b5016566b0cf9873854b94115ef4c373ee8074d730a1d2e71d&w=740",
}) => {
  return (
    <div className="flex items-center justify-between bg-gray-100 py-3 px-3 md:px-6">
      <div className="flex items-center w-full md:w-1/4">
        <div className="flex items-center bg-white shadow-md rounded-full px-3 py-2 w-full">
          <AiOutlineSearch className="text-[#013566] mr-2 text-xl" />
          <input
            type="text"
            placeholder="Search"
            className="outline-none w-full text-gray-500"
            onChange={onSearch}
          />
        </div>
      </div>

      <div className="flex items-center space-x-4 md:space-x-8">
        <button
          className="bg-[#0090ff] text-white px-4 py-2 rounded-full hover:bg-[#0077cc]"
          onClick={onUpload}
        >
          + Upload
        </button>

        <div className="cursor-pointer bg-white rounded-full flex items-center justify-center w-10 h-10">
          <IoMdNotifications className="text-[#013566] text-2xl hover:text-[#0077cc]" />
        </div>

        <div className="cursor-pointer bg-white rounded-full flex items-center justify-center w-10 h-10">
          <IoMdCheckboxOutline className="text-[#013566] text-2xl hover:text-[#0077cc]" />
        </div>

        <img
          src={profileImage}
          alt="Profile"
          className="w-10 h-10 rounded-full cursor-pointer border-2 border-[#0090ff]"
        />
      </div>
    </div>
  );
};

export default Header;
