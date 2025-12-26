import React, { createContext, useContext, useState } from "react";
import { Surah } from "../types/quran";

type AppContextType = {
  lastRead: {
    surah: Surah;
    ayahNumber: number;
  } | null;
  setLastRead: (data: any) => void;
};

const AppContext = createContext<AppContextType | null>(null);

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [lastRead, setLastRead] = useState(null);

  return (
    <AppContext.Provider value={{ lastRead, setLastRead }}>
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error("useApp must be used inside AppProvider");
  return ctx;
};
