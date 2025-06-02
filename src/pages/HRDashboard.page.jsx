import { useState, useEffect } from 'react';
import Sidebar from '../components/HR/Sidebar.component';
import DashboardView from '../components/HR/DashboardView.component';
import UploadView from '../components/HR/UploadView.component';
import CandidatesView from '../components/HR/CandidatesView.component';
import { supabase } from '../lib/Supabase.lib';

export default function HRDashboard() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [candidates, setCandidates] = useState([]);

  useEffect(() => {
    async function initSupabase() {
      try {
        const [
          { data: users },
          { data: experience },
          { data: education },
          { data: technicalSkills },
          { data: certifications },
          { data: projects },
          { data: hackathons },
        ] = await Promise.all([
          supabase.from('users').select('*'),
          supabase.from('experience').select('*'),
          supabase.from('education').select('*'),
          supabase.from('technical_skills').select('*'),
          supabase.from('certifications').select('*'),
          supabase.from('projects').select('*'),
          supabase.from('hackathons').select('*'),
        ]);

        const usersWithData = users?.map((user) => ({
          ...user,
          experience: experience?.filter((exp) => exp.user_id === user.id) || [],
          education: education?.filter((edu) => edu.user_id === user.id) || [],
          technicalSkills: technicalSkills?.filter((skill) => skill.user_id === user.id).map((skill) => skill.skill) || [],
          certifications: certifications?.filter((cert) => cert.user_id === user.id) || [],
          projects: projects?.filter((project) => project.user_id === user.id) || [],
          hackathons: hackathons?.filter((hack) => hack.user_id === user.id) || [],
        }));

        setCandidates(usersWithData)

      } catch (error) {
        console.error('Error initializing Supabase:', error);
      }
    }

    initSupabase();
  }, []);

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
