"use client";

import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const stored = localStorage.getItem("theme");
    const applied = stored || "light";
    setTheme(applied);
    document.documentElement.setAttribute("data-theme", applied);
  }, []);

  const toggleTheme = () => {
    const next = theme === "light" ? "dark" : "light";
    setTheme(next);
    localStorage.setItem("theme", next);
    document.documentElement.setAttribute("data-theme", next);
  };

  return (
    <button
      onClick={toggleTheme}
      className="px-4 py-2 border rounded bg-white text-black"
    >
      Switch to {theme === "light" ? "Dark" : "Light"} Mode
    </button>
  );
}
