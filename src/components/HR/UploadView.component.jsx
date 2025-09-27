import { useState } from 'react';
import ResumeUpload from './ResumeUpload.component';
import CandidateCard from './CandidateCard.component';

export default function UploadView({ onNewCandidate }) {
  const [isProcessing, setIsProcessing] = useState(false);
  const [recentUploads, setRecentUploads] = useState([]);

  const handleFileUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setIsProcessing(true);

    const formData = new FormData();
    formData.append('file', file);

    try {
      const apiBase = import.meta.env.VITE_API_URL || '';
      const base = `${apiBase.replace(/\/$/, '')}/convert/pdf`;

      // abort timeout to avoid hanging uploads
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 30000); // 30s

      const response = await fetch(base, {
        method: 'POST',
        body: formData,
        signal: controller.signal,
      });
      clearTimeout(timeoutId);

      if (!response.ok) {
        await response.text().catch(() => null);
        throw new Error('Upload failed');
      }

      const newCandidate = await response.json().catch(() => null);

      if (newCandidate) {
        onNewCandidate(newCandidate);
        setRecentUploads([newCandidate, ...recentUploads].slice(0, 3));
      } else {
        console.warn('Upload returned no JSON payload');
      }
    } catch (error) {
      if (error.name === 'AbortError') {
        console.error('Upload aborted (timeout)');
      } else {
        console.error('Error uploading file:', error);
      }
    } finally {
      setIsProcessing(false);
    }
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
