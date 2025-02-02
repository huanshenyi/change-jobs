import { useState } from 'react';

export default function AutoProfile() {
    const [currentSlide, setCurrentSlide] = useState(0);

    return (
        <div className="bg-white py-24" data-oid="u7p5me7">
            <div className="max-w-7xl mx-auto px-4" data-oid="_qynz03">
                <div className="text-center mb-16" data-oid="gun:4.x">
                    <h2 className="text-3xl font-bold mb-4" data-oid="_s.7hio">
                        EC求人がアウトプットを収集し、
                        <br data-oid="w-80wcf" />
                        常に最新のプロフィールを自動生成。
                        <br data-oid="keg:s3i" />
                        あなたと共に、成長します。
                    </h2>
                    <p className="text-gray-600 max-w-3xl mx-auto" data-oid="9-.uzjh">
                        長いフォーム入力は不要。スキルや志向性を客観的に分析し、ポートフォリオを自動で生成。定期的に自身の成長を確認できます。
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-16 items-center" data-oid="e5-ruy6">
                    <div className="relative flex justify-center" data-oid=":8i.xr-">
                        <div className="w-[300px] relative" data-oid="kul11a.">
                            <img
                                src="/mobile-preview.png"
                                alt="モバイルプレビュー"
                                className="w-full"
                                data-oid="au.v0f0"
                            />
                        </div>
                        <div className="absolute bottom-[-30px] flex space-x-2" data-oid="-wuwap5">
                            {[0, 1, 2].map((index) => (
                                <button
                                    key={index}
                                    className={`w-2 h-2 rounded-full ${
                                        currentSlide === index ? 'bg-gray-800' : 'bg-gray-300'
                                    }`}
                                    onClick={() => setCurrentSlide(index)}
                                    data-oid="1guj02l"
                                />
                            ))}
                        </div>
                    </div>

                    <div className="space-y-12" data-oid="c1hcjfr">
                        <div data-oid="38n.hq0">
                            <h3 className="text-2xl font-bold mb-4" data-oid="sn0mv3o">
                                EC求人 SCORE
                            </h3>
                            <p className="text-gray-600" data-oid="tj4ss0s">
                                インターネット上で公開されているアウトプットに基づいて、
                                <br data-oid="c5cwowd" />
                                統計的に算出されたEC求人独自のスコアを算出
                            </p>
                        </div>

                        <div data-oid="ccn59o-">
                            <h3 className="text-2xl font-bold mb-4" data-oid="2xw2:dw">
                                Activity Log
                            </h3>
                            <p className="text-gray-600" data-oid="lvals0f">
                                イベント参加やブログ投稿、GitHubリポジトリへのコミットなど、
                                <br data-oid="vsix6pa" />
                                さまざまなアウトプットの記録を表示化
                            </p>
                        </div>

                        <div data-oid="bto8d_p">
                            <h3 className="text-2xl font-bold mb-4" data-oid="d0anpns">
                                Tags
                            </h3>
                            <p className="text-gray-600" data-oid="xnzzhz4">
                                アウトプットを統計的に処理し、頻度の高いワードを"タグ"として表示。あなたの"好き"や"得意"を可視化
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
