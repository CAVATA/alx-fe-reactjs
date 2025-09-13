import React, { useEffect } from 'react';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeList from './components/RecipeList';
import { useRecipeStore } from './stores/recipeStore.js';


export default function App() {
const setRecipes = useRecipeStore(state => state.setRecipes)


// Initialize with a couple of sample recipes on first mount
useEffect(() => {
setRecipes([
{ id: '1', title: 'Classic Pancakes', description: 'Fluffy pancakes served with maple syrup.' },
{ id: '2', title: 'Tomato Pasta', description: 'Quick tomato-based pasta with basil.' }
])
}, [setRecipes])


return (
<div style={{ maxWidth: 900, margin: '0 auto', padding: 20 }}>
<h1>Recipe Sharing App — Vite + Zustand</h1>
<AddRecipeForm />
<hr />
<RecipeList />
</div>
)
}