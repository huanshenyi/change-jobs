'use client';

import { useState } from 'react';
import ScoreDetail from '../components/ScoreDetail';

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
        <div className="min-h-screen bg-gray-50" data-oid="016.1m9">
            <nav className="bg-white shadow-sm border-b" data-oid="lbg1.4d">
                <div className="max-w-7xl mx-auto px-4" data-oid=".8yx:1t">
                    <div className="flex justify-between items-center h-16" data-oid="gf3spkt">
                        <div className="flex items-center" data-oid="e93d9lb">
                            <div className="flex-shrink-0" data-oid="wf.k14l">
                                <img
                                    src="/logo.svg"
                                    alt="Logo"
                                    className="h-8 w-auto"
                                    data-oid="n_zyrzk"
                                />
                            </div>
                            <div className="hidden md:flex ml-10 space-x-8" data-oid="rm:s1l5">
                                <button
                                    className={`inline-flex items-center px-1 pt-1 text-sm font-medium ${
                                        activeTab === 'profile'
                                            ? 'text-blue-600 border-b-2 border-blue-600'
                                            : 'text-gray-500 hover:text-gray-700'
                                    }`}
                                    onClick={() => setActiveTab('profile')}
                                    data-oid="ab9c5yv"
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
                                    data-oid="fh_prw2"
                                >
                                    Analytics
                                </button>
                                <button
                                    className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-500 hover:text-gray-700"
                                    data-oid="dkbvaly"
                                >
                                    My Activity
                                </button>
                                <button
                                    className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-500 hover:text-gray-700"
                                    data-oid="tdu-ltj"
                                >
                                    Career
                                </button>
                            </div>
                        </div>
                        <div className="flex items-center space-x-4" data-oid="g__craj">
                            <button
                                className="text-gray-500 hover:text-gray-700"
                                data-oid="so7.sux"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    data-oid="ogmmv9q"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                                        data-oid="hqx1kx6"
                                    />
                                </svg>
                            </button>
                            <button
                                className="text-gray-500 hover:text-gray-700"
                                data-oid="unkt4-6"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    data-oid="8b6v:s6"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                                        data-oid="53repka"
                                    />
                                </svg>
                            </button>
                            <button
                                className="text-gray-500 hover:text-gray-700"
                                data-oid="d8irj_w"
                            >
                                <span className="text-sm font-medium" data-oid="dp_t96d">
                                    日本語
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
            </nav>

            <div className="bg-white border-b" data-oid="v86z1s7">
                <div className="max-w-7xl mx-auto px-4" data-oid="l.3pd7h">
                    <div className="flex justify-between items-center h-12" data-oid="8oje1a-">
                        <div className="flex items-center space-x-4" data-oid="7bpguh7">
                            <span className="text-sm text-gray-600" data-oid=".508z3q">
                                このページは全て公開されています。
                            </span>
                            <div className="flex items-center" data-oid="_s3fq4f">
                                <span className="text-sm text-gray-600 mr-2" data-oid="-x10aq-">
                                    Web公開
                                </span>
                                <button
                                    className="relative inline-flex items-center h-6 rounded-full w-11 bg-gray-200"
                                    data-oid="wdo-u7g"
                                >
                                    <span
                                        className="absolute h-4 w-4 left-1 bg-white rounded-full"
                                        data-oid="ddyyhvx"
                                    ></span>
                                </button>
                            </div>
                        </div>
                        <div className="flex items-center space-x-4" data-oid="uce6anm">
                            <button
                                className="flex items-center text-sm text-gray-600"
                                data-oid="hmyuqn2"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-4 w-4 mr-1"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    data-oid="ey.a.f4"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                                        data-oid="-usqr25"
                                    />
                                </svg>
                                編集
                            </button>
                            <button
                                className="flex items-center text-sm text-gray-600"
                                data-oid="er:0kih"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-4 w-4 mr-1"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    data-oid="vx4rlji"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
                                        data-oid="2d::lo9"
                                    />
                                </svg>
                                共有
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-blue-50 border-b" data-oid="4gom5nr">
                <div className="max-w-7xl mx-auto px-4 py-3" data-oid="rlpd-fd">
                    <div className="flex items-center" data-oid="iy_0zzj">
                        <span className="text-blue-600 text-sm" data-oid="rgouc-1">
                            🎉 キャンペーン開催中・LAPRASの求人掲載キャンペーン
                        </span>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4 text-blue-600 ml-2"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            data-oid="3zr2fyd"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M9 5l7 7-7 7"
                                data-oid="xjk46.h"
                            />
                        </svg>
                    </div>
                </div>
            </div>

            <main className="max-w-7xl mx-auto p-8" data-oid="5sggj0b">
                <div className="flex items-start space-x-8" data-oid="x5li-1c">
                    <div
                        className="w-32 h-32 rounded-full overflow-hidden flex-shrink-0"
                        data-oid="jrxg9ym"
                    >
                        <img
                            src="/profile.jpg"
                            alt="Profile"
                            className="w-full h-full object-cover"
                            data-oid="80931xi"
                        />
                    </div>
                    <div className="flex-grow" data-oid=":wfb4_b">
                        <div className="flex justify-between items-start" data-oid="8fpxvvf">
                            <div className="flex-1" data-oid="wd2efm6">
                                <h1 className="text-2xl font-bold mb-2" data-oid="u3tlcks">
                                    {mockData.profile.name}
                                </h1>
                                <div
                                    className="flex items-center text-gray-600 mb-4"
                                    data-oid="n3rzqcl"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-4 w-4 mr-1"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        data-oid="4-d42mf"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                            data-oid="ywgyh1k"
                                        />

                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                            data-oid="irfymj0"
                                        />
                                    </svg>
                                    {mockData.profile.location}
                                    <span className="mx-2" data-oid="v-88n5u">
                                        •
                                    </span>
                                    {mockData.profile.role}
                                </div>
                                <p
                                    className="text-gray-600 whitespace-pre-line mb-6"
                                    data-oid="g51yir-"
                                >
                                    {mockData.profile.bio}
                                </p>

                                <div className="flex space-x-4" data-oid=":wrw8w4">
                                    <button
                                        className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors"
                                        data-oid="j:v91hk"
                                    >
                                        <svg
                                            className="w-5 h-5 mr-2 text-gray-900"
                                            viewBox="0 0 24 24"
                                            fill="currentColor"
                                            data-oid="itvbt04"
                                        >
                                            <path
                                                d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
                                                data-oid="fc.aj.r"
                                            />
                                        </svg>
                                        Xでシェア
                                    </button>
                                    <button
                                        className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500 transition-colors"
                                        data-oid=".om7o62"
                                    >
                                        <svg
                                            className="w-5 h-5 mr-2 text-pink-500"
                                            viewBox="0 0 24 24"
                                            fill="currentColor"
                                            data-oid="_lbk:3r"
                                        >
                                            <path
                                                d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.897 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.897-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"
                                                data-oid=".351tuw"
                                            />
                                        </svg>
                                        Instagramに投稿
                                    </button>
                                </div>
                            </div>

                            <div
                                className="ml-8 space-y-4 bg-gray-50 p-4 rounded-lg"
                                data-oid="ydvuluz"
                            >
                                <h3 className="font-medium text-gray-900 mb-3" data-oid="qa16sde">
                                    SNS Activity
                                </h3>

                                <div
                                    className="bg-white p-3 rounded-lg shadow-sm"
                                    data-oid="02y71bc"
                                >
                                    <div className="flex items-center mb-2" data-oid="lkb02oo">
                                        <svg
                                            className="w-5 h-5 text-pink-500 mr-2"
                                            viewBox="0 0 24 24"
                                            fill="currentColor"
                                            data-oid="i6my1wq"
                                        >
                                            <path
                                                d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.897 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.897-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"
                                                data-oid=":i7ocjv"
                                            />
                                        </svg>
                                        <span className="font-medium" data-oid="vf_zizv">
                                            Instagram
                                        </span>
                                    </div>
                                    <div className="grid grid-cols-2 gap-2" data-oid="vu3.yjy">
                                        <div className="bg-gray-50 p-2 rounded" data-oid="rwr3g5.">
                                            <div
                                                className="text-xs text-gray-500"
                                                data-oid="7_p.cr6"
                                            >
                                                Following
                                            </div>
                                            <div className="font-medium" data-oid="6nm.s6y">
                                                {mockData.sns.instagram.following}
                                            </div>
                                        </div>
                                        <div className="bg-gray-50 p-2 rounded" data-oid="55jqao2">
                                            <div
                                                className="text-xs text-gray-500"
                                                data-oid="yv8fm1t"
                                            >
                                                Followers
                                            </div>
                                            <div className="font-medium" data-oid="s0fopm1">
                                                {mockData.sns.instagram.followers}
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div
                                    className="bg-white p-3 rounded-lg shadow-sm"
                                    data-oid="y3a9j39"
                                >
                                    <div className="flex items-center mb-2" data-oid="7gl8urd">
                                        <svg
                                            className="w-5 h-5 text-black mr-2"
                                            viewBox="0 0 24 24"
                                            fill="currentColor"
                                            data-oid="erbd648"
                                        >
                                            <path
                                                d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"
                                                data-oid="x_5nq:y"
                                            />
                                        </svg>
                                        <span className="font-medium" data-oid="1jl41jd">
                                            TikTok
                                        </span>
                                    </div>
                                    <div className="grid grid-cols-2 gap-2" data-oid="23-1_vr">
                                        <div className="bg-gray-50 p-2 rounded" data-oid="72:mk3a">
                                            <div
                                                className="text-xs text-gray-500"
                                                data-oid="_teckf1"
                                            >
                                                Followers
                                            </div>
                                            <div className="font-medium" data-oid="ci4o:hi">
                                                {mockData.sns.tiktok.followers}
                                            </div>
                                        </div>
                                        <div className="bg-gray-50 p-2 rounded" data-oid=":zxap72">
                                            <div
                                                className="text-xs text-gray-500"
                                                data-oid="x675gtk"
                                            >
                                                Likes
                                            </div>
                                            <div className="font-medium" data-oid="ts6klw5">
                                                {mockData.sns.tiktok.likes}
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div
                                    className="bg-white p-3 rounded-lg shadow-sm"
                                    data-oid="d0-k1ye"
                                >
                                    <div className="flex items-center mb-2" data-oid="iue60jl">
                                        <svg
                                            className="w-5 h-5 text-gray-900 mr-2"
                                            viewBox="0 0 24 24"
                                            fill="currentColor"
                                            data-oid="3t5qfhh"
                                        >
                                            <path
                                                d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
                                                data-oid="ikkadqc"
                                            />
                                        </svg>
                                        <span className="font-medium" data-oid="1kg6bl7">
                                            X (Twitter)
                                        </span>
                                    </div>
                                    <div className="grid grid-cols-2 gap-2" data-oid="1bc9mod">
                                        <div className="bg-gray-50 p-2 rounded" data-oid="sr0qom:">
                                            <div
                                                className="text-xs text-gray-500"
                                                data-oid="wb1u-e_"
                                            >
                                                Followers
                                            </div>
                                            <div className="font-medium" data-oid="584e_mi">
                                                -
                                            </div>
                                        </div>
                                        <div className="bg-gray-50 p-2 rounded" data-oid="fnw8eu4">
                                            <div
                                                className="text-xs text-gray-500"
                                                data-oid="g3w:dxt"
                                            >
                                                Posts
                                            </div>
                                            <div className="font-medium" data-oid="u5w:40s">
                                                -
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-8" data-oid="cq8i3ns">
                    <ScoreDetail
                        totalScore={3.85}
                        details={[
                            {
                                name: 'GitHub',
                                description: '日々の活動量・リポジトリの内容',
                                value: 3.36,
                            },
                            { name: 'Tech Article', description: 'Zenn、Qiitaの記事', value: 4.31 },
                            {
                                name: 'Tech Event',
                                description: '技術系イベント参加歴',
                                value: 3.48,
                            },
                            {
                                name: 'Tag Count',
                                description: 'Level上位のスキルタグ数',
                                value: 3.87,
                            },
                        ]}
                        data-oid="-huk0xq"
                    />
                </div>
            </main>
        </div>
    );
}
