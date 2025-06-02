import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';

import ApplicantLandingPage from './pages/Application.page';
import HRDashboard from './pages/HRDashboard.page';
import { supabase } from './lib/Supabase.lib';

export default function App() {

  useEffect(() => {
    async function initSupabase() {
      try {
        await supabase.auth.getSession();
      } catch (error) {
        console.error('Error initializing Supabase:', error);
      }
    }

    initSupabase();
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<ApplicantLandingPage />} />
        <Route path="/dashboard" element={<HRDashboard />} />
      </Routes>
    </Router>
  );
}
