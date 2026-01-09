// =======================
// External Imports
// =======================
import React from 'react';
import { DollarSign, Users, Briefcase, TrendingUp } from 'lucide-react';

// =======================
// Internal Imports
// =======================
import KPICard from '../Cards/KPICard';
import PerformanceChart from '../Charts/PerformanceChart';
import RevenueChart from '../Charts/RevenueChart';

// =======================
// Constants
// =======================
// Moved outside the component to avoid re-creation on each render
const KPI_DATA = [
  { icon: DollarSign, title: 'Monthly Revenue', value: '$173K', change: '+12%', color: 'green' },
  { icon: Users, title: 'Total Clients', value: '14', change: '4 Active', color: 'blue' },
  { icon: Briefcase, title: 'Total Projects', value: '32', change: '18 Active', color: 'purple' },
  { icon: TrendingUp, title: 'On-Time Delivery', value: '92%', change: '87% Acc.', color: 'orange' }
];

// =======================
// Component
// =======================
const Overview = () => {
  return (
    <div className="space-y-6">
      {/* KPI Cards Section */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {KPI_DATA.map((kpi, index) => (
          <KPICard key={index} {...kpi} />
        ))}
      </div>

      {/* Charts Section */}
      <PerformanceChart />
      <RevenueChart />
    </div>
  );
};

export default Overview;
