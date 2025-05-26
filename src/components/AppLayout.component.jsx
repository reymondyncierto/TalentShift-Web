export default function AppLayout({ children }) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white text-gray-900">
      {children}
    </div>
  );
}
