export default function HighlightCards() {
  const stats = [
    { label: "Product Sold", value: "9,990", growth: "+8.2%" },
    { label: "Total Balance", value: "10,989", growth: "-6.5%" },
    { label: "Sales Profit", value: "11,988", growth: "+73.9%" },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
      {stats.map((stat, idx) => (
        <div key={idx} className="bg-white p-4 rounded shadow">
          <div className="text-gray-500 text-sm">{stat.label}</div>
          <div className="text-xl font-bold">{stat.value}</div>
          <div
            className={`text-sm ${
              stat.growth.startsWith("+") ? "text-green-500" : "text-red-500"
            }`}
          >
            {stat.growth} from last week
          </div>
        </div>
      ))}
    </div>
  );
}
