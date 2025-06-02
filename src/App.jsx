import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ApplicantLandingPage from './pages/Application.page';
import HRDashboard from './pages/HRDashboard.page';

export default function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<ApplicantLandingPage />} />
        <Route path="/dashboard" element={<HRDashboard />} />
      </Routes>
    </Router>
  );
}
