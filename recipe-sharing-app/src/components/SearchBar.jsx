
import useRecipeStore from "./recipeStore"; // adjust if recipeStore path differs

export default function SearchBar() {
  const setSearchTerm = useRecipeStore((state) => state.setSearchTerm);
  const filterRecipes = useRecipeStore((state) => state.filterRecipes);

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
    filterRecipes(); // trigger filtering
  };

  return (
    <input
      type="text"
      placeholder="Search recipes..."
      onChange={handleChange}
      style={{ padding: "8px", width: "100%", marginBottom: "12px" }}
    />
  );
}
