import { useState } from 'react';
import SearchBar from '../UI/SearchBar.component';
import CandidateTable from './CandidateTable.component';

export default function CandidatesView({ candidates }) {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredCandidates = candidates.filter(candidate =>
    candidate.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    candidate.skills.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Candidate Database</h1>
        <SearchBar
          value={searchTerm}
          onChange={setSearchTerm}
          placeholder="Search candidates..."
        />
      </div>

      <div className="bg-white rounded-xl shadow-sm overflow-hidden">
        <CandidateTable candidates={filteredCandidates} expanded />
      </div>
    </div>
  );
}
