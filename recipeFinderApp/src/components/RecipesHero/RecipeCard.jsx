import React, { useState, useRef } from "react";
import { FaHeart, FaHeartbeat } from "react-icons/fa";
import { MdOutlineSoupKitchen } from "react-icons/md";

function RecipeCard({ recipe, bg, badge }) {
  const [isFavorite, setIsFavorite] = useState(
    localStorage.getItem("favorites")?.includes(recipe.strMeal)
  );
  const skeletonRef = useRef(null);

  const addFavoriteRecipe = () => {
    let favorites = JSON.parse(localStorage.getItem("favorites")) || [];

    const isFavoriteFound = favorites.some(
      (fav) => fav.strMeal === recipe.strMeal
    );
    if (isFavoriteFound) {
      favorites = favorites.filter((fav) => fav.strMeal !== recipe.strMeal);
      setIsFavorite(false);
    } else {
      favorites.push(recipe);
      setIsFavorite(true);
    }
    localStorage.setItem("favorites", JSON.stringify(favorites));
  };

  return (
    <div className="flex justify-center items-center">
      <div
        className={`flex flex-col bg-[#F4DF9C]  md:w-full pb-4 rounded-lg p-2 sm:p-3 md:p-4 `}
      >
        <div className="relative  w-full h-20 sm:h-68 md:h-56">
          <div className="skeleton absolute inset-0" ref={skeletonRef} />
          <img
            src={recipe.strMealThumb} // Corrected to strMealThumb
            className="rounded-md w-full h-full object-cover opacity-0 transition-opacity duration-500"
            alt={recipe.strMeal}
            onLoad={(e) => {
              e.currentTarget.style.opacity = 1; // Make image visible
              if (skeletonRef.current) {
                skeletonRef.current.classList.add("hidden"); // Hide skeleton loader
              }
            }}
          />
          <div className="flex gap-1 bg-white rounded-full px-2 py-1 items-center absolute bottom-1 left-2 text-xs sm:text-sm">
            <MdOutlineSoupKitchen size={16} />
          </div>
          <div
            className={`bg-white rounded-full p-1 absolute top-1
        right-2 flex items-center justify-center w-8 h-8 sm:w-9 sm:h-9 ${
          isFavorite ? "text-red-500" : "text-gray-500"
        }`}
            onClick={(e) => {
              e.preventDefault();
              addFavoriteRecipe();
            }}
          >
            <FaHeart />
          </div>
        </div>

        <h2 className="font-bold text-sm sm:text-base mt-2 text-center md:text-start">
          {recipe.strMeal}
        </h2>

        <p className="mt-3 tracking-tighter font-semibold text-xs sm:text-sm text-center md:text-start">
          {recipe.strArea.charAt(0).toUpperCase() + recipe.strArea.slice(1)}{" "}
          Kitchen
        </p>
        <div className="flex gap-2 flex-wrap justify-center md:justify-start mt-2 ">
          <div
            key={recipe.strMeal} // Corrected to recipe.strMeal
            className={`flex items-center gap-1 ${badge} rounded-full px-2 py-1 text-xs sm:text-sm`}
          >
            <FaHeartbeat size={16} />
            <span>{recipe.strCategory}</span>
            {/* Corrected to recipe.strCategory */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default RecipeCard;
