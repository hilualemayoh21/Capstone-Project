import React from "react";

function About() {
  return (
    <div className="flex flex-col items-center justify-center  md:pt-36 md:pb-30 py-16  max-w-screen-2xl text-center md:gap-14">
      <div className="p-2 text-button-yellow">
        <h2 className="text-3xl font-extrabold p-4">About Us</h2>
        <h3 className="text-hover-button font-bold text-lg p-2 md:p-4">
          Welcome to Recipe Finder!
        </h3>
        <p className="lg:px-44 text-yellow-300 lg:text-xl md:text-xl md:pb-14 font-semibold ">
          At Recipe Finder, we believe that cooking should be easy, fun, and
          accessible to everyone. Whether you’re a seasoned chef or just
          starting your culinary journey, we’re here to inspire, guide, and
          empower you to create delicious meals in your own kitchen.
        </p>
      </div>
      <div className="p-4 md:p-10 text-button-yellow">
        <h2 className="text-3xl font-extrabold p-4">Our Mission</h2>
        <h4 className="text-hover-button font-bold text-lg p-2 md:p-4">
          Our mission is simple
        </h4>
        <p className="lg:px-44 text-yellow-300 lg:text-xl md:text-xl font-semibold text-md md:pb-14">
          To bring people together through the love of food. We aim to provide
          an extensive collection of recipes, from everyday meals to gourmet
          dishes, tailored to your taste and dietary preferences.
        </p>
      </div>
    </div>
  );
}

export default About;
