import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  favorites: [],
};

const favoriteSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addFavorite: (state, action) => {
      state.favorites.push(action.payload); 
    },
    removeFavorite: (state, action) => {
      state.favorites = state.favorites.filter(
        (fav) => fav.id !== action.payload
      );
    },
    clearFavorites: (state) => {
      state.favorites = [];
    },
  },
});

export const { addFavorite, removeFavorite, clearFavorites } = favoriteSlice.actions;
export default favoriteSlice.reducer;
