// src/components/Table.tsx
"use client";
import React, { useState } from "react";

interface Column<T> {
  header: string;
  accessor: keyof T;
  className?: string;
  sortable?: boolean;
}

interface TableProps<T> {
  columns: Column<T>[];
  data: T[];
  renderActions?: (row: T) => React.ReactNode;
}

export default function Table<T extends Record<string, unknown>>({
  columns,
  data,
  renderActions,
}: TableProps<T>) {
  const [sortKey, setSortKey] = useState<keyof T | null>(null);
  const [sortOrder, setSortOrder] = useState<"asc" | "desc" | null>(null);

  const handleSort = (accessor: keyof T) => {
    if (sortKey === accessor) {
      if (sortOrder === "asc") setSortOrder("desc");
      else if (sortOrder === "desc") {
        setSortKey(null);
        setSortOrder(null);
      } else setSortOrder("asc");
    } else {
      setSortKey(accessor);
      setSortOrder("asc");
    }
  };

  const sortedData = [...data].sort((a, b) => {
    if (!sortKey || !sortOrder) return 0;

    const aVal = a[sortKey];
    const bVal = b[sortKey];

    if (aVal == null || bVal == null) return 0;

    if (typeof aVal === "number" && typeof bVal === "number") {
      return sortOrder === "asc" ? aVal - bVal : bVal - aVal;
    }

    return sortOrder === "asc"
      ? String(aVal).localeCompare(String(bVal))
      : String(bVal).localeCompare(String(aVal));
  });

  const getSortIcon = (accessor: keyof T) => {
    if (sortKey !== accessor) return "↕";
    return sortOrder === "asc" ? "↑" : sortOrder === "desc" ? "↓" : "↕";
  };

  return (
    <div className="overflow-x-auto w-full">
      <table className="min-w-full bg-white shadow-md rounded-md">
        <thead>
          <tr className="bg-[#303f9f] text-left">
            {columns.map((col) => (
              <th
                key={col.accessor as string}
                className={`p-3 cursor-pointer select-none ${
                  col.className || ""
                }`}
                onClick={() => col.sortable && handleSort(col.accessor)}
              >
                <div className="flex items-center gap-1">
                  {col.header}
                  {col.sortable && (
                    <span className="text-sm text-black">
                      {getSortIcon(col.accessor)}
                    </span>
                  )}
                </div>
              </th>
            ))}
            {renderActions && <th className="p-3">Actions</th>}
          </tr>
        </thead>
        <tbody>
          {sortedData.length === 0 ? (
            <tr>
              <td
                colSpan={columns.length + (renderActions ? 1 : 0)}
                className="p-4 text-center text-black"
              >
                No data found.
              </td>
            </tr>
          ) : (
            sortedData.map((row, idx) => (
              <tr key={idx} className="border-t hover:bg-gray-50">
                {columns.map((col) => (
                  <td
                    key={col.accessor as string}
                    className={`p-3 text-black ${col.className || ""}`}
                  >
                    {String(row[col.accessor])}
                  </td>
                ))}
                {renderActions && <td className="p-3">{renderActions(row)}</td>}
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}
