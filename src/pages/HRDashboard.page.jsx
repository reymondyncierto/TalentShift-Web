import { useState } from 'react';
import Sidebar from '../components/HR/Sidebar.component';
import DashboardView from '../components/HR/DashboardView.component';

export default function HRDashboard() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [candidates, setCandidates] = useState([]);

  const handleNewCandidate = (newCandidate) => {
    setCandidates([...candidates, newCandidate]);
  };

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />

      <div className="flex-1 overflow-auto p-6">
        {activeTab === 'dashboard' && <DashboardView candidates={candidates} />}
        {activeTab === 'upload' && <UploadView onNewCandidate={handleNewCandidate} />}
        {activeTab === 'candidates' && <CandidatesView candidates={candidates} />}
      </div>
    </div>
  );
}
