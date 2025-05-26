import CandidateTable from './CandidateTable.component';

export default function RecentCandidates({ candidates }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm">
      <h2 className="text-lg font-semibold mb-4">Recent Candidates</h2>
      <CandidateTable candidates={candidates.slice(0, 5)} />
    </div>
  );
}
