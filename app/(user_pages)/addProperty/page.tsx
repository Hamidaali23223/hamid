"use client";
import App from "@/components/imageUpload";
import React, { ChangeEvent, useEffect, useRef, useState } from "react";
import { FaBed } from "react-icons/fa";
import { FaBath } from "react-icons/fa";

const AddProperty = () => {
  // tabs
  const [openTab, setOpenTab] = React.useState(1);

  // dropdowns
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  // show and hide
  const [hide, setHide] = useState(true);
  const [hide1, setHide1] = useState(true);
  const [hide2, setHide2] = useState(false);
  const [show, setshow] = useState(true);
  const [show1, setshow1] = useState(true);
  const [show2, setshow2] = useState(false);

  // step 1
  const [PropertyType, setPropertyType] = useState("Home");
  const [PropertyTypetype, setPropertyTypetype] = useState("Houses");
  const [City, setCity] = useState("Bahawalpur");
  const [Location, setLocation] = useState("");
  const [Town, setTown] = useState("");
  const [Street, setStreet] = useState("");

  // step 2
  const [bed, setBed] = useState("");
  const [bath, setBath] = useState("");
  const [SelectPurpose, setSelectPurpose] = useState("Buy");
  const [Price, setPrice] = useState("");
  const [AreaSize, setAreaSize] = useState("");
  const [MonthlyRent, setMonthlyRent] = useState("");
  const [Installmentavailable, setInstallmentavailable] = useState("");
  const [Addadditionalfeatures, setAddadditionalfeatures] = useState("");
  const [Marla, setMarla] = useState("");
  const [pkr, setPkr] = useState("");
  const [pkr1, setPkr1] = useState("");

  // step 3
  const [Title, setTitle] = useState("");
  const [Discription, setDiscription] = useState("");
  const [Email, setEmail] = useState("");
  const [PhoneNumber1, setPhoneNumber1] = useState("");
  const [PhoneNumber2, setPhoneNumber2] = useState("");
  const [WhatsappNumber, setWhatsappNumber] = useState("");
  // main function
  const abc = () => {
    let data = {
      PropertyType,
      PropertyTypetype,
      City,
      SelectPurpose,
      Location,
      Town,
      Street,
      bed,
      bath,
      Price,
      AreaSize,
      MonthlyRent,
      Installmentavailable,
      Addadditionalfeatures,
      Marla,
      pkr,
      pkr1,
      Title,
      Discription,
      Email,
      PhoneNumber1,
      PhoneNumber2,
      WhatsappNumber,
    };
    fetch("http://localhost:3000/api/submit", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  // const btnRef = useRef<HTMLDivElement>(null);

  // useEffect(() => {
  //   const abc = (e: MouseEvent) => {
  //     if (btnRef.current && !btnRef.current.contains(e.target as Node)) {
  //       setIsOpen(false);
  //       setValue1(value);
  //     }
  //   };
  //   document.body.addEventListener("click", abc);
  // }, []);

  // dropdown
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  // dropdown 1
  const toggleDropdown1 = () => {
    setIsOpen1(!isOpen1);
  };

  // dropdown 2
  const toggleDropdown2 = () => {
    setIsOpen2(!isOpen2);
  };

  // dropdown 3
  const toggleDropdown3 = () => {
    setIsOpen3(!isOpen3);
  };

  const closeDropdown = (value: React.SetStateAction<string>) => {
    if (value === "Home") {
      setshow(true);
      setPropertyTypetype("Houses");
      setHide(true);
    } else setshow(false);
    if (value === "Commercial") {
      setshow1(true);
      setPropertyTypetype("Office");
      setHide(false);
    } else setshow1(false);
    if (value === "Land & Plots") {
      setshow2(true);
      setPropertyTypetype("Residential Plot");
      setHide(false);
    } else setshow2(false);
    setIsOpen(false);
    setPropertyType(value);
  };
  const closeDropdown1 = (value: React.SetStateAction<string>) => {
    setIsOpen1(false);
    setPropertyTypetype(value);
  };
  const closeDropdown2 = (value: React.SetStateAction<string>) => {
    setIsOpen2(false);
    setCity(value);
  };
  const closeDropdown3 = (value: React.SetStateAction<string>) => {
    if (value === "Buy") {
      setHide1(true);
    } else setHide1(false);
    if (value === "Rent") {
      setHide2(true);
    } else setHide2(false);
    setIsOpen3(false);
    setSelectPurpose(value);
  };
  return (
    <div className="mx-28">
      <div className="grid items-center h-screen">
        <div className="flex items-center gap-4">
          <div
            className={
              openTab === 1
                ? "text-orange-600 underline underline-offset-8 text-lg font-semibold cursor-pointer"
                : "text-slate-600 text-lg font-semibold cursor-pointer"
            }
            onClick={(e) => {
              e.preventDefault();
              setOpenTab(1);
            }}
          >
            Step 1
          </div>
          <div>
            <div
              className={
                openTab === 2
                  ? "text-orange-600 underline underline-offset-8 text-lg font-semibold cursor-pointer"
                  : "text-slate-600 text-lg font-semibold cursor-pointer"
              }
              onClick={(e) => {
                e.preventDefault();
                setOpenTab(2);
              }}
              data-toggle="tab"
              role="tablist"
            >
              Step 2
            </div>
          </div>
          <div>
            <div
              className={
                openTab === 3
                  ? "text-orange-600 underline underline-offset-8 text-lg font-semibold cursor-pointer"
                  : "text-slate-600 text-lg font-semibold cursor-pointer"
              }
              onClick={(e) => {
                e.preventDefault();
                setOpenTab(3);
              }}
              data-toggle="tab"
              role="tablist"
            >
              step 3
            </div>
          </div>
          <div>
            <div
              className={
                openTab === 4
                  ? "text-orange-600 underline underline-offset-8 text-lg font-semibold cursor-pointer"
                  : "text-slate-600 text-lg font-semibold cursor-pointer"
              }
              onClick={(e) => {
                e.preventDefault();
                setOpenTab(4);
              }}
              data-toggle="tab"
              role="tablist"
            >
              step 4
            </div>
          </div>
        </div>
        <div className="grid gap-10">
          <h1 className="text-3xl">Add new property</h1>
          {/* tab 1 */}
          {openTab && (
            <div className={openTab === 1 ? "block" : "hidden"}>
              <div className="grid gap-6">
                <div className="flex justify-between gap-6">
                  <div className="grid gap-2 w-full relative">
                    <label className="">Property Type</label>
                    <div
                      className=" flex px-4 h-[52px] border rounded-md border-gray-400 bg-white font-medium gap-8 items-center justify-between"
                      onClick={toggleDropdown}
                    >
                      {PropertyType}
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
                            onClick={() => closeDropdown("Home")}
                            className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          >
                            Home
                          </li>
                          <li
                            onClick={() => closeDropdown("Commercial")}
                            className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          >
                            Commercial
                          </li>
                          <li
                            onClick={() => closeDropdown("Land & Plots")}
                            className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          >
                            Land & Plots
                          </li>
                        </ul>
                      </div>
                    )}
                  </div>
                  <div className="grid gap-2 w-full relative">
                    <label>{PropertyType} Type</label>
                    <div
                      className=" flex px-4 h-[52px] border rounded-md border-gray-400 bg-white font-medium gap-8 items-center justify-between"
                      onClick={toggleDropdown1}
                    >
                      {PropertyTypetype}
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
                                onClick={() => closeDropdown1("Houses")}
                                className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                              >
                                Houses
                              </li>
                              <li
                                onClick={() => closeDropdown1("Flat")}
                                className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                              >
                                Flat
                              </li>
                              <li
                                onClick={() => closeDropdown1("Upper Portion")}
                                className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                              >
                                Upper Portion
                              </li>
                              <li
                                onClick={() => closeDropdown1("Lower Portion")}
                                className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                              >
                                Lower Portion
                              </li>
                              <li
                                onClick={() => closeDropdown1("Farm House")}
                                className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                              >
                                Farm House
                              </li>
                              <li
                                onClick={() => closeDropdown1("Room")}
                                className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                              >
                                Room
                              </li>
                              <li
                                onClick={() => closeDropdown1("Penthouse")}
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
                                onClick={() => closeDropdown1("Office")}
                                className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                              >
                                Office
                              </li>
                              <li
                                onClick={() => closeDropdown1("Shop")}
                                className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                              >
                                Shop
                              </li>
                              <li
                                onClick={() => closeDropdown1("Warehouse")}
                                className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                              >
                                Warehouse
                              </li>
                              <li
                                onClick={() => closeDropdown1("Factory")}
                                className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                              >
                                Factory
                              </li>
                              <li
                                onClick={() => closeDropdown1("Building")}
                                className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                              >
                                Building
                              </li>
                              <li
                                onClick={() => closeDropdown1("Other")}
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
                                onClick={() =>
                                  closeDropdown1("Residential Plot")
                                }
                                className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                              >
                                Residential Plot
                              </li>
                              <li
                                onClick={() =>
                                  closeDropdown1("Commercial Plot")
                                }
                                className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                              >
                                Commercial Plot
                              </li>
                              <li
                                onClick={() =>
                                  closeDropdown1("Agricultural Land")
                                }
                                className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                              >
                                Agricultural Land
                              </li>
                              <li
                                onClick={() =>
                                  closeDropdown1("Industrial Land")
                                }
                                className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                              >
                                Industrial Land
                              </li>
                              <li
                                onClick={() => closeDropdown1("Plot File")}
                                className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                              >
                                Plot File
                              </li>
                              <li
                                onClick={() => closeDropdown1("Plot Form")}
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
                {/* 2 */}
                <div className="flex justify-between gap-6 w-full">
                  <div className="relative grid gap-2 w-full">
                    <label>City</label>
                    <div
                      className=" flex px-4 h-[52px] border rounded-md border-gray-400 bg-white font-medium gap-8 items-center justify-between"
                      onClick={toggleDropdown2}
                      // ref={btnRef}
                    >
                      {City}
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
                      <div className="absolute w-full mt-24 p-2 shadow-lg border z-10 bg-white rounded-sm">
                        <input
                          type="text"
                          placeholder="Enter Locations"
                          className="text-sm hover:bg-gray-50 rounded-sm p-1 w-full outline-blue-400"
                        />
                        <hr className="my-2" />
                        <ul>
                          <li
                            onClick={() => closeDropdown2("Bahawalpur")}
                            className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          >
                            Bahawalpur
                          </li>
                          <li
                            onClick={() => closeDropdown2("Lahore")}
                            className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          >
                            Lahore
                          </li>
                          <li
                            onClick={() => closeDropdown2("Multan")}
                            className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          >
                            Multan
                          </li>
                          <li
                            onClick={() => closeDropdown2("Islamanbad")}
                            className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          >
                            Islamanbad
                          </li>
                        </ul>
                      </div>
                    )}
                  </div>
                  <div className="grid gap-2 w-full">
                    <label>Location</label>
                    <input
                      type="text"
                      className="p-2 text-lg border rounded-md border-gray-400 outline-blue-800"
                      placeholder="City"
                      value={Location}
                      onChange={(e) => setLocation(e.target.value)}
                    />
                  </div>
                </div>
                {/* 3 */}
                <div className="flex justify-between gap-6 w-full">
                  <div className="grid gap-2 w-full">
                    <label>Town</label>
                    <input
                      type="text"
                      className="p-2 text-lg border rounded-md border-gray-400 outline-blue-800"
                      placeholder="City"
                      value={Town}
                      onChange={(e) => setTown(e.target.value)}
                    />
                  </div>
                  <div className="grid gap-2 w-full">
                    <label>Street</label>
                    <input
                      type="text"
                      className="p-2 text-lg border rounded-md border-gray-400 outline-blue-800"
                      placeholder="City"
                      value={Street}
                      onChange={(e) => setStreet(e.target.value)}
                    />
                  </div>
                </div>
                <button
                  className="bg-red-500 p-3 rounded-md"
                  type="submit"
                  onClick={(e) => {
                    e.preventDefault();
                    setOpenTab(2);
                  }}
                >
                  Submit
                </button>
              </div>
            </div>
          )}
          {/* tab 2 */}
          {openTab && (
            <div className={openTab === 2 ? "block" : "hidden"}>
              <div className="grid gap-6">
                {/* 1 */}
                {hide && (
                  <div className="flex justify-between gap-6">
                    <div className="grid gap-2 w-full">
                      <div className="flex items-center gap-2">
                        <FaBed />
                        <label className="">Bed</label>
                      </div>
                      <input
                        type="number"
                        max={10}
                        min={1}
                        defaultValue={1}
                        className="p-2 text-lg border rounded-md border-gray-400 outline-blue-800"
                        placeholder="Property Name"
                        value={bed}
                        onChange={(e) => setBed(e.target.value)}
                      />
                    </div>
                    <div className="grid gap-2 w-full">
                      <div className="flex items-center gap-2">
                        <FaBath />
                        <label className="">Bath</label>
                      </div>
                      <input
                        type="number"
                        max={10}
                        min={1}
                        defaultValue={1}
                        className="p-2 text-lg border rounded-md border-gray-400 outline-blue-800"
                        placeholder="Property Name"
                        value={bath}
                        onChange={(e) => setBath(e.target.value)}
                      />
                    </div>
                  </div>
                )}
                {/* 2 */}
                <div className="flex justify-between gap-6 w-full">
                  <div className="grid gap-2 w-full relative">
                    <label>Select Purpose</label>
                    <div
                      className=" flex px-4 h-[52px] border rounded-md border-gray-400 bg-white font-medium gap-8 items-center justify-between"
                      onClick={toggleDropdown3}
                    >
                      {SelectPurpose}
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
                      <div className="absolute w-full mt-24 p-3 shadow-lg border z-10 bg-white rounded-sm">
                        <ul>
                          <li
                            onClick={() => closeDropdown3("Buy")}
                            className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          >
                            Buy
                          </li>
                          <li
                            onClick={() => closeDropdown3("Rent")}
                            className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          >
                            Rent
                          </li>
                        </ul>
                      </div>
                    )}
                  </div>
                  {hide1 && (
                    <div className="grid gap-2 w-full">
                      <label>Price</label>
                      <div className="flex">
                        <input
                          type="text"
                          className="w-full p-2 text-lg border rounded-md border-gray-400 outline-blue-800"
                          placeholder="Monthly Rent"
                          value={Price}
                          onChange={(e) => setPrice(e.target.value)}
                        />
                        <select
                          className="p-3 border rounded-md border-gray-400 outline-blue-800"
                          value={pkr}
                          onChange={(e) => setPkr(e.target.value)}
                        >
                          <option value="Marla">PKR</option>
                          <option value="Feet">Dollar</option>
                          <option value="Kanal">Euro</option>
                        </select>
                      </div>
                    </div>
                  )}
                  {hide2 && (
                    <div className="grid gap-2 w-full">
                      <label>Monthly Rent</label>
                      <div className="flex">
                        <input
                          type="text"
                          className="w-full p-2 text-lg border rounded-md border-gray-400 outline-blue-800"
                          placeholder="Monthly Rent"
                          value={MonthlyRent}
                          onChange={(e) => setMonthlyRent(e.target.value)}
                        />
                        <select
                          className="p-3 border rounded-md border-gray-400 outline-blue-800"
                          value={pkr1}
                          onChange={(e) => setPkr1(e.target.value)}
                        >
                          <option value="Marla">PKR</option>
                          <option value="Feet">Dollar</option>
                          <option value="Kanal">Euro</option>
                        </select>
                      </div>
                    </div>
                  )}
                </div>
                {/* 3 */}
                <div className="flex justify-between gap-6 w-full">
                  <div className="grid gap-2 w-full">
                    <label>Area Size</label>
                    <div className="flex">
                      <input
                        type="text"
                        className="w-full p-2 text-lg border rounded-md border-gray-400 outline-blue-800"
                        placeholder="Area in feet"
                        value={AreaSize}
                        onChange={(e) => setAreaSize(e.target.value)}
                      />
                      <select
                        className="p-3 border rounded-md border-gray-400 outline-blue-800"
                        value={Marla}
                        onChange={(e) => setMarla(e.target.value)}
                      >
                        <option value="Marla">Marla</option>
                        <option value="Feet">Feet</option>
                        <option value="Kanal">Kanal</option>
                        <option value=">Sq. Yd.">Sq. Yd.</option>
                      </select>
                    </div>
                  </div>
                  {hide1 && (
                    <div className="flex gap-2 w-full justify-between items-center">
                      <div className="grid gap-1">
                        <label className="text-xl font-semibold">
                          Installment available
                        </label>
                        <p className="text-gray-500">
                          Enable if listing is available on installments
                        </p>
                      </div>
                      <input
                        type="checkbox"
                        className="p-2 w-6 h-6 border rounded-md border-gray-400 outline-blue-800"
                        value={Installmentavailable}
                        onChange={(e) =>
                          setInstallmentavailable(e.target.value)
                        }
                      />
                    </div>
                  )}
                  {hide2 && (
                    <div className="grid gap-2 w-full">
                      <label>Add additional features</label>
                      <input
                        type="text"
                        className="p-2 text-lg border rounded-md border-gray-400 outline-blue-800"
                        placeholder="Add additional features"
                        value={Addadditionalfeatures}
                        onChange={(e) =>
                          setAddadditionalfeatures(e.target.value)
                        }
                      />
                    </div>
                  )}
                </div>
                <button
                  className="bg-red-500 p-3 rounded-md"
                  type="submit"
                  onClick={(e) => {
                    e.preventDefault();
                    setOpenTab(3);
                  }}
                >
                  Submit
                </button>
              </div>
            </div>
          )}
          {/* tab 3 */}
          {openTab && (
            <div className={openTab === 3 ? "block" : "hidden"}>
              <div className="grid gap-6">
                {/* 1 */}
                <div className="flex justify-between gap-6">
                  <div className="grid gap-2 w-full">
                    <label className="">Title</label>
                    <input
                      type="text"
                      className="p-2 text-lg border rounded-md border-gray-400 outline-blue-800"
                      placeholder="Property Name"
                      value={Title}
                      onChange={(e) => setTitle(e.target.value)}
                    />
                  </div>
                  <div className="grid gap-2 w-full">
                    <label className="">Discription</label>

                    <input
                      type="text"
                      className="p-2 text-lg border rounded-md border-gray-400 outline-blue-800"
                      placeholder="Discription"
                      value={Discription}
                      onChange={(e) => setDiscription(e.target.value)}
                    />
                  </div>
                </div>

                {/* 2 */}
                <div className="flex justify-between gap-6 w-full">
                  <div className="grid gap-2 w-full">
                    <label>Email</label>
                    <input
                      type="email"
                      className="w-full p-2 text-lg border rounded-md border-gray-400 outline-blue-800"
                      placeholder="example@gmail.com"
                      value={Email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="grid gap-2 w-full">
                    <label>Phone Number 1</label>
                    <input
                      type="text"
                      defaultValue={"+92"}
                      className="w-full p-2 text-lg border rounded-md border-gray-400 outline-blue-800"
                      placeholder="Phone Number"
                      value={PhoneNumber1}
                      onChange={(e) => setPhoneNumber1(e.target.value)}
                    />
                  </div>
                </div>
                {/* 3 */}
                <div className="flex justify-between gap-6 w-full">
                  <div className="grid gap-2 w-full">
                    <label>Phone Number 2</label>
                    <input
                      type="text"
                      defaultValue={"+92"}
                      className="w-full p-2 text-lg border rounded-md border-gray-400 outline-blue-800"
                      placeholder="Phone Number"
                      value={PhoneNumber2}
                      onChange={(e) => setPhoneNumber2(e.target.value)}
                    />
                  </div>
                  <div className="grid gap-2 w-full">
                    <label>Whatsapp Number</label>
                    <input
                      type="text"
                      defaultValue={"+92"}
                      className="w-full p-2 text-lg border rounded-md border-gray-400 outline-blue-800"
                      placeholder="example@gmail.com"
                      value={WhatsappNumber}
                      onChange={(e) => setWhatsappNumber(e.target.value)}
                    />
                  </div>
                </div>
                <button
                  className="bg-red-500 p-3 rounded-md"
                  type="submit"
                  onClick={(e) => {
                    e.preventDefault();
                    setOpenTab(4);
                  }}
                >
                  Submit
                </button>
              </div>
            </div>
          )}
          {/* tab 4 */}
          {openTab && (
            <div className={openTab === 4 ? "block" : "hidden"}>
              <div className="grid gap-12">
                <App />

                <button
                  className="bg-red-500 p-3 rounded-md w-full"
                  type="submit"
                  onClick={(e) => {
                    e.preventDefault();
                    setOpenTab(4);
                    abc();
                  }}
                >
                  Submit
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default AddProperty;
