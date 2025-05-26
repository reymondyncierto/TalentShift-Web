import { FiUpload } from 'react-icons/fi';

export default function ResumeUpload({ onFileUpload }) {
  return (
    <div className="mb-8">
      <label className="block text-sm font-medium mb-2">
        Upload Your Resume <span className="text-red-500">*</span>
      </label>
      <div className="border-2 border-dashed border-gray-300 bg-gray-50 rounded-xl p-6 text-center hover:bg-gray-100 transition">
        <FiUpload className="mx-auto h-10 w-10 text-blue-500" />
        <label htmlFor="resume-upload" className="cursor-pointer text-blue-600 hover:text-blue-500 inline-block mt-2 font-medium">
          Choose a file
          <input
            id="resume-upload"
            type="file"
            accept=".pdf,.doc,.docx"
            className="sr-only"
            onChange={onFileUpload}
            required
          />
        </label>
        <p className="text-sm text-gray-500 mt-1">Drag and drop or upload PDF/DOC (Max 10MB)</p>
      </div>
    </div>
  );
}
