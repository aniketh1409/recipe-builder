import axios from "axios";

const API_KEY = "3e61449337874d9b97ad642d55793bd3"; 
const BASE_URL = "https://api.spoonacular.com";

// Function to fetch recipes based on a search term
export const fetchRecipes = async (query) => {
  try {
    const response = await axios.get(`${BASE_URL}/recipes/complexSearch`, {
      params: {
        apiKey: API_KEY,
        query: query,
        number: 3, 
        instructionsRequired: true, 
      },
    });
    return response.data.results;
  } catch (error) {
    console.error("Error fetching recipes:", error);
    return [];
  }
};
