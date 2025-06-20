"use client";

import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function Header() {
  const router = useRouter();
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null; // avoid hydration mismatch

  const isDark = theme === "dark";

  const handleLogout = () => {
    localStorage.removeItem("auth");
    router.push("/login");
  };

  const crumbs = pathname
    .split("/")
    .filter(Boolean)
    .map((crumb, idx, arr) => {
      const href = "/" + arr.slice(0, idx + 1).join("/");
      return {
        label: crumb.charAt(0).toUpperCase() + crumb.slice(1),
        href,
      };
    });

  return (
    <header className="  text-black dark:text-white shadow px-4 py-3 flex justify-between items-center">
      <nav className="text-sm">
        {crumbs.length === 0 ? (
          <span className="text-gray-500 dark:text-gray-400">Home</span>
        ) : (
          crumbs.map((crumb, idx) => (
            <span key={crumb.href}>
              <Link
                href={crumb.href}
                className={`hover:underline capitalize text-gray-700 dark:text-gray-200`}
              >
                {crumb.label}
              </Link>
              {idx < crumbs.length - 1 && <span className="mx-1">/</span>}
            </span>
          ))
        )}
      </nav>

      <div className="flex items-center gap-4">
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
        </label>

        <button
          onClick={handleLogout}
          className="text-sm bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
        >
          Logout
        </button>
      </div>
    </header>
  );
}
