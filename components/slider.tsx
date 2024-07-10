"use client";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Slider = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  return (
    <>
      <Carousel
        swipeable={false}
        // autoPlay
        draggable={false}
        showDots={true}
        responsive={responsive}
        ssr={true}
        infinite={true}
        autoPlaySpeed={1000}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={500}
        removeArrowOnDeviceType={["tablet", "mobile"]}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      >
        {/* card1 */}
        <div className="card2 shadow-md sm:w-[100%] bg-[#F4F4F4] rounded-md mx-12">
          <img src="./EVQD7oVUwAAro4g.jpg" alt="" className="rounded-t-md" />
          <div className="flex flex-col gap-2 p-4 py-6">
            <div className="flex gap-2 items-center">
              <p className="text-slate-600 font-semibold">PKR</p>
              <h1 className="md:text-lg text-xl font-bold text-orange-600">
                1.60 Lac / Month
              </h1>
            </div>
            <div className="flex justify-between">
              <a href="">
                <h1 className="md:text-xl text-lg font-bold hover:text-blue-600">
                  Ground floor for rent
                </h1>
              </a>
              <p className="text-sm text-slate-600">16 jun</p>
            </div>
            <div className="flex gap-6">
              <div className="flex gap-2 items-center">
                <p>1</p>
                <img
                  src="images__2_-removebg-preview (2).png"
                  alt=""
                  className="w-6"
                />
              </div>
              <div className="flex gap-2 items-center">
                <p>1</p>
                <img
                  src="images__3_-removebg-preview (1).png"
                  alt=""
                  className="w-6"
                />
              </div>
              <p>10 Marla</p>
            </div>
            <p className="text-sm text-slate-600 flex gap-1 items-center">
              <svg
                className="h-4 w-4 text-red-500"
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
              Faisalabad, Sargodha Road
            </p>
          </div>
        </div>
        {/* card2 */}
        <div className="card2 shadow-md sm:w-[100%] bg-[#F4F4F4] rounded-md ms-6">
          <img src="./EVQD7oVUwAAro4g.jpg" alt="" className="rounded-t-md" />
          <div className="flex flex-col gap-2 p-4 py-6">
            <div className="flex gap-2 items-center">
              <p className="text-slate-600 font-semibold">PKR</p>
              <h1 className="md:text-lg text-xl font-bold text-orange-600">
                1.60 Lac / Month
              </h1>
            </div>
            <div className="flex justify-between">
              <a href="">
                <h1 className="md:text-xl text-lg font-bold hover:text-blue-600">
                  Ground floor for rent
                </h1>
              </a>
              <p className="text-sm text-slate-600">16 jun</p>
            </div>
            <div className="flex gap-6">
              <div className="flex gap-2 items-center">
                <p>1</p>
                <img
                  src="images__2_-removebg-preview (2).png"
                  alt=""
                  className="w-6"
                />
              </div>
              <div className="flex gap-2 items-center">
                <p>1</p>
                <img
                  src="images__3_-removebg-preview (1).png"
                  alt=""
                  className="w-6"
                />
              </div>
              <p>10 Marla</p>
            </div>
            <p className="text-sm text-slate-600 flex gap-1 items-center">
              <svg
                className="h-4 w-4 text-red-500"
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
              Faisalabad, Sargodha Road
            </p>
          </div>
        </div>
        {/* card3 */}
        <div className="card2 shadow-md sm:w-[100%] bg-[#F4F4F4] rounded-md ms-6">
          <img src="./EVQD7oVUwAAro4g.jpg" alt="" className="rounded-t-md" />
          <div className="flex flex-col gap-2 p-4 py-6">
            <div className="flex gap-2 items-center">
              <p className="text-slate-600 font-semibold">PKR</p>
              <h1 className="md:text-lg text-xl font-bold text-orange-600">
                1.60 Lac / Month
              </h1>
            </div>
            <div className="flex justify-between">
              <a href="">
                <h1 className="md:text-xl text-lg font-bold hover:text-blue-600">
                  Ground floor for rent
                </h1>
              </a>
              <p className="text-sm text-slate-600">16 jun</p>
            </div>
            <div className="flex gap-6">
              <div className="flex gap-2 items-center">
                <p>1</p>
                <img
                  src="images__2_-removebg-preview (2).png"
                  alt=""
                  className="w-6"
                />
              </div>
              <div className="flex gap-2 items-center">
                <p>1</p>
                <img
                  src="images__3_-removebg-preview (1).png"
                  alt=""
                  className="w-6"
                />
              </div>
              <p>10 Marla</p>
            </div>
            <p className="text-sm text-slate-600 flex gap-1 items-center">
              <svg
                className="h-4 w-4 text-red-500"
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
              Faisalabad, Sargodha Road
            </p>
          </div>
        </div>
        {/* card4 */}
        <div className="card2 shadow-md sm:w-[100%] bg-[#F4F4F4] rounded-md ms-6">
          <img
            src="./drone-shot-hyperlapse-night-landscape-over-resident-community-near-jelutong-video.jpg"
            alt=""
            className="rounded-t-md"
          />
          <div className="flex flex-col gap-2 p-4 py-6">
            <div className="flex gap-2 items-center">
              <p className="text-slate-600 font-semibold">PKR</p>
              <h1 className="md:text-lg text-xl font-bold text-orange-600">
                1.60 Lac / Month
              </h1>
            </div>
            <div className="flex justify-between">
              <a href="">
                <h1 className="md:text-xl text-lg font-bold hover:text-blue-600">
                  Ground floor for rent
                </h1>
              </a>
              <p className="text-sm text-slate-600">16 jun</p>
            </div>
            <div className="flex gap-6">
              <div className="flex gap-2 items-center">
                <p>1</p>
                <img
                  src="images__2_-removebg-preview (2).png"
                  alt=""
                  className="w-6"
                />
              </div>
              <div className="flex gap-2 items-center">
                <p>1</p>
                <img
                  src="images__3_-removebg-preview (1).png"
                  alt=""
                  className="w-6"
                />
              </div>
              <p>10 Marla</p>
            </div>
            <p className="text-sm text-slate-600 flex gap-1 items-center">
              <svg
                className="h-4 w-4 text-red-500"
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
              Faisalabad, Sargodha Road
            </p>
          </div>
        </div>
      </Carousel>
    </>
  );
};

export default Slider;
