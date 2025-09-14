// src/components/RecipeDetails.jsx
import { useParams, Link } from 'react-router-dom';
import { useRecipeStore } from './recipeStore';

export default function RecipeDetails() {
  const { id } = useParams();
  const recipe = useRecipeStore((state) =>
    state.recipes.find((r) => r.id === id)
  );

  if (!recipe) return (
    <div>
      <p>Recipe not found.</p>
      <Link to="/">Back</Link>
    </div>
  );

  return (
    <div>
      <h2>{recipe.title}</h2>
      <p>{recipe.description}</p>
      <Link to="/">Back</Link>
    </div>
  );
}
