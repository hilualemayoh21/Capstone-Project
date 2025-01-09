import React, { useState, useEffect } from "react";
import Search from "../components/RecipesHero/Search";
import RecipeCard from "../components/RecipesHero/RecipeCard";
import { getRandomColor } from "../lib/util";
import { Link } from "react-router-dom";
const inputStyle =
  "  -mx-14 md:px-13 h-14 border border-gray-300 rounded-md  text-sm md:text-lg focus:ring-2  pl-[6em] focus:outline-none grow";

const buttonStyle =
  " h-12 transform md:-translate-x-[64em] py-3  text-gray-600";
function Recipe() {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const handleRecipesChange = (newRecipe) => {
    setRecipes(newRecipe);
  };
  const handleLoadingChange = (newLoading) => {
    setLoading(newLoading);
  };
  const handleErrorChange = (newError) => {
    setError(newError.message);
  };

  return (
    // <div className="transform translate-y-10 mb-96 p-10 mx-auto w-full ">
    <div className="min-h-screen px-14  mb-16 transform translate-y-10  ">
      <div className="md:max-screen-lg mx-auto px-16 py-6 ">
        <Search
          inputStyle={inputStyle}
          buttonStyle={buttonStyle}
          onRecipeChange={handleRecipesChange}
          onLoadingChange={handleLoadingChange}
          onErrorChange={handleErrorChange}
          Query="chicken"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8 mb-4 ">
          {error ? <h>{error}</h> : ""}
          {!loading && recipes.length > 0 ? (
            recipes.map((recipe, index) => (
              <Link to={`/recipes/${recipe.idMeal}`} key={index}>
                <RecipeCard recipe={recipe} {...getRandomColor()} />
              </Link>
            ))
          ) : (
            <div className="flex items-center justify-center max-w-screen-2xl">
              <h4 className="text-lg   text-red-600 ">
                Sorry No recipe is Found please Search again with Correct
                Dishname!
              </h4>
            </div>
          )}
          {/* {loading &&
            [...Array(9)].map((_, index) => (
              <div className="flex w-full flex-col gap-4" key={index}>
                <div className="skeleton h-32 w-full"></div>
                <div className="flex justify-between">
                  <div className="skeleton h-4 w-28"></div>
                  <div className="skeleton h-4 w-24"></div>
                </div>
              </div>
            ))} */}
        </div>
      </div>
    </div>
  );
}

export default Recipe;
