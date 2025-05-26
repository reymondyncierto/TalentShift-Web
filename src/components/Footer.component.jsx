export default function Footer() {
  return (
    <footer className="bg-white border-t py-6">
      <p className="text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} TalentShift. Built for modern hiring.
      </p>
    </footer>
  );
}
