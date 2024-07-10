"use client";
import React, { useState } from "react";

const PropertyTypeDropdown = (props: any) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen1, setIsOpen1] = useState(false);
  const [show, setshow] = useState(true);
  const [show1, setshow1] = useState(true);
  const [show2, setshow2] = useState(false);
  const [value, setValue] = useState("Houses");
  const [value1, setValue1] = useState("Home");

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdown1 = () => {
    setIsOpen1(!isOpen1);
  };

  const closeDropdown1 = (value: React.SetStateAction<string>) => {
    if (value === "Home") {
      setshow(true);
      setValue("Houses");
    } else setshow(false);
    if (value === "Commercial") {
      setshow1(true);
      setValue("Office");
    } else setshow1(false);
    if (value === "Land & Plots") {
      setshow2(true);
      setValue("Residential Plot");
    } else setshow2(false);
    setIsOpen(false);
    setValue1(value);
  };

  const closeDropdown = (value: React.SetStateAction<string>) => {
    setIsOpen1(false);
    setValue(value);
  };

  return (
    <div className="flex justify-between gap-6">
      <div className="grid gap-2 w-full relative">
        <label className="">Property Type</label>
        <div
          className=" flex px-4 h-[52px] border rounded-md border-gray-400 bg-white font-medium gap-8 items-center justify-between"
          onClick={toggleDropdown}
        >
          {value1}
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
          <div className="absolute w-full mt-24 p-3 shadow-lg border z-10 bg-white rounded-sm">
            <ul>
              <li
                onClick={() => closeDropdown1("Home")}
                className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                Home
              </li>
              <li
                onClick={() => closeDropdown1("Commercial")}
                className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                Commercial
              </li>
              <li
                onClick={() => closeDropdown1("Land & Plots")}
                className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                Land & Plots
              </li>
            </ul>
          </div>
        )}
      </div>
      <div className="grid gap-2 w-full relative">
        <label>{value1} Type</label>
        <div
          className=" flex px-4 h-[52px] border rounded-md border-gray-400 bg-white font-medium gap-8 items-center justify-between"
          onClick={toggleDropdown1}
        >
          {value}
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
          <div>
            {show && (
              <div className="absolute w-full p-3 shadow-lg border z-10 bg-white rounded-sm">
                <ul>
                  <li
                    onClick={() => closeDropdown("Houses")}
                    className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Houses
                  </li>
                  <li
                    onClick={() => closeDropdown("Flat")}
                    className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Flat
                  </li>
                  <li
                    onClick={() => closeDropdown("Upper Portion")}
                    className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Upper Portion
                  </li>
                  <li
                    onClick={() => closeDropdown("Lower Portion")}
                    className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Lower Portion
                  </li>
                  <li
                    onClick={() => closeDropdown("Farm House")}
                    className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Farm House
                  </li>
                  <li
                    onClick={() => closeDropdown("Room")}
                    className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Room
                  </li>
                  <li
                    onClick={() => closeDropdown("Penthouse")}
                    className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Penthouse
                  </li>
                </ul>
              </div>
            )}
            {show1 && (
              <div className="absolute w-full p-3 shadow-lg border z-10 bg-white rounded-sm">
                <ul>
                  <li
                    onClick={() => closeDropdown("Office")}
                    className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Office
                  </li>
                  <li
                    onClick={() => closeDropdown("Shop")}
                    className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Shop
                  </li>
                  <li
                    onClick={() => closeDropdown("Warehouse")}
                    className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Warehouse
                  </li>
                  <li
                    onClick={() => closeDropdown("Factory")}
                    className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Factory
                  </li>
                  <li
                    onClick={() => closeDropdown("Building")}
                    className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Building
                  </li>
                  <li
                    onClick={() => closeDropdown("Other")}
                    className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Other
                  </li>
                </ul>
              </div>
            )}
            {show2 && (
              <div className="absolute w-full p-3 shadow-lg border z-10 bg-white rounded-sm">
                <ul>
                  <li
                    onClick={() => closeDropdown("Residential Plot")}
                    className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Residential Plot
                  </li>
                  <li
                    onClick={() => closeDropdown("Commercial Plot")}
                    className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Commercial Plot
                  </li>
                  <li
                    onClick={() => closeDropdown("Agricultural Land")}
                    className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Agricultural Land
                  </li>
                  <li
                    onClick={() => closeDropdown("Industrial Land")}
                    className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Industrial Land
                  </li>
                  <li
                    onClick={() => closeDropdown("Plot File")}
                    className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Plot File
                  </li>
                  <li
                    onClick={() => closeDropdown("Plot Form")}
                    className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Plot Form
                  </li>
                </ul>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default PropertyTypeDropdown;
