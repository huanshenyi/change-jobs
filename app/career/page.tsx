'use client';

import { useState } from 'react';

export default function CareerPage() {
    const [activeTab, setActiveTab] = useState('career');
    return (
        <div className="min-h-screen bg-gray-50">
            <nav className="bg-white shadow-sm border-b">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="flex justify-between items-center h-16">
                        <div className="flex items-center">
                            <div className="flex-shrink-0">
                                <img src="/logo.svg" alt="Logo" className="h-8 w-auto" />
                            </div>
                            <div className="hidden md:flex ml-10 space-x-8">
                                <button
                                    className={`inline-flex items-center px-1 pt-1 text-sm font-medium ${
                                        activeTab === 'profile'
                                            ? 'text-blue-600 border-b-2 border-blue-600'
                                            : 'text-gray-500 hover:text-gray-700'
                                    }`}
                                    onClick={() => setActiveTab('profile')}
                                >
                                    Portfolio
                                </button>
                                <button
                                    className={`inline-flex items-center px-1 pt-1 text-sm font-medium ${
                                        activeTab === 'jobs'
                                            ? 'text-blue-600 border-b-2 border-blue-600'
                                            : 'text-gray-500 hover:text-gray-700'
                                    }`}
                                    onClick={() => setActiveTab('jobs')}
                                >
                                    Analytics
                                </button>
                                <button className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-500 hover:text-gray-700">
                                    My Activity
                                </button>
                                <button
                                    className={`inline-flex items-center px-1 pt-1 text-sm font-medium ${
                                        activeTab === 'career'
                                            ? 'text-blue-600 border-b-2 border-blue-600'
                                            : 'text-gray-500 hover:text-gray-700'
                                    }`}
                                >
                                    Career
                                </button>
                            </div>
                        </div>
                        <div className="flex items-center space-x-4">
                            <button className="text-gray-500 hover:text-gray-700">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                                    />
                                </svg>
                            </button>
                            <button className="text-gray-500 hover:text-gray-700">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                                    />
                                </svg>
                            </button>
                            <button className="text-gray-500 hover:text-gray-700">
                                <span className="text-sm font-medium">日本語</span>
                            </button>
                        </div>
                    </div>
                </div>
            </nav>
            {/* 公開設定バー */}
            <div className="bg-white border-b">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="flex justify-between items-center h-12">
                        <div className="flex items-center space-x-4">
                            <span className="text-sm text-gray-600">
                                このページは全て公開されています。
                            </span>
                            <div className="flex items-center">
                                <span className="text-sm text-gray-600 mr-2">Web公開</span>
                                <button className="relative inline-flex items-center h-6 rounded-full w-11 bg-gray-200">
                                    <span className="absolute h-4 w-4 left-1 bg-white rounded-full"></span>
                                </button>
                            </div>
                        </div>
                        <div className="flex items-center space-x-4">
                            <button className="flex items-center text-sm text-gray-600">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-4 w-4 mr-1"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                                    />
                                </svg>
                                編集
                            </button>
                            <button className="flex items-center text-sm text-gray-600">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-4 w-4 mr-1"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
                                    />
                                </svg>
                                共有
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            {/* キャンペーンバナー */}
            <div className="bg-blue-50 border-b">
                <div className="max-w-7xl mx-auto px-4 py-3">
                    <div className="flex items-center">
                        <span className="text-blue-600 text-sm">
                            🎉 キャンペーン開催中・LAPRASの求人掲載キャンペーン
                        </span>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4 text-blue-600 ml-2"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M9 5l7 7-7 7"
                            />
                        </svg>
                    </div>
                </div>
            </div>
            {/* Main Content */}
            <main className="max-w-7xl mx-auto px-4 py-8">
                {/* メインコンテンツ */}
                <div className="flex min-h-screen">
                    {/* 左サイドバー */}
                    <div className="w-72 bg-white border-r">
                        <div className="p-4">
                            <div className="flex items-center justify-between mb-4">
                                <div className="flex items-center">
                                    <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                                        71%
                                    </div>
                                    <span className="ml-3 text-sm text-gray-600">入力完了</span>
                                </div>
                            </div>
                            <nav className="space-y-1">
                                <a
                                    href="#"
                                    className="flex items-center px-3 py-2 text-sm font-medium text-blue-600 bg-blue-50 rounded-md"
                                >
                                    転職意欲
                                </a>
                                <a
                                    href="#"
                                    className="flex items-center px-3 py-2 text-sm font-medium text-gray-600 hover:bg-gray-50 rounded-md"
                                >
                                    希望条件
                                </a>
                                <a
                                    href="#"
                                    className="flex items-center px-3 py-2 text-sm font-medium text-gray-600 hover:bg-gray-50 rounded-md"
                                >
                                    今後のキャリアでやりたいこと
                                </a>
                                <a
                                    href="#"
                                    className="flex items-center px-3 py-2 text-sm font-medium text-gray-600 hover:bg-gray-50 rounded-md"
                                >
                                    職務要約
                                </a>
                                <a
                                    href="#"
                                    className="flex items-center px-3 py-2 text-sm font-medium text-gray-600 hover:bg-gray-50 rounded-md"
                                >
                                    経験技術
                                </a>
                                <a
                                    href="#"
                                    className="flex items-center px-3 py-2 text-sm font-medium text-gray-600 hover:bg-gray-50 rounded-md"
                                >
                                    職歴
                                </a>
                                <a
                                    href="#"
                                    className="flex items-center px-3 py-2 text-sm font-medium text-gray-600 hover:bg-gray-50 rounded-md"
                                >
                                    学歴
                                </a>
                            </nav>
                        </div>
                    </div>

                    {/* メインコンテンツエリア */}
                    <div className="flex-1 bg-gray-50">
                        <div className="max-w-3xl mx-auto py-8 px-4">
                            {/* Profile Section */}
                            <div className="bg-white rounded-lg shadow p-6 mb-8">
                                <div className="flex items-start justify-between mb-6">
                                    <div>
                                        <h1 className="text-2xl font-bold mb-2">田中 太郎</h1>
                                        <p className="text-gray-600">Frontend Engineer</p>
                                    </div>
                                    <div className="text-right">
                                        <div className="text-sm text-gray-600 mb-1">スコア</div>
                                        <div className="text-2xl font-bold text-indigo-600">75</div>
                                    </div>
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <h2 className="text-lg font-semibold mb-2">基本情報</h2>
                                        <div className="space-y-2">
                                            <div className="flex">
                                                <span className="w-32 text-gray-600">年齢</span>
                                                <span>28歳</span>
                                            </div>
                                            <div className="flex">
                                                <span className="w-32 text-gray-600">居住地</span>
                                                <span>東京都</span>
                                            </div>
                                            <div className="flex">
                                                <span className="w-32 text-gray-600">最終学歴</span>
                                                <span>東京大学</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <h2 className="text-lg font-semibold mb-2">職務経歴</h2>
                                        <div className="space-y-2">
                                            <div className="flex">
                                                <span className="w-32 text-gray-600">現職</span>
                                                <span>株式会社ABC</span>
                                            </div>
                                            <div className="flex">
                                                <span className="w-32 text-gray-600">職種</span>
                                                <span>フロントエンドエンジニア</span>
                                            </div>
                                            <div className="flex">
                                                <span className="w-32 text-gray-600">経験年数</span>
                                                <span>5年</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-white rounded-lg shadow-sm p-6">
                                <h2 className="text-lg font-medium text-gray-900 mb-6">転職意欲</h2>
                                <div className="space-y-4">
                                    <div className="flex items-center">
                                        <input
                                            type="radio"
                                            name="jobChange"
                                            className="h-4 w-4 text-blue-600"
                                        />

                                        <label className="ml-3 text-sm text-gray-700">
                                            高：転職活動をしている
                                        </label>
                                    </div>
                                    <div className="flex items-center">
                                        <input
                                            type="radio"
                                            name="jobChange"
                                            className="h-4 w-4 text-blue-600"
                                            defaultChecked
                                        />

                                        <label className="ml-3 text-sm text-gray-700">
                                            中：転職活動はしていないが良さそうな所があれば話だけでも聞いてみたい
                                        </label>
                                    </div>
                                    <div className="flex items-center">
                                        <input
                                            type="radio"
                                            name="jobChange"
                                            className="h-4 w-4 text-blue-600"
                                        />

                                        <label className="ml-3 text-sm text-gray-700">
                                            なし：転職予定はない
                                        </label>
                                    </div>
                                </div>

                                <h2 className="text-lg font-medium text-gray-900 mt-8 mb-6">
                                    希望条件
                                </h2>
                                <div className="space-y-6">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            年収
                                        </label>
                                        <div className="flex items-center">
                                            <input
                                                type="text"
                                                className="w-32 rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                                                defaultValue="800"
                                            />

                                            <span className="ml-2 text-sm text-gray-600">
                                                万円以上
                                            </span>
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            勤務地（複数選択）
                                        </label>
                                        <div className="flex flex-wrap gap-2">
                                            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gray-100">
                                                東京都
                                                <button className="ml-1 text-gray-500 hover:text-gray-700">
                                                    ×
                                                </button>
                                            </span>
                                            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gray-100">
                                                茨城県
                                                <button className="ml-1 text-gray-500 hover:text-gray-700">
                                                    ×
                                                </button>
                                            </span>
                                            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gray-100">
                                                群馬県
                                                <button className="ml-1 text-gray-500 hover:text-gray-700">
                                                    ×
                                                </button>
                                            </span>
                                        </div>
                                        <div className="mt-2 flex items-center">
                                            <label className="flex items-center text-sm text-gray-600">
                                                <input
                                                    type="checkbox"
                                                    className="h-4 w-4 text-blue-600 rounded"
                                                />

                                                <span className="ml-2">海外を含む</span>
                                            </label>
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            働き方（複数選択）
                                        </label>
                                        <div className="space-x-4">
                                            <label className="inline-flex items-center">
                                                <input
                                                    type="checkbox"
                                                    className="h-4 w-4 text-blue-600 rounded"
                                                />

                                                <span className="ml-2 text-sm text-gray-700">
                                                    フルリモート
                                                </span>
                                            </label>
                                            <label className="inline-flex items-center">
                                                <input
                                                    type="checkbox"
                                                    className="h-4 w-4 text-blue-600 rounded"
                                                    defaultChecked
                                                />

                                                <span className="ml-2 text-sm text-gray-700">
                                                    一部リモート
                                                </span>
                                            </label>
                                            <label className="inline-flex items-center">
                                                <input
                                                    type="checkbox"
                                                    className="h-4 w-4 text-blue-600 rounded"
                                                />

                                                <span className="ml-2 text-sm text-gray-700">
                                                    出社
                                                </span>
                                            </label>
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            雇用形態（複数選択）
                                        </label>
                                        <div className="space-x-4">
                                            <label className="inline-flex items-center">
                                                <input
                                                    type="checkbox"
                                                    className="h-4 w-4 text-blue-600 rounded"
                                                    defaultChecked
                                                />

                                                <span className="ml-2 text-sm text-gray-700">
                                                    社員
                                                </span>
                                            </label>
                                            <label className="inline-flex items-center">
                                                <input
                                                    type="checkbox"
                                                    className="h-4 w-4 text-blue-600 rounded"
                                                    defaultChecked
                                                />

                                                <span className="ml-2 text-sm text-gray-700">
                                                    副業
                                                </span>
                                            </label>
                                            <label className="inline-flex items-center">
                                                <input
                                                    type="checkbox"
                                                    className="h-4 w-4 text-blue-600 rounded"
                                                />

                                                <span className="ml-2 text-sm text-gray-700">
                                                    フリーランス
                                                </span>
                                            </label>
                                            <label className="inline-flex items-center">
                                                <input
                                                    type="checkbox"
                                                    className="h-4 w-4 text-blue-600 rounded"
                                                />

                                                <span className="ml-2 text-sm text-gray-700">
                                                    パートナーシップ
                                                </span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Skills Section */}
                            <div className="bg-white rounded-lg shadow p-6 mb-8">
                                <h2 className="text-xl font-bold mb-4">スキル</h2>
                                <div className="space-y-4">
                                    <div>
                                        <h3 className="font-semibold mb-2">プログラミング言語</h3>
                                        <div className="flex flex-wrap gap-2">
                                            <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">
                                                JavaScript
                                            </span>
                                            <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">
                                                TypeScript
                                            </span>
                                            <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">
                                                Python
                                            </span>
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className="font-semibold mb-2">フレームワーク</h3>
                                        <div className="flex flex-wrap gap-2">
                                            <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">
                                                React
                                            </span>
                                            <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">
                                                Next.js
                                            </span>
                                            <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">
                                                Vue.js
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Experience Section */}
                            <div className="bg-white rounded-lg shadow p-6">
                                <h2 className="text-xl font-bold mb-4">職務経歴</h2>
                                <div className="space-y-6">
                                    <div>
                                        <div className="flex justify-between mb-2">
                                            <h3 className="font-semibold">株式会社ABC</h3>
                                            <span className="text-gray-600">2020年4月 - 現在</span>
                                        </div>
                                        <p className="text-gray-600 mb-2">
                                            フロントエンドエンジニア
                                        </p>
                                        <p className="text-sm">
                                            Webアプリケーションのフロントエンド開発を担当。React/Next.jsを用いた大規模アプリケーションの設計・実装。
                                        </p>
                                    </div>
                                    <div>
                                        <div className="flex justify-between mb-2">
                                            <h3 className="font-semibold">株式会社XYZ</h3>
                                            <span className="text-gray-600">
                                                2018年4月 - 2020年3月
                                            </span>
                                        </div>
                                        <p className="text-gray-600 mb-2">Webエンジニア</p>
                                        <p className="text-sm">
                                            社内システムの開発・保守。Vue.jsを使用したフロントエンド開発、PHPによるバックエンド開発。
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            {/* Footer */}
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
