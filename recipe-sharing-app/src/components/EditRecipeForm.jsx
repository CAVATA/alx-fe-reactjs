import { useParams, useNavigate } from "react-router-dom";
import { useRecipeStore } from "./recipeStore";
import { useState, useEffect } from "react";

export default function EditRecipeForm() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { recipes, updateRecipe } = useRecipeStore(state => ({
    recipes: state.recipes,
    updateRecipe: state.updateRecipe,
  }));

  const recipe = recipes.find(r => r.id === id);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    if (recipe) {
      setTitle(recipe.title);
      setDescription(recipe.description);
    }
  }, [recipe]);

  const handleSubmit = e => {
    e.preventDefault();
    updateRecipe(id, { title, description });
    navigate(`/recipes/${id}`);
  };

  if (!recipe) return <p>Recipe not found.</p>;

  return (
    <form onSubmit={handleSubmit}>
      <h2>Edit Recipe</h2>
      <input value={title} onChange={e => setTitle(e.target.value)} required />
      <textarea
        value={description}
        onChange={e => setDescription(e.target.value)}
        required
      />
      <button type="submit">Save</button>
    </form>
  );
}
