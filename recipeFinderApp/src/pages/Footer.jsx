import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
function Footer() {
  return (
    <div className="mx-auto w-full bg-gray-900 -mt-3 text-zinc-500 h-[180px] lg:h-[350px]">
      <h2 className=" text-white text-center lg:pt-7 text-2xl ">
        Adoy<span className="text-yellow-300">Recipe</span>
      </h2>
      <div className="flex lg:justify-between  gap-2 px-4 lg:px-28 lg:py-8">
        <div className="flex flex-col lg:gap-4 text-[8px] ">
          <h3 className="lg:text-lg text-white  ">Explore</h3>
          <p>Home</p>
          <p>About Us</p>
          <p>News</p>
          <p>Contact</p>
        </div>
        <div className="lg:border-l-2 lg:border-gray-50 lg:h-[12em]"></div>
        <div className="flex flex-col lg:gap-2 text-[8px]">
          <h3 className="lg:text-lg  text-white">Recipes</h3>
          <p>Featured Recipes</p>
          <p>Newest Recipes</p>
          <p>Share Your Recipe</p>
        </div>
        <div className="lg:border-l-2 lg:border-gray-50 lg:h-[12em] "></div>
        <div className="flex flex-col lg:gap-2 text-[8px]">
          <h3 className="text-white lg:text-lg">Contact</h3>
          <p className="">
            123 Abay Street Mekelle, <br /> Tigray Ethiopia P.O. Box: 1234
          </p>
          <p>Phone: +2510-122-679</p>
          <p>Support Adeyrecipe.com</p>
        </div>
        <div className="lg:border-l-2 lg:border-gray-50 lg:h-[12em]"></div>
        {/* Vertical Line */}
        <div className="text-[8px]">
          <h3 className="lg:text-lg text-white text-[8px] transform -translate-x-1">
            Social Media
          </h3>
          <div className="text-black flex gap-2 mt-3 flex-col lg:flex-row text-[8px]">
            <div className="lg:w-7 lg:h-7 w-4 h-4 bg-white rounded-full flex items-center justify-center  hover:scale-110">
              <FontAwesomeIcon icon={faFacebook} size="sm" />
            </div>
            <div className="flex justify-center items-center bg-white lg:w-7 lg:h-7 w-4 h-4 rounded-full hover:scale-110 ">
              <FontAwesomeIcon icon={faTwitter} size="sm" />
            </div>
            <div className="flex items-center justify-center bg-white lg:w-7 lg:h-7 w-4 h-4 rounded-full hover:scale-110">
              <FontAwesomeIcon icon={faInstagram} size="sm" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;