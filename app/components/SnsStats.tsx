interface SnsStatsProps {
    stats: {
        platform: string;
        followers: number;
        icon: string;
    }[];
}

export default function SnsStats({ stats }: SnsStatsProps) {
    return (
        <div className="bg-white rounded-lg shadow-sm p-6" data-oid=":rfiofj">
            <h3 className="text-lg font-semibold text-gray-900 mb-4" data-oid="q8dy-dc">
                SNS Impact
            </h3>
            <div className="grid grid-cols-2 gap-4" data-oid="1_:07gn">
                {stats.map((stat, index) => (
                    <div
                        key={index}
                        className="flex items-center p-3 bg-gray-50 rounded-lg"
                        data-oid="winl9tm"
                    >
                        <img
                            src={stat.icon}
                            alt={stat.platform}
                            className="w-8 h-8 mr-3"
                            data-oid="mf.wo.:"
                        />

                        <div data-oid="kp06exm">
                            <div className="text-sm font-medium text-gray-900" data-oid="_7x8bwf">
                                {stat.platform}
                            </div>
                            <div
                                className="text-lg font-semibold text-indigo-600"
                                data-oid="w8ygdu8"
                            >
                                {stat.followers.toLocaleString()} followers
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
