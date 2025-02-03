interface SnsStatsProps {
    stats: {
        platform: string;
        followers: number;
        icon: string;
    }[];
}

export default function SnsStats({ stats }: SnsStatsProps) {
    return (
        <div className="bg-white rounded-lg shadow-sm p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">SNS Impact</h3>
            <div className="grid grid-cols-2 gap-4">
                {stats.map((stat, index) => (
                    <div key={index} className="flex items-center p-3 bg-gray-50 rounded-lg">
                        <img src={stat.icon} alt={stat.platform} className="w-8 h-8 mr-3" />

                        <div>
                            <div className="text-sm font-medium text-gray-900">{stat.platform}</div>
                            <div className="text-lg font-semibold text-indigo-600">
                                {stat.followers.toLocaleString()} followers
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
