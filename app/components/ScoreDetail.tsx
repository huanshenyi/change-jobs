'use client';

interface ScoreDetailProps {
    details: {
        name: string;
        description: string;
        value: number;
    }[];
    totalScore: number;
}

export default function ScoreDetail({ totalScore, details }: ScoreDetailProps) {
    return (
        <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* 左側: 個人スコア詳細 */}
                <div className="space-y-6">
                    <div className="flex items-center justify-between pb-4 border-b border-gray-100">
                        <h3 className="text-lg font-semibold text-gray-900">個人スコア詳細</h3>
                        <div className="flex items-center">
                            <span className="text-sm text-gray-500 mr-2">技術力スコア</span>
                            <span className="text-3xl font-bold text-indigo-600">{totalScore}</span>
                        </div>
                    </div>

                    <div className="space-y-5">
                        {details.map((detail, index) => (
                            <div key={index} className="relative">
                                <div className="flex items-center justify-between mb-2">
                                    <div className="flex flex-col">
                                        <span className="text-sm font-medium text-gray-700">
                                            {detail.name}
                                        </span>
                                        <span className="text-xs text-gray-500 mt-0.5">
                                            {detail.description}
                                        </span>
                                    </div>
                                    <span className="text-sm font-semibold text-gray-900 ml-4">
                                        {detail.value.toFixed(2)}
                                    </span>
                                </div>
                                <div className="h-2 bg-gray-100 rounded-full">
                                    <div
                                        className="h-2 bg-indigo-600 rounded-full transition-all duration-300"
                                        style={{ width: `${(detail.value / 5) * 100}%` }}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* 右側: 全体での位置づけ */}
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-6">
                    <div className="flex flex-col items-center">
                        <h3 className="text-lg font-semibold text-gray-900 mb-6">
                            全体での位置づけ
                        </h3>
                        <div className="w-full max-w-md">
                            <div className="relative">
                                <div className="h-3 bg-blue-200 rounded-full">
                                    <div
                                        className="absolute h-3 bg-blue-600 rounded-full transition-all duration-300"
                                        style={{ width: `${(totalScore / 5) * 100}%` }}
                                    />
                                </div>
                                <div className="flex justify-between mt-2">
                                    <span className="text-xs text-gray-500">0</span>
                                    <span className="text-xs text-gray-500">5.0</span>
                                </div>
                            </div>
                            <div className="mt-6 text-center">
                                <p className="text-sm text-gray-600 leading-relaxed">
                                    LAPRASの全ユーザーのスコアの
                                    <br />
                                    正規分布曲線の中での位置
                                </p>
                                <div className="mt-4 bg-white rounded-lg p-4 shadow-sm">
                                    <span className="text-2xl font-bold text-indigo-600">
                                        上位 {Math.round((1 - totalScore / 5) * 100)}%
                                    </span>
                                    <p className="text-sm text-gray-500 mt-1">
                                        のユーザーに位置します
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
