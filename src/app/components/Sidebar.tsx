"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight, Menu } from "lucide-react";

export default function Sidebar() {
  const pages = [
    { name: "Dashboard", route: "/dashboard" },
    { name: "Overview", route: "/overview" },
    { name: "Users", route: "/users" },
    // { name: "Settings", route: "/admin/settings" },
  ];

  const [isOpen, setIsOpen] = useState(true);

  // Load sidebar state from localStorage
  useEffect(() => {
    const storedState = localStorage.getItem("sidebarOpen");
    if (storedState !== null) {
      setIsOpen(storedState === "true");
    }
  }, []);

  const toggleSidebar = () => {
    const newState = !isOpen;
    setIsOpen(newState);
    localStorage.setItem("sidebarOpen", String(newState));
  };

  return (
    <aside
      className={`transition-all duration-300 ${
        isOpen ? "w-60" : "w-16"
      } bg-[#303f9f] text-white flex flex-col p-4`}
    >
      <button
        onClick={toggleSidebar}
        className="mb-4 self-end text-gray-300 hover:text-white"
      >
        {isOpen ? <ChevronLeft size={20} /> : <ChevronRight size={20} />}
      </button>

      <nav className="flex flex-col space-y-3">
        {pages.map(({ name, route }) => (
          <Link
            key={route}
            href={route}
            className="flex items-center gap-2 hover:bg-gray-700 p-2 rounded"
          >
            <Menu size={20} />
            {isOpen && <span>{name}</span>}
          </Link>
        ))}
      </nav>
    </aside>
  );
}
