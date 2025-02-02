export default function FeaturedContent() {
    const contents = [
        {
            type: 'article',
            thumbnail: '/content/salary-survey.jpg',
            title: 'ITエンジニア向け求人の年収調査',
            date: '2023年12月',
            tag: '年収サーベイ・分析',
            category: '調査報告',
        },
        {
            type: 'video',
            thumbnail: '/content/engineer-talk.jpg',
            title: 'LAPRAS Engineer Talk #0',
            description: '番組紹介',
            platform: 'YouTube',
        },
    ];

    return (
        <div className="bg-gray-50 py-24" data-oid=".etvchz">
            <div className="max-w-7xl mx-auto px-4" data-oid="u30p0_k">
                <div className="text-center mb-16" data-oid=".kjpy90">
                    <h2 className="text-3xl font-bold mb-4" data-oid="-laozxl">
                        特集記事・動画コンテンツ
                    </h2>
                </div>
                <div className="grid md:grid-cols-2 gap-8" data-oid="b4svg9h">
                    {contents.map((content, index) => (
                        <div key={index} className="group cursor-pointer" data-oid="dsoffm1">
                            <div
                                className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow"
                                data-oid="3iviomu"
                            >
                                <div className="relative aspect-video" data-oid="16w3wp_">
                                    <img
                                        src={content.thumbnail}
                                        alt={content.title}
                                        className="w-full h-full object-cover"
                                        data-oid=":1eudw."
                                    />

                                    {content.type === 'video' && (
                                        <div
                                            className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center"
                                            data-oid="ds0_68l"
                                        >
                                            <svg
                                                className="w-16 h-16 text-white"
                                                fill="currentColor"
                                                viewBox="0 0 24 24"
                                                data-oid="oi1dimb"
                                            >
                                                <path d="M8 5v14l11-7z" data-oid="ddghhle" />
                                            </svg>
                                        </div>
                                    )}
                                </div>
                                <div className="p-6" data-oid="jqn0:.:">
                                    {content.type === 'article' && (
                                        <div
                                            className="flex items-center space-x-2 mb-3"
                                            data-oid="aae:l10"
                                        >
                                            <span
                                                className="px-3 py-1 bg-blue-100 text-blue-800 text-xs rounded-full"
                                                data-oid="qyfyju3"
                                            >
                                                {content.tag}
                                            </span>
                                            <span
                                                className="text-gray-500 text-sm"
                                                data-oid="b9g14p_"
                                            >
                                                {content.date}
                                            </span>
                                        </div>
                                    )}
                                    <h3
                                        className="text-xl font-bold mb-2 group-hover:text-blue-600 transition-colors"
                                        data-oid="06tyq98"
                                    >
                                        {content.title}
                                    </h3>
                                    {content.type === 'video' && (
                                        <div
                                            className="flex items-center text-gray-500"
                                            data-oid="pa.xspv"
                                        >
                                            <svg
                                                className="w-5 h-5 mr-2"
                                                fill="currentColor"
                                                viewBox="0 0 24 24"
                                                data-oid=".9sybi4"
                                            >
                                                <path
                                                    d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"
                                                    data-oid="e:b5eka"
                                                />
                                            </svg>
                                            <span data-oid=":qgy0v0">{content.platform}</span>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="text-center mt-12" data-oid="ke0-th8">
                    <a
                        href="#"
                        className="inline-flex items-center justify-center px-6 py-3 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors"
                        data-oid="i.kz2hd"
                    >
                        他の記事を見る（LAPRAS NOTE）
                        <svg
                            className="w-4 h-4 ml-2"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            data-oid="syb_djk"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M9 5l7 7-7 7"
                                data-oid="bd7z4n."
                            />
                        </svg>
                    </a>
                </div>
            </div>
        </div>
    );
}
