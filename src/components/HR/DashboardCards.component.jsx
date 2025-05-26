import StatsCard from '../UI/StatsCard.component';

export default function DashboardCards({ totalCandidates, newThisWeek, processing }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      <StatsCard
        title="Total Candidates"
        value={totalCandidates}
        trend="up"
        percentage="12%"
      />
      <StatsCard
        title="New This Week"
        value={newThisWeek}
        trend="up"
        percentage="5%"
      />
      <StatsCard
        title="In Processing"
        value={processing}
        trend="down"
        percentage="3%"
      />
    </div>
  );
}
