import { useRecipeStore } from './recipeStore';
import { useNavigate } from 'react-router-dom';

export default function DeleteRecipeButton({ id }) {
  const deleteRecipe = useRecipeStore((s) => s.deleteRecipe);
  const navigate = useNavigate();

  const handleDelete = () => {
    if (!confirm('Delete this recipe?')) return;
    deleteRecipe(id);
    navigate('/'); // go back to list
  };

  return <button onClick={handleDelete}>Delete</button>;
}
