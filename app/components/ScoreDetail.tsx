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
        <div className="bg-white rounded-lg shadow-sm p-6" data-oid="y4o:tp7">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8" data-oid=".z5_19-">
                {/* 左側: 個人スコア詳細 */}
                <div className="space-y-6" data-oid="7a0e:82">
                    <div
                        className="flex items-center justify-between pb-4 border-b border-gray-100"
                        data-oid="oaersoe"
                    >
                        <h3 className="text-lg font-semibold text-gray-900" data-oid="awu3n30">
                            個人スコア詳細
                        </h3>
                        <div className="flex items-center" data-oid=":k3p57n">
                            <span className="text-sm text-gray-500 mr-2" data-oid="u75051:">
                                技術力スコア
                            </span>
                            <span className="text-3xl font-bold text-indigo-600" data-oid="6j6mp:u">
                                {totalScore}
                            </span>
                        </div>
                    </div>

                    <div className="space-y-5" data-oid="43br53:">
                        {details.map((detail, index) => (
                            <div key={index} className="relative" data-oid="ecud0yh">
                                <div
                                    className="flex items-center justify-between mb-2"
                                    data-oid="ty_:_c6"
                                >
                                    <div className="flex flex-col" data-oid="d8:_kdv">
                                        <span
                                            className="text-sm font-medium text-gray-700"
                                            data-oid="x4aytgj"
                                        >
                                            {detail.name}
                                        </span>
                                        <span
                                            className="text-xs text-gray-500 mt-0.5"
                                            data-oid="qq36d4b"
                                        >
                                            {detail.description}
                                        </span>
                                    </div>
                                    <span
                                        className="text-sm font-semibold text-gray-900 ml-4"
                                        data-oid="x6qnva1"
                                    >
                                        {detail.value.toFixed(2)}
                                    </span>
                                </div>
                                <div className="h-2 bg-gray-100 rounded-full" data-oid="gakmsj2">
                                    <div
                                        className="h-2 bg-indigo-600 rounded-full transition-all duration-300"
                                        style={{ width: `${(detail.value / 5) * 100}%` }}
                                        data-oid="e-gx4md"
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* 右側: 全体での位置づけ */}
                <div
                    className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-6"
                    data-oid="p9i8mey"
                >
                    <div className="flex flex-col items-center" data-oid="js41307">
                        <h3 className="text-lg font-semibold text-gray-900 mb-6" data-oid="3oqjzzv">
                            全体での位置づけ
                        </h3>
                        <div className="w-full max-w-md" data-oid="52xl.ln">
                            <div className="relative" data-oid="-kh:kxe">
                                <div className="h-3 bg-blue-200 rounded-full" data-oid="nqqh-:_">
                                    <div
                                        className="absolute h-3 bg-blue-600 rounded-full transition-all duration-300"
                                        style={{ width: `${(totalScore / 5) * 100}%` }}
                                        data-oid="mwet5re"
                                    />
                                </div>
                                <div className="flex justify-between mt-2" data-oid="1h2bhse">
                                    <span className="text-xs text-gray-500" data-oid="gno7sl_">
                                        0
                                    </span>
                                    <span className="text-xs text-gray-500" data-oid="nn32vgw">
                                        5.0
                                    </span>
                                </div>
                            </div>
                            <div className="mt-6 text-center" data-oid="6z.efty">
                                <p
                                    className="text-sm text-gray-600 leading-relaxed"
                                    data-oid="xeer5fk"
                                >
                                    LAPRASの全ユーザーのスコアの
                                    <br data-oid="pq2xgt5" />
                                    正規分布曲線の中での位置
                                </p>
                                <div
                                    className="mt-4 bg-white rounded-lg p-4 shadow-sm"
                                    data-oid="1rze7vg"
                                >
                                    <span
                                        className="text-2xl font-bold text-indigo-600"
                                        data-oid="n_q.-i-"
                                    >
                                        上位 {Math.round((1 - totalScore / 5) * 100)}%
                                    </span>
                                    <p className="text-sm text-gray-500 mt-1" data-oid="n0.v3-q">
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
