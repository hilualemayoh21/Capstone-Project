import React, { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
const APP_ID = "439c9e8a";
const APP_KEY = "59ae347ecea19c778465967dfa98295b";
function Search({ inputStyle, buttonStyle, onRecipeChange, onLoadingChange }) {
  const [searchQuery, setSearchQuery] = useState("");
  const fetchRecipe = async (query) => {
    try {
      onLoadingChange(true); // Notify parent that loading has started
      const response = await fetch(
        `https://api.edamam.com/api/recipes/v2?app_id=${APP_ID}&app_key=${APP_KEY}&q=${query}&type=public`
      );
      const data = await response.json();

      // Filter recipes by dish name, ingredients, or category
      const filteredRecipes = data.hits.filter((recipe) => {
        const lowerQuery = query.toLowerCase();

        // Match dish name
        const matchesDishName = recipe.recipe.label
          .toLowerCase()
          .includes(lowerQuery);

        // Match ingredients (some may have more detailed ingredients data)
        const matchesIngredients = recipe.recipe.ingredients.some(
          (ingredient) => ingredient.food.toLowerCase().includes(lowerQuery)
        );

        // Match cuisine category (dish category)
        const matchesCategory = recipe.recipe.cuisineType.some((category) =>
          category.toLowerCase().includes(lowerQuery)
        );

        // Return true if any of the conditions match
        return matchesDishName || matchesIngredients || matchesCategory;
      });

      // Update parent state with filtered recipes
      onRecipeChange(filteredRecipes);
    } catch (error) {
      console.error("Error fetching recipes:", error);
    } finally {
      onLoadingChange(false); // Notify parent that loading has finished
    }
  };
  useEffect(() => {
    fetchRecipe("chicken");
  }, []);
  const handleSearch = (e) => {
    e.preventDefault();
    fetchRecipe(searchQuery); // Fetch recipes using the search query
  };
  return (
    <form onSubmit={handleSearch} className="flex ">
      <label className="flex input shadow-md items-center w-full rounded-md">
        <input
          type="text"
          className={inputStyle}
          placeholder="Search by dish, ingredient, or category..."
          onChange={(e) => setSearchQuery(e.target.value)}
          value={searchQuery}
        />
        <div className={buttonStyle}>
          <FaSearch size={25} className="" />
        </div>
      </label>
    </form>
  );
}

export default Search;
