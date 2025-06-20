"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null; // avoids hydration mismatch

  const isDark = theme === "dark";

  return (
    <label className="inline-flex items-center cursor-pointer">
      <input
        type="checkbox"
        className="sr-only"
        checked={isDark}
        onChange={() => setTheme(isDark ? "light" : "dark")}
      />
      <div className="w-12 h-6 bg-gray-300 dark:bg-gray-600 rounded-full relative transition-colors duration-300">
        <div
          className={`w-6 h-6 bg-white rounded-full shadow-md transform transition-transform duration-300 ${
            isDark ? "translate-x-6" : "translate-x-0"
          }`}
        />
      </div>
      <span className="ml-3 text-sm text-gray-800 dark:text-gray-200">
        {isDark ? "Dark" : "Light"}
      </span>
    </label>
  );
}
