import React from "react";
import image22 from "/images/image22.jpg";
import Slider from "./Slider";
function NewsInfo() {
  const Newest = [
    { img: "/images/image28.jpg", title: "" },
    { img: "/images/image25.jpg", title: "" },
    { img: "/images/image26.jpg", title: "" },
    { img: "/images/image29.jpg", tilte: "" },
    { img: "/images/image30.jpg", title: "" },
    { img: "/images/image33.jpg", title: "" },
    { img: "/images/image34.jpg", title: "" },
    { img: "/images/image36.jpg", title: "" },
  ];
  return (
    <div className="bg-bg-rose w-full">
      <div className="mx-w-md lg:max-w-5xl mx-auto px-4  py-10 ">
        <h2 className="text-center lg:text-2xl  md:text-xl font-bold mb-4 md:mb-6">
          Check our Latest News!
        </h2>
        <div className="lg:flex-row inline-flex flex-col justify-center items-center md:max-w-screen-2xl md:w-full lg:gap-12 lg:pt-10">
          <img
            src={image22}
            className="object-cover w-[200px] h-[100px] lg:w-[300px] md:w-[350px] md:h-[200px] rounded-lg   "
          />
          <div className="mt-4 md:max-w-xl  max-w-[345px] ">
            <h3 className="text-2xl font-semibold p-4 md:ml-[6em] md:text-xl ">
              11 Simple Ways to Cook an Egg
            </h3>
            <p className=" text-zinc-500 text-[12px] md:text-lg lg:pr-2 px-2 md:p-2 md:justify-start ">
              Eggs are one of the most versatile ingredients in the kitchen.
              They're used in everything from breakfast to dessert and delicious
              as a main ,side or topping .Get cracking on these 11 easy ways to
              cook eggs.
            </p>
            <button className="lg:mt-4 lg:text-xl border-2 lg:px-4 py-1 md:mx-4 md:my-2 px-2 rounded-lg m-2 hover:text-white hover:bg-hover-button border-amber-200 font-thin">
              Learn More
            </button>
          </div>
        </div>
      </div>
      {/* the newest recipe slider */}
      <div className=" flex flex-col items-start justify-center gap-2 lg:gap-16 relative">
        <h3 className="md:text-2xl font-bold  px-4 py-1  lg:px-24">
          Newest Recipes
        </h3>
        <div className="bg-primary w-full lg:h-[260px] h-[180px] lg:py-6 py-4">
          <Slider images={Newest} />
        </div>
      </div>
    </div>
  );
}

export default NewsInfo;
