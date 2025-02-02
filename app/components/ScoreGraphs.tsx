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
                <div className="bg-white p-4 shadow-lg rounded-lg border" data-oid="m5rrrcs">
                    <p
                        className="text-sm font-medium"
                        data-oid="gtnrm8r"
                    >{`${label}: ${payload[0].value}`}</p>
                    <p className="text-xs text-gray-500" data-oid="m7i_kce">
                        {payload[0].payload.description}
                    </p>
                </div>
            );
        }
        return null;
    };

    const DistributionTooltip = ({ active, payload, label }: any) => {
        if (active && payload && payload.length) {
            return (
                <div className="bg-white p-4 shadow-lg rounded-lg border" data-oid="o55papf">
                    <p className="text-sm font-medium" data-oid="y-5u2p1">{`スコア: ${label}`}</p>
                    <p
                        className="text-sm"
                        data-oid="8nh8.eu"
                    >{`ユーザー数: ${payload[0].value}`}</p>
                </div>
            );
        }
        return null;
    };

    return (
        <div className="grid md:grid-cols-2 gap-8 mt-8" data-oid="4v4pvgi">
            {/* 個人スコアグラフ */}
            <div className="bg-white p-6 rounded-lg shadow" data-oid="fdyw6_r">
                <h3 className="text-lg font-semibold mb-4" data-oid="yzlb57y">
                    技術力スコア詳細
                </h3>
                <div className="h-[300px]" data-oid="lbq6leh">
                    <ResponsiveContainer width="100%" height="100%" data-oid="5268sex">
                        <BarChart
                            data={personalScores}
                            layout="vertical"
                            margin={{ top: 5, right: 30, left: 40, bottom: 5 }}
                            data-oid=":brlsuv"
                        >
                            <CartesianGrid
                                strokeDasharray="3 3"
                                horizontal={false}
                                data-oid="-qa9eui"
                            />

                            <XAxis type="number" domain={[0, 5]} data-oid="cco-e-l" />
                            <YAxis dataKey="name" type="category" width={100} data-oid="9f8..kk" />
                            <Tooltip
                                content={<CustomTooltip data-oid="z:rgdnh" />}
                                data-oid="ybh:8rc"
                            />

                            <Bar
                                dataKey="score"
                                fill="#8884d8"
                                radius={[0, 4, 4, 0]}
                                data-oid="qll7sq:"
                            >
                                {personalScores.map((entry, index) => (
                                    <Bar
                                        key={`bar-${index}`}
                                        dataKey="score"
                                        fill={entry.color}
                                        data-oid="j07.qkb"
                                    />
                                ))}
                            </Bar>
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </div>

            {/* スコア分布グラフ */}
            <div className="bg-white p-6 rounded-lg shadow" data-oid="17ehzke">
                <h3 className="text-lg font-semibold mb-4" data-oid="vyqyw5r">
                    全体スコア分布
                </h3>
                <div className="h-[300px]" data-oid=".p:z8is">
                    <ResponsiveContainer width="100%" height="100%" data-oid="wllx5_n">
                        <AreaChart
                            data={distributionData}
                            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                            data-oid="5y-jvdo"
                        >
                            <CartesianGrid strokeDasharray="3 3" data-oid="g40h5pz" />
                            <XAxis
                                dataKey="score"
                                type="number"
                                domain={[0, 5]}
                                tickCount={6}
                                data-oid="dibh_va"
                            />

                            <YAxis data-oid="4364uws" />
                            <Tooltip
                                content={<DistributionTooltip data-oid="ql4y8h1" />}
                                data-oid="luejvqk"
                            />

                            <Area
                                type="monotone"
                                dataKey="count"
                                stroke="#8884d8"
                                fill="#8884d8"
                                fillOpacity={0.3}
                                data-oid="7xmzkm7"
                            />

                            {/* ユーザーのスコアを示す垂直線 */}
                            <CartesianGrid
                                verticalPoints={[userScore]}
                                stroke="#ff0000"
                                strokeWidth={2}
                                data-oid="vfb2r69"
                            />
                        </AreaChart>
                    </ResponsiveContainer>
                </div>
                <div className="text-sm text-center text-gray-500 mt-4" data-oid="ghoa417">
                    赤線はあなたの現在のスコア位置 ({userScore})
                </div>
            </div>
        </div>
    );
}
