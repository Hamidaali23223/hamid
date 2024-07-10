import Navbar from "@/components/Navbar";
import Filter from "@/components/filter";
import Slides from "@/components/slides";
import Tabs from "@/components/tabs";
import React from "react";
import Imgslider from "@/components/Imgslider";
import Footer from "@/components/footer";

export default async function Home() {
  const response = await fetch("http://localhost:3000/api/submit");
  if (!response.ok) {
    throw new Error("Failed to fetch images");
  }
  const data = await response.json();
  const result = data.data;

  return (
    <div className="bg-gray-50">
      <div>
        <img
          src="./153990_outside-view-of-houses-wallpapers-full-free-download_2560x1600_h.jpg"
          alt=""
          className="w-full absolute brightness-75 md:h-[630px] h-80 sm:h-screen"
        />
        <Navbar />
      </div>
      <div className="lg:mt-6 mt-10 md:mx-12 lg:mx-20 mx-4">
        <div>
          <h1 className="text-2xl md:text-4xl font-medium flex justify-center md:py-14 py-8">
            Let's find your dream home !
          </h1>
          <div className="xl:flex justify-around sm:grid-cols-2 lg:grid-cols-3 grid sm:gap-4 gap-14 md:gap-4 lg:gap-8">
            {/* card1 */}
            <div className="card1 shadow-md sm:w-[100%] xl:w-[40%] bg-[#F4F4F4] rounded-md">
              <img
                src="./360_F_274502877_n3BQGoAGPRqsjgKIU4lB6wns0mBuPTL3.jpg"
                alt=""
                className="rounded-t-md"
              />
              <div className="flex flex-col gap-4 p-4 py-6">
                <h1 className="md:text-2xl text-xl font-semibold">
                  Find the best property for{" "}
                  <span className="font-bold text-orange-500">RENT</span>
                </h1>
                <p className="text-sm">
                  Explore and secure your dream property effortlessly with our
                  comprehensive buying platform
                </p>

                <button className="bg-blue-500 p-2 py-3 rounded-md px-4 text-white text-sm">
                  Find Rentals
                </button>
              </div>
            </div>
            {/* card2 */}
            <div className="card2 shadow-md sm:w-[100%] xl:w-[40%] bg-[#F4F4F4] rounded-md">
              <img
                src="./9d0e8e12174f47327a53801af694a2f3.jpg"
                alt=""
                className="rounded-t-md"
              />
              <div className="flex flex-col gap-4 p-4 py-6">
                <h1 className="md:text-2xl text-xl font-semibold">
                  Find the best property for{" "}
                  <span className="font-bold text-orange-500">BUY</span>
                </h1>
                <p className="text-sm">
                  Explore and secure your dream property effortlessly with our
                  comprehensive buying platform.
                </p>
                <button className="bg-blue-500 p-2 py-3 rounded-md px-4 text-white text-sm">
                  Find property
                </button>
              </div>
            </div>
            {/* card3 */}
            <div className="card2 shadow-md sm:w-[100%] xl:w-[40%] bg-[#F4F4F4] rounded-md">
              <img
                src="./EVQD7oVUwAAro4g.jpg"
                alt=""
                className="rounded-t-md"
              />
              <div className="flex flex-col gap-4 p-4 py-6">
                <h1 className="md:text-2xl text-xl font-semibold">
                  List the best property for{" "}
                  <span className="font-bold text-orange-500">Sale</span>
                </h1>
                <p className="text-sm">
                  Explore and secure your dream property effortlessly with our
                  comprehensive buying platform.
                </p>
                <button className="bg-blue-500 p-2 py-3 rounded-md px-4 text-white text-sm">
                  List Details
                </button>
              </div>
            </div>
            {/* card4 */}
            <div className="card2 hidden sm:block lg:hidden shadow-md sm:w-[100%] xl:w-[40%] bg-[#F4F4F4] rounded-md">
              <div className="w-full flex flex-col gap-4 justify-center mt-20">
                <img src="Coming-Soon-PNG.png" alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="mapouter mt-10">
          <Filter />
          <div className="gmap_canvas">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14159960.757207863!2d58.34982968079076!3d29.95005532620245!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38db52d2f8fd751f%3A0x46b7a1f7e614925c!2sPakistan!5e0!3m2!1sen!2sus!4v1718390953736!5m2!1sen!2sus"
              className="h-[500px] w-full"
            ></iframe>
          </div>
        </div>
        <Tabs />
        <div className="mt-28 grid gap-4 p-6 rounded-lg px-6">
          <h1 className="text-2xl font-semibold">Near You</h1>
          <Slides />
          {/* {result.map((res: any) => (
            <>
              <pre>{JSON.stringify(res)}</pre>
              <h1>{res.PropertyType}</h1>
            </>
          ))} */}
        </div>
        <div>
          <Imgslider />
        </div>
      </div>
      <div className="mt-32">
        <Footer />
      </div>
    </div>
  );
}
