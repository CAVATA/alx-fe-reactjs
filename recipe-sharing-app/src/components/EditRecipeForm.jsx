import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useRecipeStore } from "./recipeStore";

export default function EditRecipeForm() {
  const { id } = useParams();
  const recipe = useRecipeStore((s) => s.recipes.find((r) => r.id === id));
  const updateRecipe = useRecipeStore((s) => s.updateRecipe);
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    if (recipe) {
      setTitle(recipe.title || "");
      setDescription(recipe.description || "");
    }
  }, [recipe]);

  if (!recipe) return (
    <div>
      <p>Recipe not found.</p>
      <button onClick={() => navigate("/")}>Back</button>
    </div>
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;
    updateRecipe({ id: recipe.id, title: title.trim(), description: description.trim() });
    navigate(`/recipes/${recipe.id}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Edit Recipe</h2>
      <input value={title} onChange={(e) => setTitle(e.target.value)} style={{display:"block", marginBottom:8, width:320}} />
      <textarea value={description} onChange={(e) => setDescription(e.target.value)} style={{display:"block", marginBottom:8, width:320, height:100}} />
      <div>
        <button type="submit">Save</button>
        <button type="button" onClick={() => navigate(`/recipes/${recipe.id}`)} style={{ marginLeft: 8 }}>Cancel</button>
      </div>
    </form>
  );
}
