'use client';

import { useState } from 'react';
import { ExternalLink, Play, AlertCircle } from 'lucide-react';

interface DemoEmbedProps {
    url: string;
    title: string;
}

export default function DemoEmbed({ url, title }: DemoEmbedProps) {
    const [isPlaying, setIsPlaying] = useState(false);
    const [error, setError] = useState(false);

    if (error) {
        return (
            <div className="w-full h-96 bg-gray-100 rounded-xl flex flex-col items-center justify-center text-center p-8 border-2 border-dashed border-gray-300">
                <AlertCircle className="w-12 h-12 text-gray-400 mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Demo Unavailable</h3>
                <p className="text-gray-500 mb-6">The demo could not be loaded. It might be blocked by browser security settings.</p>
                <a
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary"
                >
                    Open in New Tab <ExternalLink className="w-4 h-4 ml-2" />
                </a>
            </div>
        );
    }

    if (!isPlaying) {
        return (
            <div className="w-full h-96 bg-gradient-to-br from-gray-900 to-blue-900 rounded-xl flex flex-col items-center justify-center text-center p-8 relative overflow-hidden group cursor-pointer"
                onClick={() => setIsPlaying(true)}>

                {/* Abstract Background */}
                <div className="absolute inset-0 opacity-20">
                    <div className="absolute top-0 left-0 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
                    <div className="absolute bottom-0 right-0 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
                </div>

                <div className="relative z-10 transform group-hover:scale-105 transition-transform duration-300">
                    <div className="w-20 h-20 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center mb-6 mx-auto border border-white/20 shadow-xl group-hover:bg-white/20 transition-colors">
                        <Play className="w-8 h-8 text-white fill-current ml-1" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">Launch Live Demo</h3>
                    <p className="text-blue-100 mb-6">Interact with {title} in a secure sandbox environment</p>
                    <button className="px-6 py-2 bg-white text-blue-900 rounded-full font-semibold text-sm hover:bg-blue-50 transition-colors">
                        Start Demo
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="w-full rounded-xl overflow-hidden border border-gray-200 shadow-lg bg-white">
            <div className="bg-gray-50 border-b border-gray-200 px-4 py-2 flex justify-between items-center">
                <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-400" />
                    <div className="w-3 h-3 rounded-full bg-yellow-400" />
                    <div className="w-3 h-3 rounded-full bg-green-400" />
                </div>
                <span className="text-xs text-gray-500 font-mono truncate max-w-xs">{url}</span>
                <a
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-blue-600"
                    title="Open in new tab"
                >
                    <ExternalLink className="w-4 h-4" />
                </a>
            </div>
            <iframe
                src={url}
                title={`Demo of ${title}`}
                className="w-full h-[600px] bg-white"
                sandbox="allow-scripts allow-same-origin allow-forms"
                loading="lazy"
                onError={() => setError(true)}
            />
        </div>
    );
}
