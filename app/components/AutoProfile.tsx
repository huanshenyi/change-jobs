import { useState } from 'react';

export default function AutoProfile() {
    const [currentSlide, setCurrentSlide] = useState(0);

    return (
        <div className="bg-white py-24">
            <div className="max-w-7xl mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold mb-4">
                        EC求人がアウトプットを収集し、
                        <br />
                        常に最新のプロフィールを自動生成。
                        <br />
                        あなたと共に、成長します。
                    </h2>
                    <p className="text-gray-600 max-w-3xl mx-auto">
                        長いフォーム入力は不要。スキルや志向性を客観的に分析し、ポートフォリオを自動で生成。定期的に自身の成長を確認できます。
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-16 items-center">
                    <div className="relative flex justify-center">
                        <div className="w-[300px] relative">
                            <img
                                src="/mobile-preview.png"
                                alt="モバイルプレビュー"
                                className="w-full"
                            />
                        </div>
                        <div className="absolute bottom-[-30px] flex space-x-2">
                            {[0, 1, 2].map((index) => (
                                <button
                                    key={index}
                                    className={`w-2 h-2 rounded-full ${
                                        currentSlide === index ? 'bg-gray-800' : 'bg-gray-300'
                                    }`}
                                    onClick={() => setCurrentSlide(index)}
                                />
                            ))}
                        </div>
                    </div>

                    <div className="space-y-12">
                        <div>
                            <h3 className="text-2xl font-bold mb-4">EC求人 SCORE</h3>
                            <p className="text-gray-600">
                                インターネット上で公開されているアウトプットに基づいて、
                                <br />
                                統計的に算出されたEC求人独自のスコアを算出
                            </p>
                        </div>

                        <div>
                            <h3 className="text-2xl font-bold mb-4">Activity Log</h3>
                            <p className="text-gray-600">
                                イベント参加やブログ投稿、GitHubリポジトリへのコミットなど、
                                <br />
                                さまざまなアウトプットの記録を表示化
                            </p>
                        </div>

                        <div>
                            <h3 className="text-2xl font-bold mb-4">Tags</h3>
                            <p className="text-gray-600">
                                アウトプットを統計的に処理し、頻度の高いワードを"タグ"として表示。あなたの"好き"や"得意"を可視化
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
