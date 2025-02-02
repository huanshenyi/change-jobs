export default function SnsConnect() {
    const snsServices = [
        { name: 'GitHub', icon: '/sns/github.svg' },
        { name: 'X(Twitter)', icon: '/sns/x.svg' },
        { name: 'Qiita', icon: '/sns/qiita.svg' },
        { name: 'note', icon: '/sns/note.svg' },
        { name: 'teratail', icon: '/sns/teratail.svg' },
        { name: 'connpass', icon: '/sns/connpass.svg' },
        { name: 'Speaker Deck', icon: '/sns/speaker-deck.svg' },
        { name: 'Doorkeeper', icon: '/sns/doorkeeper.svg' },
        { name: 'Zenn', icon: '/sns/zenn.svg' },
    ];

    return (
        <div className="bg-white py-24" data-oid="q:44cfm">
            <div className="relative max-w-7xl mx-auto px-4" data-oid="p_dy5ti">
                <div
                    className="absolute bottom-0 left-[-50vw] right-[-50vw] h-[1px] bg-gray-200"
                    data-oid="lx5:0ks"
                ></div>
                <div className="border-b border-gray-200 pb-24" data-oid="k3axngy">
                    <div className="text-center" data-oid=".0exp3r">
                        <h2 className="text-3xl font-bold mb-16" data-oid="j0:c_-y">
                            SNSを連携するだけ
                        </h2>
                        <div
                            className="flex flex-wrap justify-center gap-8 mb-16"
                            data-oid="ib-b815"
                        >
                            {snsServices.map((service) => (
                                <div key={service.name} className="text-center" data-oid="mczhfgu">
                                    <img
                                        src={service.icon}
                                        alt={service.name}
                                        className="w-12 h-12 mb-2"
                                        data-oid="_.l:1j-"
                                    />

                                    <p className="text-sm text-gray-600" data-oid=":caw91u">
                                        {service.name}
                                    </p>
                                </div>
                            ))}
                        </div>
                        <button
                            className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-lg"
                            data-oid="-h4jrsd"
                        >
                            登録してポートフォリオを作成(無料)
                            <svg
                                className="w-5 h-5 ml-2"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                data-oid="r514z3l"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M9 5l7 7-7 7"
                                    data-oid="2-k-dm2"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
