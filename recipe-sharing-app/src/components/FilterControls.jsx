// src/components/FilterControls.jsx

import React from 'react';
import { useRecipeStore } from './recipeStore';

export default function FilterControls() {
  const { filters, setFilters } = useRecipeStore((s) => ({
    filters: s.filters,
    setFilters: s.setFilters,
  }));

  return (
    <div style={{ marginBottom: 12 }}>
      <input
        placeholder="Filter by ingredient (e.g. tomato)"
        value={filters.ingredient}
        onChange={(e) => setFilters({ ingredient: e.target.value })}
        style={{ marginRight: 8, padding: 6 }}
      />
      <input
        type="number"
        placeholder="Max time (minutes)"
        value={filters.maxTime ?? ''}
        onChange={(e) =>
          setFilters({ maxTime: e.target.value === '' ? null : Number(e.target.value) })
        }
        style={{ width: 140, padding: 6 }}
      />
    </div>
  );
}
