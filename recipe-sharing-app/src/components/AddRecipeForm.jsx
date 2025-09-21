import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRecipeStore } from "./recipeStore";

export default function AddRecipeForm() {
  const addRecipe = useRecipeStore((s) => s.addRecipe);
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;
    const newRecipe = {
      id: Date.now().toString(),
      title: title.trim(),
      description: description.trim(),
    };
    addRecipe(newRecipe);
    setTitle("");
    setDescription("");
    navigate(`/recipes/${newRecipe.id}`);
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: 16 }}>
      <input
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        style={{ display: "block", marginBottom: 8, width: 320 }}
      />
      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        style={{ display: "block", marginBottom: 8, width: 320, height: 100 }}
      />
      <button type="submit">Add Recipe</button>
    </form>
  );
}
