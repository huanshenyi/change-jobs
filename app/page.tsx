'use client';

import Link from 'next/link';
import MobilePreview from './components/MobilePreview';
import SignupButtons from './components/SignupButtons';
import Banner from './components/Banner';
import CompanyLogos from './components/CompanyLogos';
import WhyLapras from './components/WhyLapras';
import AutoProfile from './components/AutoProfile';
import SnsConnect from './components/SnsConnect';
import UserInterviews from './components/UserInterviews';
import FeaturedContent from './components/FeaturedContent';

export default function Page() {
    return (
        <div className="min-h-screen">
            <header className="bg-white border-b">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="flex justify-between items-center h-16">
                        <div className="flex items-center">
                            <img src="/logo.svg" alt="EC求人" className="h-8" />
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

            <AutoProfile />

            <SnsConnect />

            <UserInterviews />

            <FeaturedContent />

            <footer className="bg-gray-50 border-t border-gray-200 py-12">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="grid grid-cols-4 gap-8 mb-8">
                        <div>
                            <h3 className="font-medium text-gray-900 mb-4">サービス</h3>
                            <ul className="space-y-2">
                                <li>
                                    <a
                                        href="#"
                                        className="text-sm text-gray-600 hover:text-gray-900"
                                    >
                                        活用している企業
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="text-sm text-gray-600 hover:text-gray-900"
                                    >
                                        EC求人の使い方説明
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="text-sm text-gray-600 hover:text-gray-900"
                                    >
                                        自動生成プロフィール
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="text-sm text-gray-600 hover:text-gray-900"
                                    >
                                        EC求人 SCORE
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="text-sm text-gray-600 hover:text-gray-900"
                                    >
                                        企業からの直接アプローチ
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-medium text-gray-900 mb-4">メディア</h3>
                            <ul className="space-y-2">
                                <li>
                                    <a
                                        href="#"
                                        className="text-sm text-gray-600 hover:text-gray-900"
                                    >
                                        ユーザーインタビュー
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="text-sm text-gray-600 hover:text-gray-900"
                                    >
                                        FAQ
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="text-sm text-gray-600 hover:text-gray-900"
                                    >
                                        ギフトカード情報
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="text-sm text-gray-600 hover:text-gray-900"
                                    >
                                        お問い合わせ
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-medium text-gray-900 mb-4">会社情報</h3>
                            <ul className="space-y-2">
                                <li>
                                    <a
                                        href="#"
                                        className="text-sm text-gray-600 hover:text-gray-900"
                                    >
                                        EC求人 NOTE
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="text-sm text-gray-600 hover:text-gray-900"
                                    >
                                        EC求人 AI LAB
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="text-sm text-gray-600 hover:text-gray-900"
                                    >
                                        会社概要
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="text-sm text-gray-600 hover:text-gray-900"
                                    >
                                        ニュース
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="text-sm text-gray-600 hover:text-gray-900"
                                    >
                                        採用情報
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="border-t border-gray-200 pt-8">
                        <div className="flex justify-between items-center text-sm text-gray-600">
                            <div>© EC求人 Inc. All Rights Reserved.</div>
                            <div className="flex space-x-4">
                                <a href="#" className="hover:text-gray-900">
                                    プライバシーポリシー
                                </a>
                                <a href="#" className="hover:text-gray-900">
                                    利用規約
                                </a>
                                <a href="#" className="hover:text-gray-900">
                                    反社会的勢力の排除について
                                </a>
                                <a href="#" className="hover:text-gray-900">
                                    特定商取引法に基づく表記について
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}
