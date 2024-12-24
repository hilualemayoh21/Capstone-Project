import React from "react";
import { FaSearch } from "react-icons/fa";
import chief from "../../assets/images/chief.jpg";
import Slider from "./Slider";
import RecipeCategory from "./RecipeCategory";
import NewsInfo from "./NewsInfo";
function RecipeFinderHero() {
  return (
    <div>
      {/* herosection of recipe finder appp*/}
      <section className="">
        <div className=" flex flex-col  p-2 lg:flex-row lg:gap-20 py-6">
          <div className="flex-col max-w-sm lg:max-w-xl lg:px-20">
            <div className="mx-auto ">
              <h1
                className=" pt-16   text-5xl lg:pt-20
           text-center font-bold lg:justify-start lg:leading-[1.4em] "
              >
                Learn cooking in a simple way.
              </h1>
              <p className="text-center text-zinc-500 text-md lg:pt-10 lg:mb-10 lg:text-xl  p-6 lg:mr-14 font-semibold">
                Over 10,000 food all around the world you can try .Start cooking
                now!
              </p>
            </div>
            <div className=" text-sm  flex lg:gap-4 gap-2 items-center px-1 ">
              <button className="border-none text-xs bg-button-yellow rounded-md px-4 py-2 lg:px-6 lg:py-2 font-bold hover:bg-hover-button ">
                Get Started
              </button>
              <input
                type="text"
                className="w-25 rounded-lg h-10 lg:w-[225px] bg-input-color px-2 focus:outline-none lg:h-8 focus:bg-focus-color"
                placeholder="Search Recipes.."
              />
              <div className=" text-center flex items-center justify-center rounded-md hover:scale-105  bg-button-yellow w-10 h-10 lg:h-8 cursor-pointer">
                <FaSearch size={25} className="" />
              </div>
            </div>
          </div>
          {/* the hero section image */}
          <div className=" max-w-sm">
            <img src={chief} className="w-full h-auto m-10" />
          </div>
        </div>
        {/* herosection */}
        {/* featured recipes */}
        <div>
          <h2 className="text-center font-bold lg:text-2xl lg:p-16 p-3 transform -translate-y-8">
            Featured Recipes
          </h2>
          <div className="bg-primary  py-2 mx-auto pb-[2em] z-20">
            <Slider />
            <RecipeCategory />
          </div>
          <NewsInfo />
        </div>
      </section>
    </div>
  );
}

export default RecipeFinderHero;
