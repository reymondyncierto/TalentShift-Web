import { FiUsers, FiUpload, FiFileText, FiSettings, FiLogOut } from 'react-icons/fi';

export default function Sidebar({ activeTab, setActiveTab }) {
  return (
    <div className="w-20 md:w-64 bg-white shadow-sm flex flex-col items-center md:items-start p-4">
      <div className="text-2xl font-bold text-indigo-600 mb-8 mt-4 hidden md:block">TalentShift</div>
      <div className="text-3xl font-bold text-indigo-600 mb-8 mt-4 md:hidden">TS</div>

      <nav className="flex-1 w-full">
        <SidebarButton
          icon={<FiUsers />}
          label="Dashboard"
          active={activeTab === 'dashboard'}
          onClick={() => setActiveTab('dashboard')}
        />
        <SidebarButton
          icon={<FiUpload />}
          label="Upload Resumes"
          active={activeTab === 'upload'}
          onClick={() => setActiveTab('upload')}
        />
        <SidebarButton
          icon={<FiFileText />}
          label="Candidates"
          active={activeTab === 'candidates'}
          onClick={() => setActiveTab('candidates')}
        />
      </nav>

      <div className="w-full">
        <SidebarButton icon={<FiSettings />} label="Settings" />
        <SidebarButton icon={<FiLogOut />} label="Logout" />
      </div>
    </div>
  );
}

function SidebarButton({ icon, label, active = false, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center w-full p-3 rounded-lg mb-2 ${
        active ? 'bg-indigo-50 text-indigo-600' : 'text-gray-600 hover:bg-gray-100'
      }`}
    >
      <span className="text-xl">{icon}</span>
      <span className="ml-3 hidden md:inline">{label}</span>
    </button>
  );
}
