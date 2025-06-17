"use client";
import React from "react";
import Table from "../components/Table";

// Step 1: Define the row type
type UserRow = {
  name: string;
  email: string;
  role: string;
};

const Page = () => {
  // Step 2: Type your columns
  const columns: {
    header: string;
    accessor: keyof UserRow;
    sortable?: boolean;
  }[] = [
    { header: "Name", accessor: "name", sortable: true },
    { header: "Email", accessor: "email", sortable: true },
    { header: "Role", accessor: "role", sortable: false },
  ];

  // Step 3: Type your data
  const data: UserRow[] = [
    { name: "Vishal", email: "vishal@example.com", role: "Admin" },
    { name: "John", email: "john@example.com", role: "Editor" },
    { name: "Alex", email: "alex@example.com", role: "Viewer" },
  ];

  return (
    <div className="p-4">
      <h1 className="text-xl font-semibold mb-4">User List</h1>
      <Table<UserRow>
        columns={columns}
        data={data}
        renderActions={() => (
          <div className="flex gap-2">
            <button className="text-blue-600 hover:underline">Edit</button>
            <button className="text-red-600 hover:underline">Delete</button>
          </div>
        )}
      />
    </div>
  );
};

export default Page;
