export default function InputField({ id, icon, ...props }) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium mb-1 capitalize">
        {id}
      </label>
      <div className="relative">
        <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-400">
          {icon}
        </span>
        <input
          name={id}
          id={id}
          className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
          {...props}
        />
      </div>
    </div>
  );
}
