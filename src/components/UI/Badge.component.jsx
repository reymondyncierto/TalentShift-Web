const colorClasses = {
  indigo: 'bg-indigo-50 text-indigo-600',
  green: 'bg-green-50 text-green-600',
  gray: 'bg-gray-100 text-gray-600',
  red: 'bg-red-50 text-red-600',
};

export default function Badge({ children, color = 'gray' }) {
  return (
    <span className={`px-2 py-1 text-xs rounded-full ${colorClasses[color]}`}>
      {children}
    </span>
  );
}
