import React, { useState, useEffect } from "react";

function Slider() {
  const [currentIndex, setCurrentIndex] = useState(0);
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

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const totalImages = images.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev === totalImages - 1 ? 0 : prev + 1));
    }, 6000);
    return () => clearInterval(interval);
  }, [totalImages]);

  return (
    <div className="lg:mt-12 mx-auto z-10">
      <div className="relative max-w-[1140px] lg:-inset-y-28 px-16 lg:px-0 overflow-hidden">
        <div className="flex overflow-hidden relative lg:transform lg:-translate-y-30 z-20 right-0 lg:pl-20">
          {/* Images */}
          {images.length > 0 &&
            images
              .map((_, i) => images[(currentIndex + i) % images.length])
              .map((image, index) => (
                <div
                  key={index}
                  className={`flex-shrink-0 w-full sm:w-[24%] h-[150px] sm:h-[300px] md:h-[250px] mx-4 sm:mx-4 relative ${
                    index === images.length - 1
                      ? "w-full sm:w-[28%] z-40 mx-0"
                      : "mr-4"
                  }`}
                >
                  <img
                    src={image.img}
                    alt={image.title}
                    className="w-full h-full object-cover rounded-md"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 rounded-md"></div>
                  <h3 className="absolute bottom-4 left-4 text-white text-sm font-bold">
                    {image.title}
                  </h3>
                </div>
              ))}
          <button
            className="absolute left-12  top-1/2 transform -translate-y-1/2 lg:-translate-x-52
             bg-white p-2 rounded-full shadow-md hover:bg-gray-200"
            aria-label="Previous Slide"
            onClick={handlePrev}
          >
            &#10094;
          </button>
          <button
            className="absolute right-8 lg:right-4 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-200"
            aria-label="Next Slide"
            onClick={handleNext}
          >
            &#10095;
          </button>
        </div>
      </div>
    </div>
  );
}

export default Slider;
