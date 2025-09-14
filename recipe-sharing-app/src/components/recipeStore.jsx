import create from 'zustand';

export const useRecipeStore = create((set) => ({
  recipes: [
    { id: '1', title: 'Spaghetti', description: 'Delicious spaghetti recipe' },
    { id: '2', title: 'Pancakes', description: 'Fluffy pancakes recipe' },
  ],
  
}));
