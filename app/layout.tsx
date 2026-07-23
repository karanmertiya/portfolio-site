import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from 'next/link';
import { Download, Menu, X } from 'lucide-react';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Karan Singh Mertiya | AI Engineer & Full Stack Developer",
  description: "Portfolio of Karan Singh Mertiya, an undergraduate researcher in efficient LLM inference, quantisation & hardware-aware machine learning.",
  keywords: ["AI Engineer", "Full Stack Developer", "Machine Learning", "LLM", "Quantisation", "Python", "CUDA", "React", "Karan Singh Mertiya"],
  authors: [{ name: "Karan Singh Mertiya" }],
  openGraph: {
    title: "Karan Singh Mertiya | AI Engineer & Full Stack Developer",
    description: "Undergraduate researcher in efficient LLM inference, quantisation & hardware-aware machine learning.",
    type: "website",
    locale: "en_US",
    siteName: "Karan Singh Mertiya Portfolio",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
          <div className="container-width">
            <div className="flex items-center justify-between h-16">
              <Link href="/" className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
                Portfolio
              </Link>

              <div className="hidden md:flex items-center gap-8">
                <Link href="/projects" className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors">Projects</Link>
                <Link href="/timeline" className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors">Timeline</Link>
                <Link href="/about" className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors">About</Link>
                <button className="btn-primary text-sm py-2 px-4">
                  <Download className="w-4 h-4 mr-2" /> Resume
                </button>
              </div>

              <button className="md:hidden p-2 text-gray-600">
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </nav>
        {children}
      </body>
    </html>
  );
}
