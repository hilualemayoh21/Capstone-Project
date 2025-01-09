import React from "react";
import SubscriptionForm from "../components/RecipesHero/SubscriptionForm";

function Subscribe() {
  return (
    <div className="pt-16 bg-button-yellow ">
      <div className="text-center p-4">
        <h2 className="text-4xl font-bold text-center p-2 ">
          Never Miss a Recipe!
        </h2>
        <h4 className="text-xl p-1 ">
          Get the Best Recipes Straight to Your Inbox
        </h4>
        <p className="text-md p-2 lg:px-[20em]">
          Discover delicious recipes, cooking tips, and meal inspirations every
          week. Subscribe to stay updated and turn your kitchen into a gourmet
          paradise!
        </p>
      </div>
      <div className="md:pb-8">
        <SubscriptionForm />
      </div>
    </div>
  );
}

export default Subscribe;
