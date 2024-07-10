"use client";
import React from "react";

const Tabs = () => {
  const [openTab, setOpenTab] = React.useState(1);
  const [openTab1, setOpenTab1] = React.useState(1);
  const [openTab2, setOpenTab2] = React.useState(1);
  return (
    <>
      <div className="xl:flex grid md:grid-cols-2 gap-2">
        <div className="flex flex-col p-6 shadow-sm rounded-xl w-full gap-8 border mt-20 bg-white">
          <div className="flex flex-col gap-8">
            <div className="flex gap-6 items-center">
              <img src="./images (1).png" alt="" className="w-12 h-10" />
              <h1 className="font-semibold text-xl">Home</h1>
            </div>
            <div>
              <div className="flex items-center gap-4">
                <div
                  className={
                    openTab === 1
                      ? "text-orange-600 underline underline-offset-8 text-lg font-semibold"
                      : "text-slate-600 text-lg font-semibold"
                  }
                  onClick={(e) => {
                    e.preventDefault();
                    setOpenTab(1);
                  }}
                >
                  Type
                </div>
                <div>
                  <a
                    className={
                      "" +
                      (openTab === 2
                        ? "text-orange-600 underline underline-offset-8 text-lg font-semibold"
                        : "text-slate-600 text-lg font-semibold")
                    }
                    onClick={(e) => {
                      e.preventDefault();
                      setOpenTab(2);
                    }}
                    data-toggle="tab"
                    href="#link2"
                    role="tablist"
                  >
                    Area Size
                  </a>
                </div>
              </div>
              <hr />
            </div>
          </div>
          <div className="flex flex-col mb-6 rounded ">
            <div className={openTab === 1 ? "block" : "hidden"} id="link1">
              <div className="grid gap-2">
                <div className="flex gap-2">
                  <button className="p-4 w-full text-xs font-semibold bg-[#F4F4F4] rounded-lg border">
                    Houses
                  </button>
                  <button className="p-4 w-full text-xs font-semibold bg-[#F4F4F4] rounded-lg border">
                    Room
                  </button>
                  <button className="p-4 w-full text-xs font-semibold bg-[#F4F4F4] rounded-lg border">
                    Upper Portion
                  </button>
                </div>
                <div className="flex gap-2">
                  <button className="p-4 w-full text-xs font-semibold bg-[#F4F4F4] rounded-lg border">
                    Lower Portion
                  </button>
                  <button className="p-4 w-full text-xs font-semibold bg-[#F4F4F4] rounded-lg border">
                    Farmhouse
                  </button>
                  <button className="p-4 w-full text-xs font-semibold bg-[#F4F4F4] rounded-lg border">
                    Flats
                  </button>
                </div>
              </div>
            </div>
            <div className={openTab === 2 ? "block" : "hidden"} id="link2">
              <div className="grid gap-2">
                <div className="flex gap-2">
                  <button className="p-4 text-xs w-full font-semibold bg-[#F4F4F4] rounded-lg border">
                    1000 sq yd <br /> 5 marla
                  </button>
                  <button className="p-4 text-xs w-full font-semibold bg-[#F4F4F4] rounded-lg border">
                    120 - 125 sq <br /> 3 marla
                  </button>
                  <button className="p-4 text-xs w-full font-semibold bg-[#F4F4F4] rounded-lg border">
                    500 sq yd <br /> 8 marla
                  </button>
                </div>
                <div className="flex gap-2">
                  <button className="p-4 text-xs w-full font-semibold bg-[#F4F4F4] rounded-lg border">
                    80 sq yd <br /> 10 marla
                  </button>
                  <button className="p-4 text-xs w-full font-semibold bg-[#F4F4F4] rounded-lg border">
                    240-250 sq <br /> 1 Kanal
                  </button>
                  <button className="p-4 text-xs w-full font-semibold bg-[#F4F4F4] rounded-lg border">
                    120 - 125 sq <br /> 12 marla
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* tab 2 */}
        <div className="flex flex-col p-6 shadow-sm w-full rounded-xl gap-8 border md:mt-20 bg-white">
          <div className="flex flex-col gap-8">
            <div className="flex gap-6 items-center">
              <img
                src="./360_F_319728829_i5gYmunKSj3HUrr7se3YxbBgbn357eRg.jpg"
                alt=""
                className="w-12 h-10"
              />
              <h1 className="font-semibold text-xl">Land & Plots</h1>
            </div>
            <div>
              <div className="flex items-center gap-4">
                <div
                  className={
                    openTab1 === 1
                      ? "text-orange-600 underline underline-offset-8 text-lg font-semibold"
                      : "text-slate-600 text-lg font-semibold"
                  }
                  onClick={(e) => {
                    e.preventDefault();
                    setOpenTab1(1);
                  }}
                >
                  Type
                </div>
                <div>
                  <a
                    className={
                      "" +
                      (openTab1 === 2
                        ? "text-orange-600 underline underline-offset-8 text-lg font-semibold"
                        : "text-slate-600 text-lg font-semibold")
                    }
                    onClick={(e) => {
                      e.preventDefault();
                      setOpenTab1(2);
                    }}
                    data-toggle="tab"
                    href="#link2"
                    role="tablist"
                  >
                    Area Size
                  </a>
                </div>
              </div>
              <hr />
            </div>
          </div>
          <div className="flex flex-col mb-6 rounded">
            <div className={openTab1 === 1 ? "block" : "hidden"} id="link1">
              <div className="grid gap-2">
                <div className="flex gap-2">
                  <button className="p-4 w-full text-xs font-semibold bg-[#F4F4F4] rounded-lg border">
                    Residential
                  </button>
                  <button className="p-4 w-full text-xs font-semibold bg-[#F4F4F4] rounded-lg border">
                    Commercial
                  </button>
                  <button className="p-4 w-full text-xs font-semibold bg-[#F4F4F4] rounded-lg border">
                    Plot File
                  </button>
                </div>
                <div className="flex gap-2">
                  <button className="p-4 w-full text-xs font-semibold bg-[#F4F4F4] rounded-lg border">
                    Plot Form
                  </button>
                  <button className="p-4 w-full text-xs font-semibold bg-[#F4F4F4] rounded-lg border">
                    Agricultural
                  </button>
                  <button className="p-4 w-full text-xs font-semibold bg-[#F4F4F4] rounded-lg border">
                    Industrial
                  </button>
                </div>
              </div>
            </div>
            <div className={openTab1 === 2 ? "block" : "hidden"} id="link2">
              <div className="grid gap-2">
                <div className="flex gap-2">
                  <button className="p-4 w-full text-xs font-semibold bg-[#F4F4F4] rounded-lg border">
                    1000 sq yd <br /> 5 marla
                  </button>
                  <button className="p-4 w-full text-xs font-semibold bg-[#F4F4F4] rounded-lg border">
                    120 - 125 sq <br /> 3 marla
                  </button>
                  <button className="p-4 w-full text-xs font-semibold bg-[#F4F4F4] rounded-lg border">
                    500 sq yd <br /> 8 marla
                  </button>
                </div>
                <div className="flex gap-2">
                  <button className="p-4 w-full text-xs font-semibold bg-[#F4F4F4] rounded-lg border">
                    80 sq yd <br /> 10 marla
                  </button>
                  <button className="p-4 w-full text-xs font-semibold bg-[#F4F4F4] rounded-lg border">
                    240-250 sq <br /> 1 Kanal
                  </button>
                  <button className="p-4 w-full text-xs font-semibold bg-[#F4F4F4] rounded-lg border">
                    120 - 125 sq <br /> 12 marla
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* tab 3 */}
        <div className="flex flex-col p-6 shadow-sm rounded-xl w-full gap-8 border md:mt-20 bg-white">
          <div className="flex flex-col gap-8">
            <div className="flex gap-6 items-center">
              <img
                src="./61052d61445f1f33f2f469a9313d52f9.jpg"
                alt=""
                className="w-12 h-10"
              />
              <h1 className="font-semibold text-xl">Commercial</h1>
            </div>
            <div>
              <div className="flex items-center gap-4">
                <div
                  className={
                    openTab2 === 1
                      ? "text-orange-600 underline underline-offset-8 text-lg font-semibold"
                      : "text-slate-600 text-lg font-semibold"
                  }
                  onClick={(e) => {
                    e.preventDefault();
                    setOpenTab2(1);
                  }}
                >
                  Type
                </div>
                <div>
                  <a
                    className={
                      "" +
                      (openTab2 === 2
                        ? "text-orange-600 underline underline-offset-8 text-lg font-semibold"
                        : "text-slate-600 text-lg font-semibold")
                    }
                    onClick={(e) => {
                      e.preventDefault();
                      setOpenTab2(2);
                    }}
                    data-toggle="tab"
                    href="#link2"
                    role="tablist"
                  >
                    Area Size
                  </a>
                </div>
              </div>
              <hr />
            </div>
          </div>
          <div className="flex flex-col mb-6 rounded">
            <div className={openTab2 === 1 ? "block" : "hidden"} id="link1">
              <div className="grid gap-2">
                <div className="flex gap-2">
                  <button className="p-4 w-full text-xs font-semibold bg-[#F4F4F4] rounded-lg border ">
                    Office
                  </button>
                  <button className="p-4 w-full text-xs font-semibold bg-[#F4F4F4] rounded-lg border ">
                    Factory area
                  </button>
                  <button className="p-4 w-full text-xs font-semibold bg-[#F4F4F4] rounded-lg border ">
                    Building
                  </button>
                </div>
                <div className="flex gap-2">
                  <button className="p-4 w-full text-xs font-semibold bg-[#F4F4F4] rounded-lg border ">
                    Warehouse
                  </button>
                  <button className="p-4 w-full text-xs font-semibold bg-[#F4F4F4] rounded-lg border ">
                    Shop
                  </button>
                  <button className="p-4 w-full text-xs font-semibold bg-[#F4F4F4] rounded-lg border ">
                    Others property
                  </button>
                </div>
              </div>
            </div>
            <div className={openTab2 === 2 ? "block" : "hidden"} id="link2">
              <div className="grid gap-2">
                <div className="flex gap-2">
                  <button className="p-4 w-full text-xs font-semibold bg-[#F4F4F4] rounded-lg border ">
                    1000 sq yd <br /> 5 marla
                  </button>
                  <button className="p-4 w-full text-xs font-semibold bg-[#F4F4F4] rounded-lg border ">
                    120 - 125 sq <br /> 3 marla
                  </button>
                  <button className="p-4 w-full text-xs font-semibold bg-[#F4F4F4] rounded-lg border ">
                    500 sq yd <br /> 8 marla
                  </button>
                </div>
                <div className="flex gap-2">
                  <button className="p-4 w-full text-xs font-semibold bg-[#F4F4F4] rounded-lg border ">
                    80 sq yd <br /> 10 marla
                  </button>
                  <button className="p-4 w-full text-xs font-semibold bg-[#F4F4F4] rounded-lg border ">
                    240-250 sq <br /> 1 Kanal
                  </button>
                  <button className="p-4 w-full text-xs font-semibold bg-[#F4F4F4] rounded-lg border ">
                    120 - 125 sq <br /> 12 marla
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Tabs;
