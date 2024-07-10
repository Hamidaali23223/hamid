import React from "react";
import Searchbar from "@/components/Searchbar";
import Link from "next/link";
const Navbar = () => {
  return (
    <div className="relative mx-4 md:mx-8 lg:mx-16 xl:mx-28 md:pt-4">
      <div className="nav flex items-center gap-6">
        <Link href={"/"}>
          <div className="flex items-end gap-2 mb-7">
            <img
              src="./png-transparent-commercial-property-real-estate-computer-icons-business-others-angle-building-text-removebg-preview.png"
              className="md:w-10 w-8"
            />
            <h1 className="text-xl font-extrabold text-white w-44 cursor-pointer">
              Home <span className="text-orange-400">rantel</span>
            </h1>
          </div>
        </Link>
        <div className="hidden md:block w-full">
          <div className="flex justify-around w-full items-center">
            <ul className="flex gap-10 text-white text-lg font-medium">
              <li className="cursor-pointer">Buy</li>
              <li className="cursor-pointer">Rent</li>
              <li className="cursor-pointer md:hidden lg:block">About Us</li>
              <li className="cursor-pointer">Contact Us</li>
              <li className="cursor-pointer md:hidden lg:block">Blog</li>
            </ul>
            <Link href="./pages/addProperty/addProperty">
              <div className="flex items-center gap-2 bg-orange-400 p-2 rounded-md">
                <svg
                  className="h-4 w-4 text-white"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <circle cx="12" cy="12" r="10" />{" "}
                  <line x1="12" y1="8" x2="12" y2="16" />{" "}
                  <line x1="8" y1="12" x2="16" y2="12" />
                </svg>
                <button className="text-white text-sm">Add Property</button>
              </div>
            </Link>
          </div>
        </div>
      </div>
      <div className="flex lg:mt-28 md:mt-24 sm:mt-12 mt-6">
        <Searchbar />
      </div>
      <div className="grid justify-center mt-10 md:mt-4 lg:mt-0">
        <div className="bg-white flex gap-2 md:gap-10 p-4 px-6 rounded-xl shadow-md hover:shadow-lg">
          <div className="grid gap-2 justify-items-center w-16 md:w-28 hover:text-blue-800 cursor-pointer">
            <img
              src="./360_F_319728829_i5gYmunKSj3HUrr7se3YxbBgbn357eRg.jpg"
              alt=""
              className="lg:w-12 lg:h-10 md:w-10 md:h-8 w-8 h-6 hover:w-10 hover:h-8"
            />
            <h1 className="font-semibold text-xs md:text-base">Land & Plots</h1>
          </div>
          <hr className="bg-slate-500 w-[1px] h-20 hidden md:block" />
          <div className="grid gap-2 w-16 md:w-24 justify-items-center hover:text-blue-800 cursor-pointer">
            <img
              src="./images (1).png"
              alt=""
              className="lg:w-12 lg:h-10 md:w-10 md:h-8 w-8 h-6 hover:w-10 hover:h-8"
            />
            <h1 className="font-semibold text-xs md:text-base">Home</h1>
          </div>
          <hr className="bg-slate-500 w-[1px] h-20 hidden md:block" />
          <div className="grid w-16 md:w-24 gap-2 justify-items-center hover:text-blue-800 cursor-pointer">
            <img
              src="./61052d61445f1f33f2f469a9313d52f9.jpg"
              alt=""
              className="lg:w-12 lg:h-10 md:w-10 md:h-8 w-8 h-6 hover:w-10 hover:h-8"
            />
            <h1 className="font-semibold text-xs md:text-base">Commercial</h1>
          </div>
          <hr className="bg-slate-500 w-[1px] h-20 hidden md:block" />
          <div className="grid gap-2 w-16 md:w-24 justify-items-center hover:text-blue-800 cursor-pointer">
            <img
              src="./869687.png"
              alt=""
              className="lg:w-12 lg:h-10 md:w-10 md:h-8 w-8 h-6 hover:w-10 hover:h-8"
            />
            <h1 className="font-semibold text-xs md:text-base">Shops</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
