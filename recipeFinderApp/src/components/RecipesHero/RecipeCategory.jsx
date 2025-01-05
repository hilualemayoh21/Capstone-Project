import React from "react";

const categoriesImage = [
  {
    url: "/images/foodimage11.jpg",
    title: "Cake",
  },
  {
    url: "/images/foodimage6.jpg",
    title: "Pasta",
  },
  {
    url: "/images/image14.jpg",
    title: "Rice",
  },
  {
    url: "/images/image15.jpg",
    title: "Salad",
  },
  {
    url: "/images/image16.jpg",
    title: "burger",
  },
  {
    url: "/images/image19.jpg",
    title: "Dessert",
  },
  {
    url: "/images/image17.jpg",
    title: "Pizza",
  },
];

function RecipeCategory() {
  return (
    <div className=" w-full ">
      <h2 className="lg:text-4xl text-lg w-full text-center p-2 lg:p-8 font-bold md:mt-14 md:mb-6 md:text-2xl">
        Find Recipes by Category
      </h2>
      <div
        className={`grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4   lg:mx-40 p-2 mx-8 gap-4 md:mx-[8em] `}
      >
        {categoriesImage.map((image, index) => (
          <div
            className={`w-full lg:max-w-[200px] max-w-[120px] h-[35px] md:max-w-[170px] sm:h-[70px] bg-white shadow-md  rounded-md flex justify-center items-center ${
              categoriesImage.length - 1 === index
                ? `transform translate-x-24 md:translate-x-60 md:-mx-8  lg:translate-x-60 lg:-mx-16`
                : ""
            } ${
              index >= 4 && index < 7
                ? "lg:trasnform lg:translate-x-40 lg:px-10"
                : ""
            } hover:scale-110`}
            key={index}
          >
            <img
              src={image.url}
              className="lg:w-[60px] lg:h-[60px] w-8 h-8 object-cover   lg:transform lg:-translate-x-8
              rounded-full border-2 border-collapse"
            />
            <h3>{image.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RecipeCategory;
