import React from "react";
import { FaSquarePhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="lg:flex gap-10 bg-slate-900 p-20 items-start grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
      {/* 0 */}
      <Link href={"/"}>
        <div className="flex items-end gap-2 mb-7 w-full">
          <img
            src="./png-transparent-commercial-property-real-estate-computer-icons-business-others-angle-building-text-removebg-preview.png"
            className="md:w-10 w-8"
          />
          <h1 className="text-xl font-extrabold text-white w-44 cursor-pointer">
            Home <span className="text-orange-400">rantel</span>
          </h1>
        </div>
      </Link>
      {/* 1 */}
      <div className="grid gap-3 text-white w-full">
        <h1 className="text-white text-lg font-semibold">Rental.com</h1>
        <p>Contact us</p>
        <p>About Us</p>
        <p>Terms & Privacy Policy</p>
        <p>Blog</p>
      </div>
      {/* 2 */}
      <div className="grid gap-3 text-white w-full">
        <h1 className="text-white text-lg font-semibold">Contact</h1>
        <div className="flex gap-2 items-center">
          <FaSquarePhone />
          <p>+92-3088742528</p>
        </div>
        <div className="flex gap-2 items-center">
          <MdEmail />
          <p>chmahar335@gmail.com</p>
        </div>
      </div>
      {/* 3 */}
      <div className="grid gap-3 text-white w-full">
        <h1 className="text-white text-lg font-semibold">Address</h1>
        <div className="flex gap-2 items-center">
          <IoLocationSharp />
          <p>Bahawalpur || pakistan</p>
        </div>
        <div className="flex gap-2 items-center">
          <IoLocationSharp />
          <p>Government Employees Cooperative </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
