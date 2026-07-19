'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Layers } from 'lucide-react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

interface GroupCardProps {
    title: string;
    description: string;
    techStack: string[];
    progress: { mvp: boolean; v1: boolean; v2: boolean };
    slug: string;
    index: number;
}

export default function GroupCard({ title, description, techStack, progress, slug, index }: GroupCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="glass-card rounded-xl p-6 hover:shadow-2xl transition-all duration-300 group relative overflow-hidden"
        >
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <Layers className="w-24 h-24 text-blue-600" />
            </div>

            <div className="relative z-10">
                <h3 className="text-2xl font-bold text-blue-600 mb-2">{title}</h3>
                <p className="text-gray-600 mb-6 h-20 line-clamp-3">{description}</p>

                {/* Progress Bar */}
                <div className="mb-6">
                    <div className="flex justify-between text-xs font-medium text-gray-500 mb-2">
                        <span className={cn(progress.mvp ? "text-green-600" : "text-gray-400")}>MVP</span>
                        <span className={cn(progress.v1 ? "text-green-600" : "text-gray-400")}>v1.0</span>
                        <span className={cn(progress.v2 ? "text-green-600" : "text-gray-400")}>v2.0</span>
                    </div>
                    <div className="h-2 bg-gray-100 rounded-full overflow-hidden flex">
                        <div className={cn("h-full transition-all duration-500 bg-green-500", progress.mvp ? "w-1/3" : "w-0")} />
                        <div className={cn("h-full transition-all duration-500 bg-green-500 border-l border-white", progress.v1 ? "w-1/3" : "w-0")} />
                        <div className={cn("h-full transition-all duration-500 bg-green-500 border-l border-white", progress.v2 ? "w-1/3" : "w-0")} />
                    </div>
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                    {techStack.slice(0, 4).map((tech) => (
                        <span key={tech} className="px-2 py-1 bg-blue-50 text-blue-700 text-xs rounded-md font-medium">
                            {tech}
                        </span>
                    ))}
                    {techStack.length > 4 && (
                        <span className="px-2 py-1 bg-gray-50 text-gray-600 text-xs rounded-md font-medium">
                            +{techStack.length - 4}
                        </span>
                    )}
                </div>

                <Link
                    href={`/projects/${slug}`}
                    className="inline-flex items-center text-blue-600 font-semibold group-hover:translate-x-1 transition-transform"
                >
                    View Projects <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
            </div>
        </motion.div>
    );
}
