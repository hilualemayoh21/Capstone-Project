import React, { useState, useEffect } from "react";
import Slider from "../components/RecipesHero/Slider";
import RecipeCategory from "../components/RecipesHero/RecipeCategory";
import NewsInfo from "../components/RecipesHero/NewsInfo";
import SubscriptionForm from "../components/RecipesHero/SubscriptionForm";
import Search from "../components/RecipesHero/Search";
import { useNavigate } from "react-router-dom";

function RecipeFinderHero() {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

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

  // Watch for recipes changes and navigate if a recipe is found
  useEffect(() => {
    if (recipes.length > 0) {
      // Redirect to the recipe page if recipes exist
      navigate("/recipe", { replace: true });
    }
  }, [recipes, navigate]);

  const handleRecipesChange = (newRecipes) => {
    setRecipes(newRecipes);
  };

  const handleLoadingChange = (newLoading) => {
    setLoading(newLoading);
  };

  const handleErrorChange = (newError) => {
    setError(newError.message);
  };

  const inputStyle =
    "w-25 rounded-lg h-10 lg:w-[225px] md:w-[340px] bg-input-color px-2 focus:outline-none lg:h-8 focus:bg-focus-color";
  const buttonStyle =
    " text-center flex items-center justify-center rounded-md hover:scale-105  bg-button-yellow w-10 h-11 md:w-12 md:h-10 lg:h-8 cursor-pointer";

  return (
    <div>
      {/* Hero section of Recipe Finder app */}
      <section>
        <div className="flex flex-col p-2 lg:flex-row lg:gap-20 py-6">
          {/* Left side: Title, Description, Search */}
          <div className="flex-col max-w-sm lg:max-w-xl md:justify-center md:gap-16 md:items-center md:max-w-screen-2xl lg:px-20">
            <div className="mx-auto">
              <h1 className="pt-16 text-5xl lg:pt-20 text-center font-bold lg:justify-start lg:leading-[1.4em]">
                Learn cooking in a simple way.
              </h1>
              <p className="text-center text-zinc-500 text-md lg:pt-10 lg:mb-10 lg:text-xl md:my-2 md:text-lg p-6 lg:mr-14 font-semibold">
                Over 10,000 food recipes from all around the world. Start
                cooking now!
              </p>
            </div>
            <div className="text-sm flex lg:gap-4 gap-2 items-center px-1 justify-center">
              <button className="border-none text-xs bg-button-yellow rounded-md px-4 py-2 lg:px-6 lg:py-2 md:py-3 font-bold hover:bg-hover-button">
                Get Started
              </button>
              <Search
                inputStyle={inputStyle}
                buttonStyle={buttonStyle}
                onErrorChange={handleErrorChange}
                onRecipeChange={handleRecipesChange}
                onLoadingChange={handleLoadingChange}
                Query=""
              />
            </div>
          </div>

          {/* Right side: Hero image */}
          <div className="max-w-sm md:max-w-screen-lg md:text-center">
            <img
              src="/images/chief.jpg"
              className="w-full h-auto m-10 md:m-5"
              alt="Chef"
            />
          </div>
        </div>

        {/* Featured recipes */}
        <div>
          <h2 className="text-center font-bold lg:text-2xl md:text-xl lg:p-16 p-3 transform -translate-y-8">
            Featured Recipes
          </h2>
          <div className="bg-primary py-2 mx-auto pb-[2em] z-20">
            <Slider images={images} />
            <RecipeCategory />
          </div>
          <NewsInfo />
        </div>
        <SubscriptionForm />
      </section>

      {/* Error message */}
      {error && (
        <div className="text-center text-red-600 font-bold py-4">{error}</div>
      )}

      {/* Loading spinner */}
      {loading && (
        <div className="text-center font-bold text-gray-600 py-4">
          Loading recipes...
        </div>
      )}
    </div>
  );
}

export default RecipeFinderHero;
