import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'My New App',
    description: 'Generated by Onlook',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en" data-oid="mi5-w5q">
            <body className={inter.className} data-oid="nh0tbvw">
                {children}
            </body>
        </html>
    );
}
