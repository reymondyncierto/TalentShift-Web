import { useState } from 'react';
import ResumeUpload from './ResumeUpload.component';
import CandidateCard from './CandidateCard.component';

export default function UploadView({ onNewCandidate }) {
  const [isProcessing, setIsProcessing] = useState(false);
  const [recentUploads, setRecentUploads] = useState([]);

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setIsProcessing(true);

    // placeholder for file processing logic
    setTimeout(() => {
      const newCandidate = {
        id: Date.now(),
        name: "John Doe",
        email: "john.doe@example.com",
        phone: "(123) 456-7890",
        skills: ["React", "Node.js", "Tailwind CSS"],
        experience: "5 years",
        education: "BS Computer Science",
        status: "New",
        lastUpdated: new Date().toLocaleDateString(),
      };

      onNewCandidate(newCandidate);
      setRecentUploads([newCandidate, ...recentUploads].slice(0, 3));
      setIsProcessing(false);
    }, 2000);
  };

  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Upload Resumes</h1>

      <ResumeUpload
        isProcessing={isProcessing}
        onFileUpload={handleFileUpload}
      />

      {recentUploads.length > 0 && (
        <div className="mt-8">
          <h2 className="text-lg font-semibold mb-4">Recently Processed</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {recentUploads.map(candidate => (
              <CandidateCard key={candidate.id} candidate={candidate} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
