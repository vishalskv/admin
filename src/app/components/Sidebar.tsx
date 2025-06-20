"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  ChevronLeft,
  ChevronRight,
  LayoutDashboard,
  BarChart2,
  Users,
  Boxes,
} from "lucide-react";

export default function Sidebar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(true);

  const pages = [
    {
      name: "Dashboard",
      route: "/dashboard",
      icon: <LayoutDashboard size={20} />,
    },
    { name: "Overview", route: "/overview", icon: <BarChart2 size={20} /> },
    { name: "Users", route: "/users", icon: <Users size={20} /> },
    { name: "Products", route: "/products", icon: <Boxes size={20} /> },
    // Add more as needed
  ];

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
      style={{
        backgroundColor: "var(--sidebar-bg)",
        color: "var(--sidebar-text)",
      }}
      className={`transition-all duration-300 ${
        isOpen ? "w-60" : "w-16"
      } flex flex-col p-4 min-h-screen shadow-lg shadow-black/30`}
    >
      <button
        onClick={toggleSidebar}
        className="mb-4 self-end text-gray-300 hover:text-white"
      >
        {isOpen ? <ChevronLeft size={20} /> : <ChevronRight size={20} />}
      </button>

      <nav className="flex flex-col space-y-2">
        {pages.map(({ name, route, icon }) => {
          const isActive = pathname === route;

          return (
            <Link
              key={route}
              href={route}
              className={`flex items-center gap-2 p-2 rounded transition-colors`}
              style={{
                backgroundColor: isActive
                  ? "var(--sidebar-active-bg)"
                  : "transparent",
                color: isActive ? "var(--sidebar-active-text)" : "inherit",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "var(--sidebar-hover)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = isActive
                  ? "var(--sidebar-active-bg)"
                  : "transparent";
              }}
            >
              {icon}
              {isOpen && <span className="text-sm">{name}</span>}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
