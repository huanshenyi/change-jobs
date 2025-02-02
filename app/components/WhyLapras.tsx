export default function WhyLapras() {
    const features = [
        {
            title: 'LAPRAS SCORE',
            description: 'あなたの経験と市場価値をスコアリング',
            icon: (
                <svg
                    className="w-8 h-8 text-indigo-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    data-oid="8qv1rn7"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                        data-oid="38roj6a"
                    />
                </svg>
            ),
        },
        {
            title: 'AIレビュー',
            description: 'AI が知見とレビュー',
            icon: (
                <svg
                    className="w-8 h-8 text-indigo-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    data-oid="0fmd9t5"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        data-oid="8wj0l8d"
                    />
                </svg>
            ),
        },
        {
            title: '興味通知',
            description: 'ワンクリックで企業に通信',
            icon: (
                <svg
                    className="w-8 h-8 text-indigo-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    data-oid="p597wf9"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                        data-oid="fk1vzva"
                    />
                </svg>
            ),
        },
        {
            title: '足跡機能',
            description: 'ワンクリックで企業とコミュニケーション',
            icon: (
                <svg
                    className="w-8 h-8 text-indigo-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    data-oid="qxf.jgz"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                        data-oid="xokmb3l"
                    />
                </svg>
            ),
        },
    ];

    return (
        <div className="bg-white py-24" data-oid="3cwxqh:">
            <div className="max-w-7xl mx-auto px-4" data-oid="1tagfzw">
                <div className="text-center mb-16" data-oid="epw5l86">
                    <h2 className="text-3xl font-bold mb-4" data-oid="zxcgdha">
                        Nint求人が選ばれる理由
                    </h2>
                    <p className="text-xl font-medium text-gray-600" data-oid="pkx7eji">
                        「自動生成」プロフィール
                    </p>
                </div>
                <div className="grid md:grid-cols-2 gap-12" data-oid="iya239:">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow"
                            data-oid="ncmrv9q"
                        >
                            <div
                                className="bg-white rounded-full w-16 h-16 flex items-center justify-center mb-6 shadow-sm"
                                data-oid="q-7izrz"
                            >
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-bold mb-2" data-oid="duq_gkv">
                                {feature.title}
                            </h3>
                            <p className="text-gray-600" data-oid="s-:i_xq">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
