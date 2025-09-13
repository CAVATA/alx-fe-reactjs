import React, { useState } from 'react'
import { useRecipeStore } from '../stores/recipeStore.js'


export default function AddRecipeForm() {
const addRecipe = useRecipeStore(state => state.addRecipe)
const [title, setTitle] = useState('')
const [description, setDescription] = useState('')


const handleSubmit = (e) => {
e.preventDefault()
const trimmed = title.trim()
if (!trimmed) return


addRecipe({ id: Date.now().toString(), title: trimmed, description: description.trim() })
setTitle('')
setDescription('')
}


return (
<form onSubmit={handleSubmit} style={{ display: 'grid', gap: 8, marginBottom: 16 }}>
<label style={{ display: 'grid', gap: 4 }}>
<span>Title</span>
<input
type="text"
value={title}
onChange={(e) => setTitle(e.target.value)}
placeholder="Recipe title"
required
style={{ padding: 8, borderRadius: 6, border: '1px solid #d1d5db' }}
/>
</label>


<label style={{ display: 'grid', gap: 4 }}>
<span>Description</span>
<textarea
value={description}
onChange={(e) => setDescription(e.target.value)}
placeholder="Short description or steps"
rows={4}
style={{ padding: 8, borderRadius: 6, border: '1px solid #d1d5db' }}
/>
</label>


<div>
<button type="submit" style={{ padding: '8px 12px', borderRadius: 6 }}>Add Recipe</button>
</div>
</form>
)
}