import React, { useState, useRef } from "react";
import { FaHeart, FaHeartbeat } from "react-icons/fa";
import { MdOutlineSoupKitchen } from "react-icons/md";

const returnTwoLabel = (arr) => {
  return [arr[0], arr[1]];
};

function RecipeCard({ recipe, bg, badge }) {
  const [isFavorite, setIsFavorite] = useState(
    localStorage.getItem("favorites")?.includes(recipe.label)
  );
  const skeletonRef = useRef(null);
  const healthType = recipe.healthLabels
    ? returnTwoLabel(recipe.healthLabels)
    : [];
  const addFavoriteRecipe = () => {
    let favorites = JSON.parse(localStorage.getItem("favorites")) || [];

    const isFavoriteFound = favorites.some((fav) => fav.label === recipe.label);
    if (isFavoriteFound) {
      favorites = favorites.filter((fav) => fav.label !== recipe.label);
      setIsFavorite(false);
    } else {
      favorites.push(recipe);
      setIsFavorite(true);
    }
    localStorage.setItem("favorites", JSON.stringify(favorites));
  };

  return (
    <div
      className={`flex flex-col ${bg} w-full pb-4 rounded-lg p-2 sm:p-3 md:p-4`}
    >
      <a
        href={`https://www.youtube.com/results?search_query=${recipe.label} recipe`}
        className="relative h-40 sm:h-48 md:h-56"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="skeleton absolute inset-0" ref={skeletonRef} />
        <img
          src={recipe.image}
          className="rounded-md w-full h-full object-cover opacity-0 transition-opacity duration-500"
          alt={recipe.label}
          onLoad={(e) => {
            e.currentTarget.style.opacity = 1; // Make image visible
            if (skeletonRef.current) {
              skeletonRef.current.classList.add("hidden"); // Hide skeleton loader
            }
          }}
        />
        <div className="flex gap-1 bg-white rounded-full px-2 py-1 items-center absolute bottom-1 left-2 text-xs sm:text-sm">
          <MdOutlineSoupKitchen size={16} />
          <span>{recipe.yield} servings</span>
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
      </a>

      <h2 className="font-bold text-sm sm:text-base mt-2 text-center">
        {recipe.label}
      </h2>

      <p className="mt-3 tracking-tighter font-semibold text-xs sm:text-sm text-center">
        {recipe.cuisineType[0].charAt(0).toUpperCase() +
          recipe.cuisineType[0].slice(1)}{" "}
        Kitchen
      </p>
      <div className="flex gap-2 flex-wrap justify-center mt-2">
        {healthType.map((label) => (
          <div
            key={label}
            className={`flex items-center gap-1 ${badge} rounded-full px-2 py-1 text-xs sm:text-sm`}
          >
            <FaHeartbeat size={16} />
            <span>{label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RecipeCard;
