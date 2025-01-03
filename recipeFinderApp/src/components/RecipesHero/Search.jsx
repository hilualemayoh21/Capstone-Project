import React, { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";

function Search({ inputStyle, buttonStyle, onRecipeChange, onLoadingChange }) {
  const [searchQuery, setSearchQuery] = useState("");

  const fetchRecipe = async (query) => {
    try {
      console.log("Fetching recipes for:", query); // Debug log
      onLoadingChange(true); // Notify parent that loading has started
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`
      );

      // Check if the response is OK (status code 200)
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();

      console.log("Fetched data:", data); // Debug log to inspect the response

      // Handle case where no meals are found
      const filteredRecipes = data.meals || []; // Fallback to an empty array

      // Update parent state with filtered recipes
      onRecipeChange(filteredRecipes);
    } catch (error) {
      console.error("Error fetching recipes:", error);
      // Optionally show an error message to the user
      alert("There was an issue fetching the recipes. Please try again later.");
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
    <form onSubmit={handleSearch} className="flex">
      <label className="flex input shadow-md items-center w-full rounded-md">
        <input
          type="text"
          className={inputStyle}
          placeholder="Search by dish name..."
          onChange={(e) => setSearchQuery(e.target.value)}
          value={searchQuery}
        />
        <div className={buttonStyle}>
          <FaSearch size={25} />
        </div>
      </label>
    </form>
  );
}

export default Search;
