// src/components/recipeStore.js
import { create } from 'zustand';

export const useRecipeStore = create(set => ({
  recipes: [],
  addRecipe: recipe =>
    set(state => ({ recipes: [...state.recipes, recipe] })),
  updateRecipe: updated =>
    set(state => ({
      recipes: state.recipes.map(r =>
        r.id === updated.id ? updated : r
      )
    })),
  deleteRecipe: id =>
    set(state => ({
      recipes: state.recipes.filter(r => r.id !== id)
    })),
}));
