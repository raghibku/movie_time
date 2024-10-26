"use client"; // Ensure this runs on the client side

import React, { createContext, useContext, useState, ReactNode } from 'react';

// Define the shape of the context value
interface FavoriteMoviesContextType {
  favoriteMovies: number[];
  setFavoriteMovies: React.Dispatch<React.SetStateAction<number[]>>;
}

// Create the context with an initial undefined value
const FavoriteMoviesContext = createContext<FavoriteMoviesContextType | undefined>(undefined);

// Define the provider component
export const FavoriteMoviesProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [favoriteMovies, setFavoriteMovies] = useState<number[]>([1184918]);

  return (
    <FavoriteMoviesContext.Provider value={{ favoriteMovies, setFavoriteMovies }}>
      {children}
    </FavoriteMoviesContext.Provider>
  );
};

// Custom hook for easier context consumption
export const useFavoriteMovies = (): FavoriteMoviesContextType => {
  const context = useContext(FavoriteMoviesContext);
  if (!context) {
    throw new Error('useFavoriteMovies must be used within a FavoriteMoviesProvider');
  }
  return context;
};
