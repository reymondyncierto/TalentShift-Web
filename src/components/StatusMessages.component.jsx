import { FiCheck } from 'react-icons/fi';

export const SuccessMessage = ({ onReset }) => {
  return (
    <div className="text-center">
      <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-green-100 mb-4">
        <FiCheck className="h-8 w-8 text-green-600" />
      </div>
      <h2 className="text-2xl font-semibold">Thanks for Applying!</h2>
      <p className="mt-2 text-gray-600">
        Your application has been submitted. HR will review it and reach out if there's a match.
      </p>
      <button
        onClick={onReset}
        className="mt-6 px-6 py-3 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition"
      >
        Submit Another Application
      </button>
    </div>
  );
};

export const ProcessingMessage = () => {
  return (
    <div className="text-center py-12">
      <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-blue-500 mx-auto mb-6"></div>
      <h2 className="text-xl font-semibold">Processing Your Application...</h2>
      <p className="mt-2 text-gray-600">
        Please hold on while we upload and analyze your resume.
      </p>
    </div>
  );
};

const StatusMessages = {
  Success: SuccessMessage,
  Processing: ProcessingMessage
};

export default StatusMessages;
