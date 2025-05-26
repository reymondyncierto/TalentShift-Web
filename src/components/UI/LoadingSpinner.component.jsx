export default function LoadingSpinner({ size = 'md' }) {
  const sizes = {
    sm: 'h-8 w-8',
    md: 'h-10 w-10',
    lg: 'h-12 w-12'
  };

  return (
    <div className={`animate-spin rounded-full border-t-2 border-b-2 border-indigo-500 ${sizes[size]}`}></div>
  );
}
