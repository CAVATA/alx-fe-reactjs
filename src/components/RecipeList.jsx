import React from 'react'
import { useRecipeStore } from '../stores/recipeStore.js';


export default function RecipeList() {
const recipes = useRecipeStore(state => state.recipes)


if (!recipes || recipes.length === 0) {
return <p>No recipes yet. Add one using the form above.</p>
}


return (
<div>
{recipes.map((recipe) => (
<article key={recipe.id} style={{ border: '1px solid #e5e7eb', padding: 12, borderRadius: 8, marginBottom: 12 }}>
<h3 style={{ margin: '0 0 6px 0' }}>{recipe.title}</h3>
<p style={{ margin: 0 }}>{recipe.description}</p>
</article>
))}
</div>
)
}