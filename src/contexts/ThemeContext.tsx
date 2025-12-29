import React, { createContext, useContext } from "react";

const ThemeContext = createContext({
  colors: {
    background: "#FFFFFF",
    text: "#000000",
    surface: "#F5F5F5",
    border: "#E0E0E0",
    primary: "#2E7D32",
    textSecondary: "#666666",
  },
});

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeContext.Provider value={{
      colors: {
        background: "#FFFFFF",
        text: "#000000",
        surface: "#F5F5F5",
        border: "#E0E0E0",
        primary: "#2E7D32",
        textSecondary: "#666666",
      },
    }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
