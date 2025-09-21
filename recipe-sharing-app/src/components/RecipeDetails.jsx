import { useParams, Link } from "react-router-dom";
import { useRecipeStore } from "./recipeStore";
import DeleteRecipeButton from "./DeleteRecipeButton";

export default function RecipeDetails() {
  const { id } = useParams();
  const recipe = useRecipeStore((s) => s.recipes.find((r) => r.id === id));

  if (!recipe) return (
    <div>
      <p>Recipe not found.</p>
      <Link to="/">Back to list</Link>
    </div>
  );

  return (
    <div>
      <h2>{recipe.title}</h2>
      <p>{recipe.description}</p>

      <div style={{ marginTop: 12 }}>
        <Link to={`/recipes/${recipe.id}/edit`} style={{ marginRight: 8 }}>Edit</Link>
        <DeleteRecipeButton id={recipe.id} />
      </div>

      <p style={{ marginTop: 16 }}>
        <Link to="/">Back to list</Link>
      </p>
    </div>
  );
}
