export default function Header() {
  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <span className="text-xl font-bold text-blue-600">TalentShift</span>
        <a href="#hr-login" className="text-blue-600 hover:text-blue-800 text-sm font-medium">
          For HR Professionals
        </a>
      </div>
    </nav>
  );
}
