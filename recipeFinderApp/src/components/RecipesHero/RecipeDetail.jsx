import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getRandomColor } from "../../lib/util.js";
import { FaHeartbeat } from "react-icons/fa"; // Import FaHeartbeat
import ReactPlayer from "react-player";

function RecipeDetail() {
  const [recipeDetails, setRecipeDetails] = useState("");
  const [loading, setLoading] = useState(false);
  const { id } = useParams();
  const { badge } = { ...getRandomColor() };

  useEffect(() => {
    const fetchRecipeDetail = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
        );
        const data = await response.json();

        setRecipeDetails(data.meals ? data.meals[0] : "");
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchRecipeDetail();
  }, [id]);

  // Fetching Ingredients and Measures
  const getIngredientAndMeasure = (recipe) => {
    const ingredients = [];
    for (let i = 1; i <= 20; i++) {
      const ingredientKey = `strIngredient${i}`;
      const measureKey = `strMeasure${i}`;
      const ingredientValue = recipe[ingredientKey];
      const measureValue = recipe[measureKey];

      if (ingredientValue) {
        ingredients.push({
          ingredient: ingredientValue,
          measure: measureValue,
        });
      }
    }
    return ingredients;
  };

  const ingredients = recipeDetails
    ? getIngredientAndMeasure(recipeDetails)
    : [];

  if (loading) {
    return <h3>Loading...</h3>;
  }

  if (!recipeDetails) {
    return <h3>No recipe details found!</h3>;
  }

  const {
    strArea,
    strCategory,
    strMealThumb,
    strMeal,
    strInstructions,
    strYoutube,
    strSource,
  } = recipeDetails;

  return (
    <div className="py-12 bg-gradient-to-r from-teal-300 via-blue-200 to-pink-300">
      {/* Recipe and Ingredients section */}
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mx-auto ">
        {/* Recipe Card */}
        <div className="w-full bg-gradient-to-r  from-white via-yellow-100 to-pink-100 shadow-lg rounded-lg p-4 transform hover:scale-105 transition-all duration-300 ease-in-out mt-2 ">
          <img
            src={strMealThumb}
            className="w-full h-[250px] md:h-[300px] lg:w-[650px] lg:h-[240px] rounded-lg object-cover shadow-md hover:shadow-lg transition-shadow"
            alt="Meal"
          />
          <h2 className="font-semibold text-lg sm:text-xl mt-4 text-center md:text-left text-gray-800">
            {strMeal}
          </h2>
          <p className="mt-2 text-sm sm:text-base text-gray-600 text-center md:text-left">
            {strArea} Kitchen
          </p>
          <div className="flex lg:gap-6 flex-wrap justify-center md:justify-start mt-3">
            <div
              key={strMeal}
              className={`flex items-center gap-1 ${badge} rounded-full px-3 py-1 text-xs sm:text-sm shadow-md transition-shadow duration-300`}
            >
              <FaHeartbeat size={16} />
              <span>{strCategory}</span>
            </div>
            {/* <div
              key={strMeal}
              className={`flex items-center  ${badge} rounded-full px-3 py-1 text-xs sm:text-sm shadow-md transition-shadow duration-300`}
            >
              <FaHeartbeat size={16} />
              <span>
                <a href={`{strSource}`}>More</a>
              </span>
            </div> */}
          </div>
        </div>

        {/* Ingredients Card */}
        <div className="w-full bg-gradient-to-r from-purple-100  via-pink-100 to-teal-100 shadow-lg mt-2 rounded-lg pl-2 transform hover:scale-105 transition-all duration-300 ease-in-out">
          <h3 className="text-xl font-semibold text-center text-gray-800">
            Ingredients
          </h3>
          {ingredients.length > 0 ? (
            ingredients.map((item, index) => (
              <div key={index} className="flex flex-col py-1">
                <p className="text-gray-700">{`${item.ingredient} - ${
                  item.measure || "N/A"
                }`}</p>
              </div>
            ))
          ) : (
            <p className="text-gray-600">Ingredients not found</p>
          )}
        </div>
      </div>

      {/* Instructions and YouTube Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mt-12 mx-auto max-w-screen-xl">
        {/* Instructions Card */}
        <div className="w-full bg-gradient-to-r from-green-100 via-teal-100 to-blue-100 shadow-lg  rounded-lg p-2 transform hover:scale-105 transition-all duration-300 ease-in-out">
          <h3 className="font-semibold text-gray-800 mb-4 pl-1">
            Instructions
          </h3>
          <p className=" text-gray-700 pl-1">
            {strInstructions || "Instructions not available"}
          </p>
        </div>

        {/* YouTube Player */}
        <div className="w-full bg-gradient-to-r from-orange-100 via-yellow-100 to-pink-100 shadow-lg rounded-lg p-4 mt-8 md:mt-0 transform hover:scale-105 transition-all duration-300 ease-in-out">
          <div className="w-full h-full z-10">
            <ReactPlayer
              url={strYoutube}
              light={true}
              width="100%"
              height="100%"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default RecipeDetail;
