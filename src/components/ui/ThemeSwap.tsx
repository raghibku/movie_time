// components/ThemeToggle.tsx
"use client";
import { useTheme } from "@/context/ThemeContext";

 // Mark this as client-side

export const ThemeSwap = () => {
  const { theme, setTheme } = useTheme();

  // Event handler to toggle between light and dark themes
  const handleToggle = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <button
      onClick={handleToggle}
      className="btn btn-primary"
    >
      Switch to {theme === "light" ? "Dark" : "Light"} Mode
    </button>
  );
};
