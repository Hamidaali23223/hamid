"use client";
import React, { useState } from "react";

const Filter = () => {
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [isOpen4, setIsOpen4] = useState(false);

  const toggleDropdown1 = () => {
    setIsOpen1(!isOpen1);
    setIsOpen2(false);
    setIsOpen3(false);
    setIsOpen4(false);
  };
  const toggleDropdown2 = () => {
    setIsOpen2(!isOpen2);
    setIsOpen1(false);
    setIsOpen3(false);
    setIsOpen4(false);
  };
  const toggleDropdown3 = () => {
    setIsOpen3(!isOpen3);
    setIsOpen1(false);
    setIsOpen2(false);
    setIsOpen4(false);
  };
  const toggleDropdown4 = () => {
    setIsOpen4(!isOpen4);
    setIsOpen1(false);
    setIsOpen2(false);
    setIsOpen3(false);
  };

  const closeDropdown = () => {
    setIsOpen1(false);
    setIsOpen2(false);
    setIsOpen3(false);
    setIsOpen4(false);
  };

  return (
    <div className="gap-3 w-full grid py-2 lg:flex">
      <div className="sm:flex grid gap-2 w-full">
        <div className="relative inline-block sm:w-full">
          <div
            className="flex px-4 bg-[#EDEDED] justify-between h-[52px] rounded-md font-medium gap-8 items-center cursor-default"
            onClick={toggleDropdown1}
          >
            Countery
            <svg
              className="w-2.5 h-2.5 ml-2.5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m1 1 4 4 4-4"
              />
            </svg>
          </div>

          {isOpen1 && (
            <div className="absolute mt-2 w-full p-2 shadow-lg border z-10 bg-white rounded-sm">
              <input
                type="text"
                placeholder="Enter Locations"
                className="text-sm hover:bg-gray-50 rounded-sm p-1 w-full outline-blue-400"
              />
              <hr className="my-2" />
              <ul>
                <li
                  onClick={closeDropdown}
                  className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Lahore
                </li>
                <li
                  onClick={closeDropdown}
                  className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Multan
                </li>
                <li
                  onClick={closeDropdown}
                  className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Islamanbad
                </li>
              </ul>
            </div>
          )}
        </div>
        <div className="relative inline-block sm:w-full">
          <div
            className="flex px-4 h-[52px] justify-between bg-[#EDEDED] rounded-md font-medium gap-8 items-center cursor-default"
            onClick={toggleDropdown2}
          >
            Area/location
            <svg
              className="w-2.5 h-2.5 ml-2.5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m1 1 4 4 4-4"
              />
            </svg>
          </div>

          {isOpen2 && (
            <div className="absolute mt-2 w-full p-2 shadow-lg border z-10 bg-white rounded-sm">
              <input
                type="text"
                placeholder="Enter Locations"
                className="text-sm hover:bg-gray-50 rounded-sm p-1 w-full outline-blue-400"
              />
              <hr className="my-2" />
              <ul>
                <li
                  onClick={closeDropdown}
                  className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Lahore
                </li>
                <li
                  onClick={closeDropdown}
                  className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Multan
                </li>
                <li
                  onClick={closeDropdown}
                  className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Islamanbad
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
      <div className="sm:flex grid gap-2 w-full">
        <div className="relative inline-block sm:w-full">
          <div
            className="flex px-4 h-[52px] justify-between bg-[#EDEDED] rounded-md font-medium gap-8 items-center cursor-default"
            onClick={toggleDropdown3}
          >
            City
            <svg
              className="w-2.5 h-2.5 ml-2.5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m1 1 4 4 4-4"
              />
            </svg>
          </div>

          {isOpen3 && (
            <div className="absolute mt-2 w-full p-2 shadow-lg border z-10 bg-white rounded-sm">
              <input
                type="text"
                placeholder="Enter Locations"
                className="text-sm hover:bg-gray-50 rounded-sm p-1 w-full outline-blue-400"
              />
              <hr className="my-2" />
              <ul>
                <li
                  onClick={closeDropdown}
                  className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Lahore
                </li>
                <li
                  onClick={closeDropdown}
                  className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Multan
                </li>
                <li
                  onClick={closeDropdown}
                  className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Islamanbad
                </li>
              </ul>
            </div>
          )}
        </div>
        <div className="relative inline-block sm:w-full">
          <div
            className="flex px-4 h-[52px] justify-between bg-[#EDEDED] rounded-md font-medium gap-8 items-center cursor-default"
            onClick={toggleDropdown4}
          >
            Property type
            <svg
              className="w-2.5 h-2.5 ml-2.5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m1 1 4 4 4-4"
              />
            </svg>
          </div>

          {isOpen4 && (
            <div className="absolute mt-2 w-full p-2 shadow-lg border z-10 bg-white rounded-sm">
              <input
                type="text"
                placeholder="Enter Locations"
                className="text-sm hover:bg-gray-50 rounded-sm p-1 w-full outline-blue-400"
              />
              <hr className="my-2" />
              <ul>
                <li
                  onClick={closeDropdown}
                  className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Lahore
                </li>
                <li
                  onClick={closeDropdown}
                  className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Multan
                </li>
                <li
                  onClick={closeDropdown}
                  className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Islamanbad
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Filter;
