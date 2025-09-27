import { useRef, useState } from 'react';
import { FiUpload } from 'react-icons/fi';
import LoadingSpinner from './UI/LoadingSpinner.component';

export default function ResumeUpload({ onFileUpload, isProcessing = false }) {
  const inputRef = useRef(null);
  const [fileName, setFileName] = useState('');
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const file = e.target.files?.[0];
    setFileName(file?.name || '');
    setError('');

    // client-side size validation (10MB)
    if (file && file.size > 10 * 1024 * 1024) {
      setError('File too large. Max 10MB.');
      setFileName('');
      // reset input so user can re-select
      e.target.value = '';
      return;
    }

    if (typeof onFileUpload === 'function') onFileUpload(e);
  };

  return (
    <div className="mb-8">
      <label className="block text-sm font-medium mb-2">
        Upload Your Resume <span className="text-red-500">*</span>
      </label>
      <div className="border-2 border-dashed border-gray-300 bg-gray-50 rounded-xl p-6 text-center hover:bg-gray-100 transition">
        <FiUpload className="mx-auto h-10 w-10 text-blue-500" />

        <div className="mt-2 flex items-center justify-center space-x-3">
          <button
            type="button"
            onClick={() => inputRef.current?.click()}
            className={`px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-500 ${isProcessing ? 'opacity-60 cursor-not-allowed' : ''}`}
            disabled={isProcessing}
          >
            {isProcessing ? 'Uploading...' : 'Choose a file'}
          </button>
          {isProcessing && <LoadingSpinner size="sm" />}
        </div>

        <input
          id="resume-upload"
          ref={inputRef}
          type="file"
          accept=".pdf,.doc,.docx"
          className="sr-only"
          onChange={handleChange}
          required
          disabled={isProcessing}
        />

  {fileName && <p className="text-sm text-gray-700 mt-2">Selected: {fileName}</p>}
  {error && <p className="text-sm text-red-500 mt-2">{error}</p>}

  <p className="text-sm text-gray-500 mt-1">Drag and drop or upload PDF/DOC (Max 10MB)</p>
      </div>
    </div>
  );
}
