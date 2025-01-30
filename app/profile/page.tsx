'use client';

import { useState } from 'react';

export default function ProfilePage() {
    const [activeTab, setActiveTab] = useState('profile');

    const mockData = {
        profile: {
            name: 'Syoitu Den',
            location: 'Tokyo,Japan',
            role: 'バックエンドエンジニア',
            bio: 'もしお力になれるかもしれないと思ったら、ぜひメッセージをください。\n忙しい事ですので、どこかでご縁がありました際は、仲良くしていただけると幸いです。\n\n即時連絡をいただく場合、目的を把握しきれないことがありますので、対応できない場合があります。ご了承ください。',
        },
        scores: {
            technical: { score: 3.85, label: '技術力', note: '(TOP 4.39%)' },
            business: { score: 3.57, label: 'ビジネス力' },
            influence: { score: 3.61, label: '影響力' },
        },
        sns: {
            instagram: { followers: 682, following: 584 },
            tiktok: { likes: 195, followers: 6 },
        },
    };

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
                                <button className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-500 hover:text-gray-700">
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

            <main className="max-w-7xl mx-auto p-8">
                <div className="flex items-start space-x-8">
                    <div className="w-32 h-32 rounded-full overflow-hidden flex-shrink-0">
                        <img
                            src="/profile.jpg"
                            alt="Profile"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="flex-grow">
                        <div className="flex justify-between items-start">
                            <div>
                                <h1 className="text-2xl font-bold mb-2">{mockData.profile.name}</h1>
                                <div className="flex items-center text-gray-600 mb-4">
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
                                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                        />

                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                        />
                                    </svg>
                                    {mockData.profile.location}
                                    <span className="mx-2">•</span>
                                    {mockData.profile.role}
                                </div>
                            </div>
                            <div className="flex space-x-6">
                                <div className="text-center">
                                    <div className="text-sm text-gray-600">Instagram</div>
                                    <div className="font-medium">
                                        follow {mockData.sns.instagram.following} / follower{' '}
                                        {mockData.sns.instagram.followers}
                                    </div>
                                </div>
                                <div className="text-center">
                                    <div className="text-sm text-gray-600">TikTok</div>
                                    <div className="font-medium">
                                        follower {mockData.sns.tiktok.followers} / likes{' '}
                                        {mockData.sns.tiktok.likes}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <p className="text-gray-600 whitespace-pre-line mt-4">
                            {mockData.profile.bio}
                        </p>
                    </div>
                </div>

                <div className="mt-8 bg-white rounded-lg shadow p-6">
                    <div className="flex items-center mb-4">
                        <div className="bg-red-100 rounded-full p-2 mr-2">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6 text-red-500"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M13 10V3L4 14h7v7l9-11h-7z"
                                />
                            </svg>
                        </div>
                        <span className="font-medium">スコアをポスト</span>
                    </div>
                    <div className="grid grid-cols-3 gap-8">
                        {Object.entries(mockData.scores).map(([key, data]) => (
                            <div key={key} className="flex items-center">
                                <div className="w-24 h-2 bg-yellow-400 rounded-full mr-4"></div>
                                <div>
                                    <div className="flex items-baseline">
                                        <span className="text-2xl font-bold mr-2">
                                            {data.score}
                                        </span>
                                        {data.note && (
                                            <span className="text-sm text-gray-500">
                                                {data.note}
                                            </span>
                                        )}
                                    </div>
                                    <div className="text-sm text-gray-600">{data.label}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="text-sm text-gray-500 mt-4">
                        スコアは中央値が3.0、上位15.9%が3.5、上位2.3%が4.0です。
                    </div>
                </div>
            </main>
        </div>
    );
}
