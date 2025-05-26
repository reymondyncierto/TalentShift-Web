import DashboardCards from './DashboardCards.component';
import RecentCandidates from './RecentCandidates.component';

export default function DashboardView({ candidates }) {
  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Dashboard</h1>

      <DashboardCards
        totalCandidates={124}
        newThisWeek={12}
        processing={3}
      />

      <RecentCandidates candidates={candidates} />
    </div>
  );
}
