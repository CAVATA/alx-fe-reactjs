// src/components/recipeStore.js
import { create } from 'zustand';

/**
 * Simple recommendation helper:
 * - look at favorite recipes' ingredients, build a weight map
 * - score all non-favorited recipes by ingredient overlap
 * - return top N recommendations
 */
const recommendBasedOnFavorites = (recipes, favoritesIds, topN = 5) => {
  if (!favoritesIds || favoritesIds.length === 0) {
    // fallback: return first topN recipes
    return recipes.slice(0, topN);
  }

  // collect ingredients frequency from favorites
  const favRecipes = recipes.filter((r) => favoritesIds.includes(r.id));
  const freq = {};
  favRecipes.forEach((r) => {
    (r.ingredients || []).forEach((ing) => {
      const k = String(ing).toLowerCase();
      freq[k] = (freq[k] || 0) + 1;
    });
  });

  // score non-favorite recipes
  const candidates = recipes
    .filter((r) => !favoritesIds.includes(r.id))
    .map((r) => {
      const ing = r.ingredients || [];
      const score = ing.reduce((s, i) => s + (freq[String(i).toLowerCase()] || 0), 0);
      return { recipe: r, score };
    });

  // sort by score desc, then return recipes (non-zero scores first)
  candidates.sort((a, b) => b.score - a.score);
  return candidates.slice(0, topN).map((c) => c.recipe);
};

export const useRecipeStore = create((set, get) => {
  // sample seed data (string ids)
  const initial = [
    { id: '1', title: 'Spaghetti', description: 'Tomato garlic pasta', ingredients: ['pasta','tomato','garlic'], time: 30 },
    { id: '2', title: 'Pancakes', description: 'Fluffy pancakes', ingredients: ['flour','egg','milk'], time: 20 },
    { id: '3', title: 'Tomato Soup', description: 'Warm tomato soup', ingredients: ['tomato','onion','garlic'], time: 25 },
    { id: '4', title: 'Garlic Bread', description: 'Toasted garlic bread', ingredients: ['bread','garlic','butter'], time: 10 },
    { id: '5', title: 'Fruit Salad', description: 'Fresh fruit mix', ingredients: ['apple','banana','orange'], time: 10 },
  ];

  return {
    // base data
    recipes: initial,
    // search/filter (if you have those features)
    searchTerm: '',
    filters: { ingredient: '', maxTime: null },
    filteredRecipes: initial.slice(),

    // favorites & recommendations
    favorites: [],                // array of recipe ids (strings)
    recommendations: [],          // array of recipe objects

    /* ----- actions ----- */

    // search/filter actions (keeps filteredRecipes in sync)
    setSearchTerm: (term) => {
      set({ searchTerm: term });
      const state = get();
      // simple inline filter: search in title/description/ingredients
      const t = (term || '').toLowerCase().trim();
      const filtered = state.recipes.filter((r) => {
        if (!t) return true;
        const hay = ((r.title || '') + ' ' + (r.description || '') + ' ' + ((r.ingredients||[]).join(' '))).toLowerCase();
        return hay.includes(t);
      });
      set({ filteredRecipes: filtered });
    },

    setFilters: (newFilters) => {
      set((s) => ({ filters: { ...s.filters, ...newFilters } }));
      const state = get();
      // re-use filteredRecipes logic (simple)
      const t = (state.searchTerm || '').toLowerCase().trim();
      const ingredient = (state.filters?.ingredient || '').toLowerCase().trim();
      const maxTime = state.filters?.maxTime ?? null;
      const filtered = state.recipes.filter((r) => {
        if (t) {
          const hay = ((r.title || '') + ' ' + (r.description || '') + ' ' + ((r.ingredients||[]).join(' '))).toLowerCase();
          if (!hay.includes(t)) return false;
        }
        if (ingredient) {
          const has = (r.ingredients || []).some((ing) => String(ing).toLowerCase().includes(ingredient));
          if (!has) return false;
        }
        if (maxTime !== null && typeof r.time !== 'undefined') {
          if (Number(r.time) > Number(maxTime)) return false;
        }
        return true;
      });
      set({ filteredRecipes: filtered });
    },

    // CRUD for recipes (keep filtered/recommendations updated)
    addRecipe: (newRecipe) => {
      set((state) => {
        const recipes = [...state.recipes, newRecipe];
        // recompute filteredRecipes and recommendations
        const filteredRecipes = state.searchTerm ? recipes.filter((r) => ((r.title+ ' '+ (r.description||'') + ' ' + ((r.ingredients||[]).join(''))).toLowerCase()).includes(state.searchTerm.toLowerCase()) ) : recipes;
        const recommendations = recommendBasedOnFavorites(recipes, state.favorites);
        return { recipes, filteredRecipes, recommendations };
      });
    },

    updateRecipe: (updatedRecipe) => {
      set((state) => {
        const recipes = state.recipes.map((r) => (r.id === updatedRecipe.id ? { ...r, ...updatedRecipe } : r));
        const filteredRecipes = state.filteredRecipes.map((r) => (r.id === updatedRecipe.id ? { ...r, ...updatedRecipe } : r));
        const recommendations = recommendBasedOnFavorites(recipes, state.favorites);
        return { recipes, filteredRecipes, recommendations };
      });
    },

    deleteRecipe: (id) => {
      set((state) => {
        const recipes = state.recipes.filter((r) => r.id !== id);
        const favorites = state.favorites.filter((fid) => fid !== id);
        const filteredRecipes = state.filteredRecipes.filter((r) => r.id !== id);
        const recommendations = recommendBasedOnFavorites(recipes, favorites);
        return { recipes, favorites, filteredRecipes, recommendations };
      });
    },

    // Favorites actions
    addFavorite: (recipeId) => {
      set((state) => {
        if (state.favorites.includes(recipeId)) return {}; // no-op
        const favorites = [...state.favorites, recipeId];
        const recommendations = recommendBasedOnFavorites(state.recipes, favorites);
        return { favorites, recommendations };
      });
    },

    removeFavorite: (recipeId) => {
      set((state) => {
        const favorites = state.favorites.filter((id) => id !== recipeId);
        const recommendations = recommendBasedOnFavorites(state.recipes, favorites);
        return { favorites, recommendations };
      });
    },

    toggleFavorite: (recipeId) => {
      const state = get();
      if (state.favorites.includes(recipeId)) {
        get().removeFavorite(recipeId);
      } else {
        get().addFavorite(recipeId);
      }
    },

    // allow manual generation (if needed)
    generateRecommendations: () => {
      const state = get();
      const recommendations = recommendBasedOnFavorites(state.recipes, state.favorites);
      set({ recommendations });
    },

    // set full list
    setRecipes: (recipes) => {
      const state = get();
      const filteredRecipes = (state.searchTerm ? recipes.filter((r) => ((r.title+ ' '+ (r.description||'') + ' ' + ((r.ingredients||[]).join(''))).toLowerCase()).includes(state.searchTerm.toLowerCase()) ) : recipes);
      const recommendations = recommendBasedOnFavorites(recipes, state.favorites);
      set({ recipes, filteredRecipes, recommendations });
    },
  };
});

export default useRecipeStore;
