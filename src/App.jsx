
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

import Header from "./components/Header";
import WelcomeMessage from "./components/WelcomeMessage";
import UserProfile from "./components/UserProfile";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App" style={{ fontFamily: "Segoe UI, Arial, sans-serif", padding: "16px" }}>
      <Header />
      <WelcomeMessage />
      <div style={{ display: "flex", gap: "16px", flexWrap: "wrap", alignItems: "flex-start" }}>
        <UserProfile name="Alice" age="25" bio="Loves hiking and photography" />
        <UserProfile name="Bob" age="30" bio="Frontend dev, coffee lover" />
      </div>
      <MainContent />
      <Footer />
    </div>
  );
}


