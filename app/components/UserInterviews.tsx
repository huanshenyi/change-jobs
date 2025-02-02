export default function UserInterviews() {
    const interviews = [
        {
            image: '/interviews/user1.jpg',
            quote: 'LAPRASというサービスの考えは魅力的だっていないんだからこそユーザーと共創します。',
            name: 'かとじゅん',
            username: '@jdi2e',
            noteUrl: '#',
        },
        {
            image: '/interviews/user2.jpg',
            quote: 'いろいろなサービスを一気に連携できるし、その情報がログインする前からすでにできているという体験がちょっと驚きでした。',
            name: 'まつもとりー',
            username: '@matsumotory',
            noteUrl: '#',
        },
        {
            image: '/interviews/user3.jpg',
            quote: '好きが溢しいので言えばめっちゃ好きですよ。私はLAPRASをプロフィールサイトとして、とても使われていると思っているんです。',
            name: 'はんくし',
            username: '@yaaaannqush',
            noteUrl: '#',
        },
    ];

    const awards = [
        {
            image: '/awards/award1.jpg',
            name: '宮所 亮',
            question: 'アウトプットを継続するために大切にしていることは？',
        },
        {
            image: '/awards/award2.jpg',
            name: 'Kento Yamada',
            question:
                '執筆を続けたことで華麗出やも転職のチャンスを引き寄せた、Kento.Yamadaさんのアウトプット術',
        },
        {
            image: '/awards/award3.jpg',
            name: '中村',
            question: '手を貫いてみる、触ったものをすぐにアウトプットする行動力',
        },
    ];

    return (
        <div className="bg-white py-24 relative" data-oid="mckou1l">
            <div
                className="absolute top-0 left-1/2 transform -translate-x-1/2 w-16 h-[1px] bg-gray-200"
                data-oid="crfi1x3"
            ></div>
            <div className="max-w-7xl mx-auto px-4" data-oid="xa9xb-z">
                <div className="text-center mb-16" data-oid="2we3dpz">
                    <h2 className="text-3xl font-bold" data-oid="a8cz05f">
                        ユーザーインタビュー
                    </h2>
                    <p className="text-gray-600 mt-4" data-oid="vdhkv1t">
                        LAPRASポートフォリオの活用について
                    </p>
                </div>

                {/* インタビュー部分 */}
                <div className="grid md:grid-cols-3 gap-8 mb-24" data-oid="nvhu9v.">
                    {interviews.map((interview, index) => (
                        <div key={index} className="bg-gray-50 rounded-lg p-6" data-oid="q2t.u1k">
                            <div className="aspect-[4/3] mb-6" data-oid="6cpumv:">
                                <img
                                    src={interview.image}
                                    alt={interview.name}
                                    className="w-full h-full object-cover rounded-lg"
                                    data-oid="lwm4inp"
                                />
                            </div>
                            <p
                                className="text-gray-800 mb-4 text-lg leading-relaxed"
                                data-oid="md8zdqo"
                            >
                                「{interview.quote}」
                            </p>
                            <div className="flex items-center justify-between" data-oid="d2mxewj">
                                <div data-oid="vobo8ru">
                                    <p className="font-medium" data-oid="rgr:x:.">
                                        {interview.name}さん
                                    </p>
                                    <p className="text-gray-600 text-sm" data-oid="2djyob.">
                                        {interview.username}
                                    </p>
                                </div>
                                <a
                                    href={interview.noteUrl}
                                    className="inline-flex items-center justify-center px-4 py-2 bg-blue-100 text-blue-700 rounded-lg hover:bg-blue-200 transition-colors"
                                    data-oid="qx3x9z:"
                                >
                                    NOTE
                                </a>
                            </div>
                        </div>
                    ))}
                </div>

                {/* アワード部分 */}
                <div className="text-center mb-12" data-oid="pe1.41d">
                    <h3 className="text-2xl font-bold mb-8" data-oid="10jve14">
                        LAPRASポートフォリオを活用してアウトプットされているユーザーの方
                    </h3>
                </div>
                <div className="grid md:grid-cols-3 gap-8" data-oid="4nztn2d">
                    {awards.map((award, index) => (
                        <div
                            key={index}
                            className="bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg p-6 text-white"
                            data-oid="0u:yyg1"
                        >
                            <div className="aspect-[4/3] mb-6" data-oid="k:vahay">
                                <img
                                    src={award.image}
                                    alt={award.name}
                                    className="w-full h-full object-cover rounded-lg"
                                    data-oid="u:s2t:a"
                                />
                            </div>
                            <p className="font-medium mb-2" data-oid="m23hs3t">
                                {award.name}さん
                            </p>
                            <p className="text-sm opacity-90" data-oid="p:7maib">
                                「{award.question}」
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
