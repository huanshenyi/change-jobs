'use client';
const companies = [
    { name: 'CyberAgent', logo: '/companies/cyberagent.png' },
    { name: 'MIXI', logo: '/companies/mixi.png' },
    { name: 'SmartHR', logo: '/companies/smarthr.png' },
    { name: 'NewsPicks', logo: '/companies/newspicks.png' },
    { name: 'Hatena', logo: '/companies/hatena.png' },
    { name: 'Chatwork', logo: '/companies/chatwork.png' },
    { name: 'BASE', logo: '/companies/base.png' },
    { name: 'freee', logo: '/companies/freee.png' },
    { name: 'Raksul', logo: '/companies/raksul.png' },
    { name: 'Globis', logo: '/companies/globis.png' },
    { name: 'Bizreach', logo: '/companies/bizreach.png' },
    { name: 'Mirrative', logo: '/companies/mirrative.png' },
];

export default function CompanyLogos() {
    return (
        <div className="bg-white py-16" data-oid="5.lbjyy">
            <div className="max-w-7xl mx-auto px-4" data-oid="lwo2ltk">
                <div className="text-center mb-12" data-oid="ajnxwh:">
                    <h2 className="text-2xl font-bold mb-2" data-oid="o1lctwa">
                        厳選スタートアップ・大手企業からスカウトが届きます
                    </h2>
                    <p className="text-gray-600" data-oid=":po:lyx">
                        累計1000社以上が利用
                    </p>
                </div>
                <div className="overflow-hidden" data-oid="lgs4qts">
                    <div className="flex space-x-8 animate-marquee" data-oid="tuzsls_">
                        {[...companies, ...companies].map((company, index) => (
                            <div key={index} className="flex-none w-40" data-oid="xlnxng4">
                                <div
                                    className="h-16 flex items-center justify-center"
                                    data-oid="ko5vmw4"
                                >
                                    <img
                                        src={company.logo}
                                        alt={company.name}
                                        className="max-h-full max-w-full object-contain grayscale hover:grayscale-0 transition-all"
                                        data-oid="3hn6g3g"
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
