"use client";
import React from "react";
import Table from "../components/Table";
const page = () => {
  const columns = [
    { header: "Name", accessor: "name", sortable: true },
    { header: "Email", accessor: "email", sortable: true },
    { header: "Role", accessor: "role", sortable: false },
  ];

  const data = [
    { name: "Vishal", email: "vishal@example.com", role: "Admin" },
    { name: "John", email: "john@example.com", role: "Editor" },
    { name: "Alex", email: "alex@example.com", role: "Viewer" },
  ];
  return (
    <div className="p-4">
      <h1 className="text-xl font-semibold mb-4">User List</h1>
      <Table
        columns={columns}
        data={data}
        renderActions={(row) => (
          <div className="flex gap-2">
            <button className="text-blue-600 hover:underline">Edit</button>
            <button className="text-red-600 hover:underline">Delete</button>
          </div>
        )}
      />
    </div>
  );
};

export default page;
