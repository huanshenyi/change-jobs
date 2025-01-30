export default function Banner() {
    return (
        <div className="bg-white border-b">
            <div className="max-w-7xl mx-auto px-4">
                <a href="#" className="flex items-center justify-center py-2 hover:opacity-80">
                    <span className="flex items-center text-sm">
                        <span className="text-red-500 mr-2">📢</span>
                        <span>新スコアの感度をシェア！抽選でも名に松坂牛をプレゼント</span>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4 ml-1"
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
                    </span>
                </a>
            </div>
        </div>
    );
}
