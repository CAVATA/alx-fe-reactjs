import { useRecipeStore } from "./recipeStore";
import { useNavigate } from "react-router-dom";

export default function DeleteRecipeButton({ id }) {
  const deleteRecipe = useRecipeStore(state => state.deleteRecipe);
  const navigate = useNavigate();

  return (
    <button
      onClick={() => {
        deleteRecipe(id);
        navigate("/");
      }}
    >
      Delete Recipe
    </button>
  );
}
