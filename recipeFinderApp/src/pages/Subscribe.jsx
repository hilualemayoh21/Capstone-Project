import React from "react";
import SubscriptionForm from "../components/RecipesHero/SubscriptionForm";

function Subscribe() {
  return (
    <div className="pt-20 bg-button-yellow md:pt-40 lg:pt-9 ">
      <div className="text-center p-4">
        <h2 className="text-4xl font-bold text-center pt-10 ">
          Never Miss a Recipe!
        </h2>
        <h4 className="text-xl py-4 md:py-1 ">
          Get the Best Recipes Straight to Your Inbox
        </h4>
        <p className="text-lg py-16  md:pt-6 md:pb-2 lg:px-[20em]">
          Discover delicious recipes, cooking tips, and meal inspirations every
          week. Subscribe to stay updated and turn your kitchen into a gourmet
          paradise!
        </p>
      </div>
      <div className="md:pb-30 pb-20">
        <SubscriptionForm />
      </div>
    </div>
  );
}

export default Subscribe;
