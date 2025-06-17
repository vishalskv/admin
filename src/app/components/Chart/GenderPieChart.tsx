"use client";

import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function GenderPieChart() {
  const data = {
    labels: ["Male", "Female", "Other"],
    datasets: [
      {
        label: "Gender",
        data: [60, 35, 5],
        backgroundColor: ["#6366f1", "#ec4899", "#f59e0b"],
      },
    ],
  };

  return (
    <div className="bg-white p-4 rounded shadow">
      <h2 className="text-lg font-semibold mb-2">Sale by Gender</h2>
      <Doughnut data={data} />
    </div>
  );
}
