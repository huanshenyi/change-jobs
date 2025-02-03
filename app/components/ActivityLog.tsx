'use client';

interface ActivityLogProps {
    activities: {
        month: string;
        counts: {
            github?: number;
            zenn?: number;
            qiita?: number;
            blog?: number;
            note?: number;
            connpass?: number;
            speakerDeck?: number;
            teratail?: number;
        };
    }[];
    events: {
        date: string;
        title: string;
        type: string;
        link?: string;
    }[];
}

export default function ActivityLog({ activities, events }: ActivityLogProps) {
    const maxValue = Math.max(
        ...activities.map((a) =>
            Object.values(a.counts).reduce((sum, count) => sum + (count || 0), 0),
        ),
    );

    return (
        <div className="bg-white rounded-lg shadow-sm p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-6">Activity Log</h3>

            {/* グラフエリア */}
            <div className="mb-8">
                <div className="relative h-64">
                    {/* Y軸のグリッドライン */}
                    {[...Array(5)].map((_, i) => (
                        <div
                            key={i}
                            className="absolute w-full border-t border-gray-100"
                            style={{ bottom: `${i * 25}%` }}
                        >
                            <span className="absolute -left-6 text-xs text-gray-500">
                                {Math.round((maxValue * i) / 4)}
                            </span>
                        </div>
                    ))}

                    {/* 積み上げバー */}
                    <div className="absolute bottom-0 left-0 right-0 flex justify-between items-end h-full">
                        {activities.map((activity, index) => (
                            <div key={index} className="w-8 relative">
                                {Object.entries(activity.counts).map(([key, value], i) => {
                                    if (!value) return null;
                                    const height = (value / maxValue) * 100;
                                    const colors: Record<string, string> = {
                                        github: 'bg-gray-700',
                                        zenn: 'bg-blue-400',
                                        qiita: 'bg-green-500',
                                        blog: 'bg-gray-300',
                                        note: 'bg-red-500',
                                        connpass: 'bg-red-600',
                                        speakerDeck: 'bg-teal-500',
                                        teratail: 'bg-yellow-400',
                                    };
                                    return (
                                        <div
                                            key={key}
                                            className={`absolute bottom-0 w-full ${colors[key]}`}
                                            style={{
                                                height: `${height}%`,
                                                bottom: `${Object.entries(activity.counts)
                                                    .slice(0, i)
                                                    .reduce(
                                                        (sum, [_, v]) =>
                                                            sum + ((v || 0) / maxValue) * 100,
                                                        0,
                                                    )}%`,
                                            }}
                                        />
                                    );
                                })}
                                <span className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-xs text-gray-500">
                                    {activity.month}月
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* 凡例 */}
            <div className="flex flex-wrap gap-4 mb-8">
                {[
                    { key: 'github', label: 'GitHub', color: 'bg-gray-700' },
                    { key: 'zenn', label: 'Zenn', color: 'bg-blue-400' },
                    { key: 'qiita', label: 'Qiita', color: 'bg-green-500' },
                    { key: 'blog', label: 'Blog', color: 'bg-gray-300' },
                    { key: 'note', label: 'note', color: 'bg-red-500' },
                    { key: 'connpass', label: 'connpass', color: 'bg-red-600' },
                    { key: 'speakerDeck', label: 'Speaker Deck', color: 'bg-teal-500' },
                    { key: 'teratail', label: 'teratail', color: 'bg-yellow-400' },
                ].map((item) => (
                    <div key={item.key} className="flex items-center">
                        <div className={`w-3 h-3 ${item.color} mr-2`} />
                        <span className="text-sm text-gray-600">{item.label}</span>
                    </div>
                ))}
            </div>

            {/* イベントリスト */}
            <div className="border-t border-gray-200 pt-6">
                <h4 className="text-sm font-medium text-gray-900 mb-4">2025年</h4>
                <div className="space-y-4">
                    {events.map((event, index) => (
                        <div key={index} className="flex items-start">
                            <div className="flex-shrink-0 w-20">
                                <span className="text-sm text-gray-500">{event.date}</span>
                            </div>
                            <div className="flex-1 min-w-0">
                                <div className="flex items-center">
                                    <div className="h-2 w-2 rounded-full bg-red-500 mr-2" />

                                    <span className="text-xs text-gray-500">{event.type}</span>
                                </div>
                                {event.link ? (
                                    <a
                                        href={event.link}
                                        className="text-sm text-gray-900 hover:text-gray-600 block mt-1"
                                    >
                                        {event.title} ↗
                                    </a>
                                ) : (
                                    <span className="text-sm text-gray-900 block mt-1">
                                        {event.title}
                                    </span>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
