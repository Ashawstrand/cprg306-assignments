"use client";

import { useState, useEffect } from "react";

async function fetchMealIdeas(ingredient) {
  if (!ingredient) return [];

  try {
    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
    );
    const data = await response.json();
    return data.meals || [];
  } catch (error) {
    console.error("Error fetching meal ideas:", error);
    return [];
  }
}

export default function MealIdeas({ ingredient }) {
  const [meals, setMeals] = useState([]);

  async function loadMealIdeas() {
    const mealResults = await fetchMealIdeas(ingredient);
    setMeals(mealResults);
  }

  useEffect(() => {
      loadMealIdeas();
},    [ingredient]);

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800">
        Meal Ideas for {ingredient}</h2>

      {meals.length === 0 ? (
        <p className="text-gray-500">
          No meal ideas found.
        </p>
      ) : (
        <ul className="list-disc list-inside space-y-2">
          {meals.map((meal) => (
            <li key={meal.idMeal} className="text-lg text-gray-700">
              <img
              src={meal.strMealThumb}
              alt={meal.strMeal}
              className="w-32 h-32 object-cover rounded-md mb-3"
              />
              <span className="text-center font-medium">{meal.strMeal}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
