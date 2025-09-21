import { Link } from "react-router-dom";
import { useRecipeStore } from "./recipeStore";
import DeleteRecipeButton from "./DeleteRecipeButton";

export default function RecipeList() {
  const recipes = useRecipeStore((s) => s.recipes) || [];

  if (recipes.length === 0) return <p>No recipes yet.</p>;

  return (
    <div>
      <h2>Recipe List</h2>
      {recipes.map((r) => (
        <div key={r.id} style={{ border: "1px solid #ddd", padding: 8, marginBottom: 8 }}>
          <h3><Link to={`/recipes/${r.id}`}>{r.title}</Link></h3>
          <p>{r.description?.slice(0, 150)}</p>
          <div>
            <Link to={`/recipes/${r.id}/edit`} style={{ marginRight: 8 }}>Edit</Link>
            <DeleteRecipeButton id={r.id} />
          </div>
        </div>
      ))}
    </div>
  );
}
