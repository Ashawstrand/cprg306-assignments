"use client";

import { useState, useEffect } from "react";

// Function to fetch meal ideas from TheMealDB API
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

  // Function to load meal ideas and update state
  async function loadMealIdeas() {
    const mealResults = await fetchMealIdeas(ingredient);
    setMeals(mealResults);
  }

  // Re-run loadMealIdeas whenever the ingredient changes
  useEffect(() => {
    loadMealIdeas();
  }, [ingredient]);

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800">
        Meal Ideas for <span className="text-indigo-600">{ingredient}</span>
      </h2>

      {meals.length === 0 ? (
        <p className="text-gray-500">No meal ideas found. Try another ingredient.</p>
      ) : (
        <ul className="list-disc list-inside space-y-2">
          {meals.map((meal) => (
            <li key={meal.idMeal} className="text-lg text-gray-700">
              {meal.strMeal}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
