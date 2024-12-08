import React from "react";
import recipe_image from "./recipe_image.jpg";
function RecipeList() {
  return (
    <div>
      <img
        src={recipe_image}
        className="mx-auto my-10"
        width={80}
        height={80}
      />
      <p className="text-center">Creamy Herb Pasta with Rustic Charm</p>
    </div>
  );
}

export default RecipeList;
