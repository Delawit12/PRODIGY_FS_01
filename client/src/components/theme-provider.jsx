import { createContext, useContext, useEffect, useState } from "react";

// Define the themes
const themes = {
  dark: "dark",
  light: "light",
  system: "system",
};

// Initial state
const initialState = {
  theme: themes.system,
  setTheme: () => null,
};

// Create the context
const ThemeProviderContext = createContext(initialState);

// ThemeProvider component
export function ThemeProvider(props) {
  const {
    children,
    defaultTheme = themes.system,
    storageKey = "vite-ui-theme",
  } = props;

  const [theme, setThemeState] = useState(
    () => localStorage.getItem(storageKey) || defaultTheme
  );

  useEffect(() => {
    const root = window.document.documentElement;

    root.classList.remove(themes.light, themes.dark);

    if (theme === themes.system) {
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
        .matches
        ? themes.dark
        : themes.light;
      root.classList.add(systemTheme);
      return;
    }

    root.classList.add(theme);
  }, [theme]);

  const setTheme = (newTheme) => {
    localStorage.setItem(storageKey, newTheme);
    setThemeState(newTheme);
  };

  const value = { theme, setTheme };

  return (
    <ThemeProviderContext.Provider value={value} {...props}>
      {children}
    </ThemeProviderContext.Provider>
  );
}

// Custom hook to use the theme
export const useTheme = () => {
  const context = useContext(ThemeProviderContext);

  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }

  return context;
};
