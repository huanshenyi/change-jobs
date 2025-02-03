'use client';

import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    BarChart,
    Bar,
} from 'recharts';

interface ScoreGraphsProps {
    personalScores: {
        name: string;
        score: number;
        color: string;
    }[];
    distributionData: {
        score: number;
        count: number;
    }[];
    userScore: number;
}

export default function ScoreGraphs({
    personalScores,
    distributionData,
    userScore,
}: ScoreGraphsProps) {
    const CustomTooltip = ({ active, payload, label }: any) => {
        if (active && payload && payload.length) {
            return (
                <div className="bg-white p-4 shadow-lg rounded-lg border">
                    <p className="text-sm font-medium">{`${label}: ${payload[0].value}`}</p>
                    <p className="text-xs text-gray-500">{payload[0].payload.description}</p>
                </div>
            );
        }
        return null;
    };

    const DistributionTooltip = ({ active, payload, label }: any) => {
        if (active && payload && payload.length) {
            return (
                <div className="bg-white p-4 shadow-lg rounded-lg border">
                    <p className="text-sm font-medium">{`スコア: ${label}`}</p>
                    <p className="text-sm">{`ユーザー数: ${payload[0].value}`}</p>
                </div>
            );
        }
        return null;
    };

    return (
        <div className="grid md:grid-cols-2 gap-8 mt-8">
            {/* 個人スコアグラフ */}
            <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-lg font-semibold mb-4">技術力スコア詳細</h3>
                <div className="h-[300px]">
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart
                            data={personalScores}
                            layout="vertical"
                            margin={{ top: 5, right: 30, left: 40, bottom: 5 }}
                        >
                            <CartesianGrid strokeDasharray="3 3" horizontal={false} />

                            <XAxis type="number" domain={[0, 5]} />
                            <YAxis dataKey="name" type="category" width={100} />
                            <Tooltip content={<CustomTooltip />} />

                            <Bar dataKey="score" fill="#8884d8" radius={[0, 4, 4, 0]}>
                                {personalScores.map((entry, index) => (
                                    <Bar key={`bar-${index}`} dataKey="score" fill={entry.color} />
                                ))}
                            </Bar>
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </div>

            {/* スコア分布グラフ */}
            <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-lg font-semibold mb-4">全体スコア分布</h3>
                <div className="h-[300px]">
                    <ResponsiveContainer width="100%" height="100%">
                        <AreaChart
                            data={distributionData}
                            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                        >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="score" type="number" domain={[0, 5]} tickCount={6} />

                            <YAxis />
                            <Tooltip content={<DistributionTooltip />} />

                            <Area
                                type="monotone"
                                dataKey="count"
                                stroke="#8884d8"
                                fill="#8884d8"
                                fillOpacity={0.3}
                            />

                            {/* ユーザーのスコアを示す垂直線 */}
                            <CartesianGrid
                                verticalPoints={[userScore]}
                                stroke="#ff0000"
                                strokeWidth={2}
                            />
                        </AreaChart>
                    </ResponsiveContainer>
                </div>
                <div className="text-sm text-center text-gray-500 mt-4">
                    赤線はあなたの現在のスコア位置 ({userScore})
                </div>
            </div>
        </div>
    );
}
