import HighlightCards from "../components/Chart/HighlightCards";
import SalesChart from "../components/Chart/SalesChart";
import GenderPieChart from "../components/Chart/GenderPieChart";

export default function DashboardPage() {
  return (
    <div className="p-4 space-y-6">
      {/* Top highlight cards */}
      <HighlightCards />

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="lg:col-span-2">
          <SalesChart />
        </div>
        <div>
          <GenderPieChart />
        </div>
      </div>
    </div>
  );
}
