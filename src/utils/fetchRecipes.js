import axios from "axios";

const apiKey = "3e61449337874d9b97ad642d55793bd3";

// Fetch recipe and nutrition details for each
export const fetchRecipes = async (count = 10) => {
  try {
    const response = await axios.get(
      `https://api.spoonacular.com/recipes/random?number=${count}&apiKey=${apiKey}`
    );
    
    // Fetch nutrition data for each recipe
    const recipesWithNutrition = await Promise.all(
      response.data.recipes.map(async (recipe) => {
        const nutritionResponse = await axios.get(
          `https://api.spoonacular.com/recipes/${recipe.id}/nutritionWidget.json`,
          {
            params: {
              apiKey: apiKey
            }
          }
        );
        recipe.nutrition = nutritionResponse.data;
        return recipe;
      })
    );

    return recipesWithNutrition;
  } catch (error) {
    console.error("Error fetching recipes:", error);
    return [];
  }
};


