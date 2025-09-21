import React from "react";
import useRecipeStore from "./recipeStore";
import { Link } from "react-router-dom";

export default function FavoritesList() {
  const favorites = useRecipeStore(state => state.favorites);
  const recipes = useRecipeStore(state => state.recipes);

  const favoriteRecipes = favorites
    .map(id => recipes.find(r => r.id === id))
    .filter(Boolean);

  if (favoriteRecipes.length === 0) {
    return <p>No favorites yet. Add some!</p>;
  }

  return (
    <div>
      <h2>My Favorites</h2>
      {favoriteRecipes.map(recipe => (
        <div key={recipe.id} style={{ marginBottom: "10px" }}>
          <h3>
            <Link to={`/recipes/${recipe.id}`}>{recipe.title}</Link>
          </h3>
          <p>{recipe.description}</p>
        </div>
      ))}
    </div>
  );
}
