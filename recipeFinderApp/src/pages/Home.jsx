import React from "react";
import Slider from "../components/RecipesHero/Slider";
import RecipeCategory from "../components/RecipesHero/RecipeCategory";
import NewsInfo from "../components/RecipesHero/NewsInfo";
import SubscriptionForm from "../components/RecipesHero/SubscriptionForm";
import Search from "../components/RecipesHero/Search";
function RecipeFinderHero() {
  const images = [
    { img: "/images/foodimage12.jpg", title: "Red Velvet Cake" },
    { img: "/images/foodimage13.jpg", title: "Avocado Toast with Egg" },
    { img: "/images/foodimage8.jpg", title: "Turkish Beyti Kebap" },
    { img: "/images/foodimage5.jpg", title: "Grilled Chicken Wings" },
    { img: "/images/image24.jpg", title: "Delicious Meal" },
    { img: "/images/foodimage2.jpg", title: "Savory Dish" },
    { img: "/images/foodimage16.jpg", title: "Pasta Bowl" },
    { img: "/images/foodimage14.jpg", title: "Fruit Platter" },
  ];
  const inputStyle =
    "w-25 rounded-lg h-10 lg:w-[225px] bg-input-color px-2 focus:outline-none lg:h-8 focus:bg-focus-color";
  const buttonStyle =
    " text-center flex items-center justify-center rounded-md hover:scale-105  bg-button-yellow w-10 h-11 lg:h-8 cursor-pointer";
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
            <div className=" text-sm  flex lg:gap-4 gap-2 items-center px-1 justify-center ">
              <button className="border-none text-xs bg-button-yellow rounded-md px-4 py-2 lg:px-6 lg:py-2 font-bold hover:bg-hover-button ">
                Get Started
              </button>
              <Search inputStyle={inputStyle} buttonStyle={buttonStyle} />
            </div>
          </div>
          {/* the hero section image */}
          <div className=" max-w-sm">
            <img src="/images/chief.jpg" className="w-full h-auto m-10" />
          </div>
        </div>
        {/* herosection */}
        {/* featured recipes */}
        <div>
          <h2 className="text-center font-bold lg:text-2xl lg:p-16 p-3 transform -translate-y-8">
            Featured Recipes
          </h2>
          <div className="bg-primary  py-2 mx-auto pb-[2em] z-20">
            <Slider images={images} />
            <RecipeCategory />
          </div>
          <NewsInfo />
        </div>
        <SubscriptionForm />
      </section>
    </div>
  );
}

export default RecipeFinderHero;
