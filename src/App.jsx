import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ApplicantLandingPage from './pages/Application.page';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ApplicantLandingPage />} />
      </Routes>
    </Router>
  );
}
