// src/components/recipeStore.js
import { create } from 'zustand';

/**
 * Helper to filter recipes according to search term and filters.
 * - term: string (searches title, description, ingredients)
 * - filters: { ingredient: string, maxTime: number|null }
 */
const filterHelper = (recipes, term = '', filters = {}) => {
  const t = (term || '').toLowerCase().trim();
  const ingredient = (filters?.ingredient || '').toLowerCase().trim();
  const maxTime = filters?.maxTime ? Number(filters.maxTime) : null;

  return recipes.filter((r) => {
    // search by title/description/ingredients
    if (t) {
      const hay = (
        (r.title || '') +
        ' ' +
        (r.description || '') +
        ' ' +
        ((r.ingredients && r.ingredients.join(' ')) || '')
      ).toLowerCase();
      if (!hay.includes(t)) return false;
    }

    // filter by ingredient
    if (ingredient) {
      const has = (r.ingredients || []).some((ing) =>
        String(ing).toLowerCase().includes(ingredient)
      );
      if (!has) return false;
    }

    // filter by maxTime
    if (maxTime !== null && typeof r.time !== 'undefined') {
      if (Number(r.time) > maxTime) return false;
    }

    return true;
  });
};

export const useRecipeStore = create((set, get) => {
  // initial example recipes (strings for id)
  const initial = [
    {
      id: '1',
      title: 'Spaghetti',
      description: 'Delicious spaghetti with tomato sauce.',
      ingredients: ['pasta', 'tomato', 'garlic'],
      time: 30
    },
    {
      id: '2',
      title: 'Pancakes',
      description: 'Fluffy pancakes with syrup.',
      ingredients: ['flour', 'egg', 'milk'],
      time: 20
    },
  ];

  return {
    // base data
    recipes: initial,
    // search & filter state
    searchTerm: '',
    filters: { ingredient: '', maxTime: null },
    filteredRecipes: initial.slice(),

    // actions
    // set search term and recompute filteredRecipes
    setSearchTerm: (term) => {
      set({ searchTerm: term });
      const state = get();
      const filtered = filterHelper(state.recipes, term, state.filters);
      set({ filteredRecipes: filtered });
    },

    // set filters (object) and recompute
    setFilters: (newFilters) => {
      set((state) => ({ filters: { ...state.filters, ...newFilters } }));
      const state = get();
      const filtered = filterHelper(state.recipes, state.searchTerm, state.filters);
      set({ filteredRecipes: filtered });
    },

    // recompute filteredRecipes explicitly (optional)
    filterRecipes: () => {
      const state = get();
      const filtered = filterHelper(state.recipes, state.searchTerm, state.filters);
      set({ filteredRecipes: filtered });
    },

    // CRUD operations keep filteredRecipes up-to-date
    addRecipe: (newRecipe) => {
      set((state) => {
        const recipes = [...state.recipes, newRecipe];
        const filtered = filterHelper(recipes, state.searchTerm, state.filters);
        return { recipes, filteredRecipes: filtered };
      });
    },

    updateRecipe: (updatedRecipe) => {
      set((state) => {
        const recipes = state.recipes.map((r) =>
          r.id === updatedRecipe.id ? { ...r, ...updatedRecipe } : r
        );
        const filtered = filterHelper(recipes, state.searchTerm, state.filters);
        return { recipes, filteredRecipes: filtered };
      });
    },

    deleteRecipe: (id) => {
      set((state) => {
        const recipes = state.recipes.filter((r) => r.id !== id);
        const filtered = filterHelper(recipes, state.searchTerm, state.filters);
        return { recipes, filteredRecipes: filtered };
      });
    },

    // utility: set full recipes (useful if loading from API)
    setRecipes: (recipes) => {
      set((state) => {
        const filtered = filterHelper(recipes, state.searchTerm, state.filters);
        return { recipes, filteredRecipes: filtered };
      });
    },
  };
});

export default useRecipeStore;
