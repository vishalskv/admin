"use client";

import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";
import { useTheme } from "../context/ThemeContext";
export default function Header() {
  const { theme, toggleTheme } = useTheme();

  const router = useRouter();
  const pathname = usePathname();

  const handleLogout = () => {
    localStorage.removeItem("auth");
    router.push("/login");
  };

  // Convert pathname into breadcrumb parts
  const crumbs = pathname
    .split("/")
    .filter(Boolean) // remove empty strings
    .map((crumb, idx, arr) => {
      const href = "/" + arr.slice(0, idx + 1).join("/");
      return { label: crumb.charAt(0).toUpperCase() + crumb.slice(1), href };
    });

  return (
    <header className="bg-white shadow px-4 py-3 flex justify-between items-center">
      <div>
        {/* <h1 className="text-xl font-semibold mb-1">Admin Dashboard</h1> */}
        <nav className="text-sm text-gray-600">
          {crumbs.length === 0 ? (
            <span className="text-gray-400">Home</span>
          ) : (
            crumbs.map((crumb, idx) => (
              <span key={crumb.href}>
                <Link
                  href={crumb.href}
                  className="hover:underline capitalize text-gray-700"
                >
                  {crumb.label}
                </Link>
                {idx < crumbs.length - 1 && <span className="mx-1">/</span>}
              </span>
            ))
          )}
        </nav>
      </div>
      <button
        onClick={toggleTheme}
        className="px-4 py-2 border rounded text-sm"
      >
        {theme === "light" ? "🌙 Dark" : "☀️ Light"}
      </button>
      <button
        onClick={handleLogout}
        className="text-sm bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
      >
        Logout
      </button>
    </header>
  );
}
