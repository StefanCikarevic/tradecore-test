import React, { useState } from 'react';

interface Genre {
  id: number;
  name: string;
}

interface StateContextInterface {
  selectedGenres: Genre;
  setSelectedGenres: any;
}

export const StateContext = React.createContext({} as StateContextInterface);

export function StateProvider({ children }: { children: React.ReactNode }) {
  const [selectedGenres, setSelectedGenres] = useState<Genre>({} as Genre);

  const value = { selectedGenres, setSelectedGenres };
  return (
    <StateContext.Provider value={value}>{children}</StateContext.Provider>
  );
}
