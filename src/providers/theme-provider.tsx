import { useEffect, useState, type ReactNode } from "react";
import { ThemeContext, type Theme } from "../context/theme-context";

interface Props {
  children: ReactNode;
}

export function ThemeProvider({ children }: Props) {
  const getInitialTheme = (): Theme => {
    const saved = localStorage.getItem("theme") as Theme | null;

    if (saved) return saved;

    // Detectar preferencia del sistema
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      return "dark";
    }

    return "light";
  };

  const [theme, setTheme] = useState<Theme>(getInitialTheme);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");

    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <ThemeContext.Provider
      value={{
        theme,
        toggleTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}
