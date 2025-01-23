import React, { useEffect, useState } from "react";
import { fetchRecipes } from "../utils/fetchRecipes";
import getMealType from "../utils/getMealType";
import RecipeCard from "./RecipeCards";

const TodaysRecommendation = () => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getRecipes = async () => {
      const allRecipes = await fetchRecipes();
      console.log("Fetched Recipes: ", allRecipes); // Log recipes
      if (allRecipes && allRecipes.length > 0) {
        const shuffledRecipes = allRecipes
          .sort(() => 0.5 - Math.random())
          .slice(0, 3);
        setRecipes(shuffledRecipes);
      }
      setLoading(false);
    };

    getRecipes();
  }, []);

  const mealType = getMealType();

  return (
    <section className="bg-blue-50 px-4 py-10">
      <div className="container-xl lg:container m-auto">
        <h2 className="text-3xl font-bold text-yellow-800 mb-6 text-center">
          {mealType} Recommendations
        </h2>
        {loading ? (
          <p>Loading recipes...</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {recipes.map((recipe) => (
              <RecipeCard
                key={recipe.id}
                title={recipe.title}
                image={recipe.image}
                vegetarian={recipe.vegetarian}
                sourceUrl={recipe.sourceUrl}
                nutrition={recipe.nutrition}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default TodaysRecommendation;

