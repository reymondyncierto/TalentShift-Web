export default function StatsCard({ title, value, trend, percentage }) {
  const trendColor = trend === 'up' ? 'text-green-500' : 'text-red-500';
  const trendIcon = trend === 'up' ? '↑' : '↓';

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm">
      <h3 className="text-gray-500 text-sm font-medium">{title}</h3>
      <div className="flex items-end justify-between">
        <p className="text-3xl font-bold mt-2">{value}</p>
        <span className={`text-sm ${trendColor}`}>
          {trendIcon} {percentage}
        </span>
      </div>
    </div>
  );
}
