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
        <div className="bg-white py-24 relative">
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-16 h-[1px] bg-gray-200"></div>
            <div className="max-w-7xl mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold">ユーザーインタビュー</h2>
                    <p className="text-gray-600 mt-4">LAPRASポートフォリオの活用について</p>
                </div>

                {/* インタビュー部分 */}
                <div className="grid md:grid-cols-3 gap-8 mb-24">
                    {interviews.map((interview, index) => (
                        <div key={index} className="bg-gray-50 rounded-lg p-6">
                            <div className="aspect-[4/3] mb-6">
                                <img
                                    src={interview.image}
                                    alt={interview.name}
                                    className="w-full h-full object-cover rounded-lg"
                                />
                            </div>
                            <p className="text-gray-800 mb-4 text-lg leading-relaxed">
                                「{interview.quote}」
                            </p>
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="font-medium">{interview.name}さん</p>
                                    <p className="text-gray-600 text-sm">{interview.username}</p>
                                </div>
                                <a
                                    href={interview.noteUrl}
                                    className="inline-flex items-center justify-center px-4 py-2 bg-blue-100 text-blue-700 rounded-lg hover:bg-blue-200 transition-colors"
                                >
                                    NOTE
                                </a>
                            </div>
                        </div>
                    ))}
                </div>

                {/* アワード部分 */}
                <div className="text-center mb-12">
                    <h3 className="text-2xl font-bold mb-8">
                        LAPRASポートフォリオを活用してアウトプットされているユーザーの方
                    </h3>
                </div>
                <div className="grid md:grid-cols-3 gap-8">
                    {awards.map((award, index) => (
                        <div
                            key={index}
                            className="bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg p-6 text-white"
                        >
                            <div className="aspect-[4/3] mb-6">
                                <img
                                    src={award.image}
                                    alt={award.name}
                                    className="w-full h-full object-cover rounded-lg"
                                />
                            </div>
                            <p className="font-medium mb-2">{award.name}さん</p>
                            <p className="text-sm opacity-90">「{award.question}」</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
