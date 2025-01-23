import React from "react";

const RecipeCard = ({ title, image, vegetarian, sourceUrl, nutrition }) => (
  <div className="bg-white rounded-xl shadow-md relative">
    <img
      src={image}
      alt={title}
      className="w-full object-cover rounded-t-xl"
      style={{ aspectRatio: "auto" }}
    />
    <div className="p-4">
      <div className="mb-6">
        <div className={`text-${vegetarian ? "green" : "red"}-500 font-bold my-2`}>
          {vegetarian ? "Vegetarian" : "Non-Vegetarian"}
        </div>
        <h3 className="text-xl font-bold">{title}</h3>
      </div>
      <div className="border border-gray-100 mb-5"></div>
      <div className="text-gray-600">
        <p>
          Calories:{" "}
          {nutrition?.calories || "N/A"} kcal
        </p>
        <p>
          Protein:{" "}
          {nutrition?.protein || "N/A"} 
        </p>
      </div>
      <div className="flex flex-col lg:flex-row justify-between mt-4">
        <a
          href={sourceUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="h-[36px] bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-lg text-center text-sm"
        >
          Read More
        </a>
      </div>
    </div>
  </div>
);

export default RecipeCard;
