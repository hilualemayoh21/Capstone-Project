import React, { useState } from "react";
// import { Link } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";
import { FaSearch } from "react-icons/fa";
import Home from "./Home";
import { Link } from "react-router-dom";
function Navigation() {
  const [display, setDisplay] = useState(false);
  const handleDisplay = () => {
    setDisplay(!display);
  };
  return (
    <header>
      <div className="bg-black h-12 fixed w-full md:h-10  flex  z-40 justify-between  text-white items-center px-5  ">
        <div>
          <h2 className="lg:pl-6 p-2">
            Adoy<span className="text-yellow-300">Recipe</span>
          </h2>
        </div>

        <div className="flex gap-6">
          <FaSearch
            size={20}
            className="hover:text-yellow-300 m-2 md:m-0 md:absolute md:top-[10px] md:right-[160px] "
          />

          <button onClick={handleDisplay}>
            <HiMenu className="block md:hidden mr-8" size={35} />
          </button>
        </div>
        <nav
          className={`fixed top-0 left-0 w-[345px]  h-full bg-white text-black shadow-lg z-50  ${
            display ? "block" : "hidden"
          } md:flex md:flex-row md:static md:bg-black md:shadow-none md:w-auto md:m-4 md:py-2`}
        >
          <div className="flex items-center justify-between gap-5 px-4 py-2 md:hidden text-3xl text-black bg-white w-full">
            <h2 className="m-3">
              Adoy<span className="text-yellow-300">Recipe</span>
            </h2>
            <button
              onClick={handleDisplay}
              className="text-black hover:text-yellow-300"
            >
              <HiX size={30} />
            </button>
          </div>

          <div className="flex flex-col  gap-6 px-6 text-md md:gap-8 md:flex-row md:text-md md:text-white md:bg-black ">
            <Link to="/" className="hover:text-yellow-300  ">
              Home
            </Link>
            <Link to="/about" className="hover:text-yellow-300  ">
              About
            </Link>
            <Link to="/news" className="hover:text-yellow-300 ">
              News
            </Link>
            <Link to="/recipe" className="hover:text-yellow-300 ">
              Recipe
            </Link>
            <Link to="/subscribe" className="hover:text-yellow-300  ">
              Subscribe
            </Link>
          </div>
          <div className="    ">
            <button className="text-sm  bg-yellow-200  font-bold my-0  rounded-md  text-center px-4 py-1 hover:bg-button-yellow md:flex  hidden  text-black">
              Sign in
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Navigation;
