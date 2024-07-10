"use client";
import React from "react";
import { useState } from "react";

const Searchbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [isOpen4, setIsOpen4] = useState(false);
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
    setIsOpen1(false);
    setIsOpen2(false);
    setIsOpen3(false);
    setIsOpen4(false);
  };
  const toggleDropdown1 = () => {
    setIsOpen1(!isOpen1);
    setIsOpen(false);
    setIsOpen2(false);
    setIsOpen3(false);
    setIsOpen4(false);
  };
  const toggleDropdown2 = () => {
    setIsOpen2(!isOpen2);
    setIsOpen(false);
    setIsOpen1(false);
    setIsOpen3(false);
    setIsOpen4(false);
  };
  const toggleDropdown3 = () => {
    setIsOpen3(!isOpen3);
    setIsOpen1(false);
    setIsOpen2(false);
    setIsOpen(false);
    setIsOpen4(false);
  };
  const toggleDropdown4 = () => {
    setIsOpen4(!isOpen4);
    setIsOpen1(false);
    setIsOpen2(false);
    setIsOpen3(false);
    setIsOpen(false);
  };

  const closeDropdown = () => {
    setIsOpen(false);
  };

  const [show, setShow] = useState(false);
  const divShow = () => {
    setShow(true);
  };
  return (
    <div className="grid gap-16 w-full">
      <h1 className="text-lg sm:text-3xl font-extrabold flex justify-center md:justify-start md:text-4xl text-white md:font-bold">
        Rent and Buy Properties in Pakistan
      </h1>
      <div className="grid gap-8">
        <div className="flex md:hidden gap-4 justify-center">
          <div className="bg-orange-500 p-2 w-28 grid justify-center rounded-md text-lg font-semibold text-white">
            Rent
          </div>
          <div className="bg-orange-500 p-2 w-28 grid justify-center rounded-md text-lg font-semibold text-white cursor-not-allowed">
            Buy
          </div>
        </div>
        <div className="hidden md:block">
          <div className="flex">
            <div className="bg-blue-600 p-2 w-28 grid justify-center rounded-l-md text-lg font-semibold text-white">
              Rent
            </div>
            <div className="bg-black bg-opacity-50 p-2 w-28 grid justify-center rounded-r-md text-lg font-semibold text-white cursor-not-allowed">
              Buy
            </div>
          </div>
        </div>

        <div className="hidden md:block h-48">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <div className="relative inline-block" onClick={divShow}>
                <div
                  className="flex px-4 h-[52px] bg-white rounded-md font-medium gap-8 items-center cursor-default"
                  onClick={toggleDropdown}
                >
                  Bahawalpur
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

                {isOpen && (
                  <div className="absolute z-50 mt-2 w-full p-2 shadow-md bg-white rounded-sm">
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
              <div className="flex items-center w-full rounded-md p-2 bg-white gap-3">
                <svg
                  className="h-6 w-6 text-slate-500"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <input
                  onClick={divShow}
                  type="Search"
                  placeholder="Enter Locations"
                  className="text-lg p-1 w-full text-slate-700 outline-none"
                />
              </div>
              <button className="text-white text-lg font-semibold bg-orange-500 p-3 rounded-md w-32">
                Search
              </button>
            </div>
            {show && (
              <div className="gap-3 w-full grid py-2 md:flex">
                <div className="sm:flex grid gap-2 w-full">
                  <div className="relative inline-block sm:w-full">
                    <div
                      className="flex px-4 bg-white justify-between h-[52px] rounded-md font-medium gap-8 items-center cursor-default"
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
                      className="flex px-4 h-[52px] justify-between bg-white rounded-md font-medium gap-8 items-center cursor-default"
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
                      className="flex px-4 h-[52px] justify-between bg-white rounded-md font-medium gap-8 items-center cursor-default"
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
                      className="flex px-4 h-[52px] justify-between bg-white rounded-md font-medium gap-8 items-center cursor-default"
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
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Searchbar;
