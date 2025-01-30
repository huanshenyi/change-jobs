export default function MobilePreview() {
    return (
        <div className="relative max-w-[320px] aspect-[320/400] bg-white rounded-3xl shadow-2xl overflow-hidden w-[313px] h-[449px]">
            <div className="p-4">
                <div className="flex items-center justify-between mb-4">
                    <div className="text-lg font-bold">あなたに興味がある企業</div>
                    <div className="text-sm text-gray-500">2024/01/25</div>
                </div>
                <div className="flex items-center space-x-2 mb-4">
                    <button className="px-4 py-1 bg-blue-600 text-white rounded-full text-sm">
                        未応募
                    </button>
                    <button className="px-4 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                        アーカイブ
                    </button>
                </div>
                <div className="border rounded-lg p-4">
                    <div className="flex items-center mb-2">
                        <img src="/logo.svg" alt="LAPRAS" className="h-8 w-8 mr-2" />

                        <div className="font-bold">株式会社LAPRAS</div>
                    </div>
                    <p className="text-sm text-gray-600">
                        これらの条件でDashboard Engineerとして採用を検討しています
                    </p>
                </div>
            </div>
        </div>
    );
}
