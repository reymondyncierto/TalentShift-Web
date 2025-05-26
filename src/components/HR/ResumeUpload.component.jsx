import { FiUpload } from 'react-icons/fi';
import LoadingSpinner from '../UI/LoadingSpinner.component';

export default function ResumeUpload({ isProcessing, onFileUpload }) {
  return (
    <div className="bg-white p-8 rounded-xl shadow-sm border-2 border-dashed border-gray-200 text-center">
      {isProcessing ? (
        <div className="flex flex-col items-center">
          <LoadingSpinner size="lg" />
          <p className="text-gray-600 mt-4">Processing resume...</p>
          <p className="text-sm text-gray-500 mt-2">Extracting candidate information</p>
        </div>
      ) : (
        <>
          <FiUpload className="mx-auto text-4xl text-indigo-500 mb-4" />
          <h2 className="text-lg font-medium text-gray-800 mb-2">Drag and drop resumes here</h2>
          <p className="text-gray-500 mb-6">or</p>
          <label className="cursor-pointer bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition">
            Browse Files
            <input
              type="file"
              className="hidden"
              accept=".pdf,.doc,.docx"
              onChange={onFileUpload}
            />
          </label>
          <p className="text-xs text-gray-400 mt-4">Supports PDF, DOC, DOCX (Max 10MB)</p>
        </>
      )}
    </div>
  );
}
