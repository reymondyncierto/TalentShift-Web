import ResumeUpload from './ResumeUpload.component';
import StatusMessages from './StatusMessages.component';
import InputField from './InputField.component';
import {
  FiUser, FiMail, FiPhone, FiLinkedin, FiGithub
} from 'react-icons/fi';

export default function ContactForm({
  formData,
  isProcessing,
  isSuccess,
  onFileUpload,
  onInputChange,
  onSubmit,
  onReset
}) {
  return (
    <section className="max-w-3xl mx-auto px-4 pb-20">
      <div className="bg-white p-8 rounded-xl shadow border border-gray-100">
        {isSuccess ? (
          <StatusMessages.Success onReset={onReset} />
        ) : isProcessing ? (
          <StatusMessages.Processing />
        ) : (
          <>
            <h2 className="text-2xl font-bold mb-2">Quick Application</h2>
            <p className="text-gray-600 mb-6">
              It only takes a minute. Your information will be reviewed by the HR team.
            </p>

            <ResumeUpload onFileUpload={onFileUpload} />

            <form onSubmit={onSubmit}>
              <h3 className="text-lg font-semibold mb-4 border-b pb-2">Contact Details</h3>
              <div className="grid grid-cols-1 gap-6">
                <InputField
                  id="name"
                  icon={<FiUser />}
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={onInputChange}
                  required
                />
                <InputField
                  id="email"
                  icon={<FiMail />}
                  type="email"
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={onInputChange}
                  required
                />
                <InputField
                  id="phone"
                  icon={<FiPhone />}
                  type="tel"
                  placeholder="(123) 456-7890"
                  value={formData.phone}
                  onChange={onInputChange}
                />
                <InputField
                  id="linkedin"
                  icon={<FiLinkedin />}
                  type="url"
                  placeholder="https://linkedin.com/in/yourprofile"
                  value={formData.linkedin}
                  onChange={onInputChange}
                />
                <InputField
                  id="github"
                  icon={<FiGithub />}
                  type="url"
                  placeholder="https://github.com/yourusername"
                  value={formData.github}
                  onChange={onInputChange}
                />
              </div>

              <div className="mt-8 flex justify-end">
                <button
                  type="submit"
                  className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                >
                  Submit Application
                </button>
              </div>
            </form>
          </>
        )}
      </div>
    </section>
  );
}
