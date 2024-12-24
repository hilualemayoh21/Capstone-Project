import React from "react";
import image23 from "/images/image23.png";
function NewsInfo() {
  return (
    <div className="mx-w-md lg:max-w-5xl mx-auto px-4  my-5">
      <h2 className="text-center lg:text-2xl font-bold mb-4 ">
        Check our Latest News!
      </h2>
      <div className="lg:flex-row inline-flex flex-col justify-center items-center lg:gap-12 lg:pt-10">
        <img
          src={image23}
          className="object-cover w-[200px] h-[100px] lg:w-[300px] lg:h-[200px] rounded-lg   "
        />
        <div className="mt-4 lg:max-w-xl max-w-[345px] ">
          <h3 className="text-2xl font-semibold p-4">
            11 Simple Ways to Cook an Egg
          </h3>
          <p className=" text-gray-500 text-[12px] lg:text-md lg:pr-2 px-2  ">
            Eggs are one of the most versatile ingredients in the kitchen.
            They're used in everything from breakfast to dessert and delicious
            as a main ,side or topping .Get cracking on these 11 easy ways to
            cook eggs.
          </p>
          <button className="lg:mt-4 lg:text-xl border-2 lg:px-4 py-1  px-2 rounded-lg m-2 hover:text-white hover:bg-hover-button border-amber-200 font-thin">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
}

export default NewsInfo;
