import Badge from '../UI/Badge.component';

export default function CandidateCard({ candidate }) {
  return (
    <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition">
      <h3 className="font-medium text-gray-800">{candidate.name}</h3>
      <p className="text-sm text-gray-500 mt-1">{candidate.email}</p>
      <div className="flex flex-wrap gap-1 mt-3">
        {candidate.skills.slice(0, 3).map(skill => (
          <Badge key={skill} color="indigo">{skill}</Badge>
        ))}
      </div>
    </div>
  );
}
