import React from "react";
import { FaEnvelope } from "react-icons/fa";
import { MdSend } from "react-icons/md";

function SubscriptionForm() {
  return (
    <div className="bg-button-yellow h-[220px] justify-center items-center md:max-w-screen-2xl flex flex-col gap-10 md:pt-[10em] md:pb-[5em]">
      <div className=" ">
        <h2 className="md:text-3xl lg:ml-7 md:pt-2 font-bold">
          Subscribe Our Newsletter
        </h2>
        <h4 className="lg:ml-7 lg:my-2 text-gray-700 md:text-lg md:pb-1 lg:text-lg text-[8px]">
          Subscribe for exclusive updates and offers!
        </h4>
        <div className="flex flex-row lg:mb-12 ">
          <span>
            <FaEnvelope
              className="text-gray-700 transform translate-x-8 my-1 z-50"
              size={28}
            />
          </span>
          <input
            type="text"
            placeholder="Enter  Your Email"
            className="lg:px-10 focus:outline-none w-18 px-2 md:w-[21em] transform -translate-x-8 lg:translate-x-1"
          />
          <div className="bg-gray-600 lg:h-9 lg:w-10 w-8 h-9 flex items-center justify-center hover:scale-110 transform -translate-x-8">
            <span>
              <MdSend size={32} color="black" />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SubscriptionForm;
