'use client';

import Link from 'next/link';
import MobilePreview from './components/MobilePreview';
import SignupButtons from './components/SignupButtons';
import Banner from './components/Banner';
import CompanyLogos from './components/CompanyLogos';
import WhyLapras from './components/WhyLapras';
import FeaturedContent from './components/FeaturedContent';

export default function Page() {
    return (
        <div className="min-h-screen">
            <header className="bg-white border-b">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="flex justify-between items-center h-16">
                        <div className="flex items-center">
                            <img src="/logo.svg" alt="LAPRAS" className="h-8" />
                        </div>
                        <div className="flex items-center space-x-8">
                            <nav className="hidden md:flex items-center space-x-8">
                                <a href="#" className="text-sm text-gray-600 hover:text-gray-900">
                                    採用のプロフィール
                                </a>
                                <a href="#" className="text-sm text-gray-600 hover:text-gray-900">
                                    技術力のスコア化
                                </a>
                                <a href="#" className="text-sm text-gray-600 hover:text-gray-900">
                                    企業からの問合せ
                                </a>
                                <a href="#" className="text-sm text-gray-600 hover:text-gray-900">
                                    ユーザーインタビュー
                                </a>
                            </nav>
                            <div className="flex items-center space-x-4">
                                <button className="text-sm text-indigo-700 font-medium hover:text-indigo-800">
                                    採用の問い合わせ
                                </button>
                                <button className="text-sm text-white bg-indigo-700 px-4 py-2 rounded hover:bg-indigo-800">
                                    はじめてみる
                                </button>
                                <button className="text-sm text-gray-600 hover:text-gray-900">
                                    ログイン
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <Banner />

            <div className="bg-gradient-to-br from-indigo-600 via-purple-500 to-pink-500">
                <div className="relative max-w-7xl mx-auto px-4 py-16">
                    <div className="grid md:grid-cols-2 gap-8 items-center">
                        <div className="relative z-10">
                            <h1 className="text-4xl font-bold text-white mb-6">
                                アウトプットから
                                <br />
                                技術力や市場価値をスコア化
                            </h1>
                            <p className="text-lg text-white mb-8">
                                ブログやSNSなどの分析して技術力や価値などを見出し、
                                <br />
                                企業からのスカウトで転職活動ができます。
                            </p>
                        </div>
                        <div className="flex justify-center w-[605px] h-[398px]">
                            <MobilePreview />
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-white py-16 border-b border-gray-200">
                <SignupButtons />
            </div>

            <CompanyLogos />

            <div className="border-t border-gray-200">
                <WhyLapras />
            </div>

            <FeaturedContent />
        </div>
    );
}
