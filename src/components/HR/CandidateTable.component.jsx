import Badge from '../UI/Badge.component';

export default function CandidateTable({ candidates }) {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead>
          <tr>
            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Skills</th>
            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Last Updated</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {candidates.length > 0 ? (
            candidates.map(candidate => (
              <tr key={candidate.id}>
                <td className="px-4 py-3 whitespace-nowrap">
                  <div className="font-medium text-gray-900">{candidate.name}</div>
                  <div className="text-sm text-gray-500">{candidate.email}</div>
                </td>
                <td className="px-4 py-3 whitespace-nowrap">
                  <div className="flex flex-wrap gap-1">
                    {candidate.skills.slice(0, 3).map(skill => (
                      <Badge key={skill} color="indigo">{skill}</Badge>
                    ))}
                  </div>
                </td>
                <td className="px-4 py-3 whitespace-nowrap">
                  <Badge color="green">{candidate.status}</Badge>
                </td>
                <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">
                  {candidate.lastUpdated}
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4" className="px-4 py-3 text-center text-gray-500">
                No candidates found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
