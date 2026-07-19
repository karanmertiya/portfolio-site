'use client';

import { projects } from '@/data/projects';
import { motion } from 'framer-motion';
import { Calendar, ArrowRight, Filter } from 'lucide-react';
import Link from 'next/link';
import { useState, useMemo } from 'react';

export default function TimelinePage() {
    const [sortDesc, setSortDesc] = useState(true);

    const sortedProjects = useMemo(() => {
        return [...projects].sort((a, b) => {
            // Simple date mapping for sorting
            const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

            // Extract year from semester (e.g., "Fall 2024" -> 2024)
            const getYear = (sem: string) => {
                const parts = sem.split(' ');
                return parts.length > 1 ? parseInt(parts[1]) : 0;
            };
            const getMonthIdx = (m: string) => months.indexOf(m);

            const yearA = getYear(a.timeline.semester);
            const yearB = getYear(b.timeline.semester);

            if (yearA !== yearB) return sortDesc ? yearB - yearA : yearA - yearB;

            const monthA = getMonthIdx(a.timeline.month);
            const monthB = getMonthIdx(b.timeline.month);

            return sortDesc ? monthB - monthA : monthA - monthB;
        });
    }, [sortDesc]);

    return (
        <main className="min-h-screen bg-gray-50 pt-24 pb-12">
            <div className="container-width">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        Project <span className="text-blue-600">Timeline</span>
                    </h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        A chronological journey through my development milestones and technical achievements.
                    </p>
                </div>

                <div className="flex justify-end mb-8">
                    <button
                        onClick={() => setSortDesc(!sortDesc)}
                        className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg shadow-sm border border-gray-200 text-gray-600 hover:text-blue-600 transition-colors"
                    >
                        <Filter className="w-4 h-4" />
                        {sortDesc ? 'Newest First' : 'Oldest First'}
                    </button>
                </div>

                <div className="relative max-w-4xl mx-auto">
                    {/* Vertical Line */}
                    <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-blue-200 transform md:-translate-x-1/2" />

                    <div className="space-y-12">
                        {sortedProjects.map((project, index) => (
                            <motion.div
                                key={project.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className={`relative flex flex-col md:flex-row gap-8 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''
                                    }`}
                            >
                                {/* Timeline Dot */}
                                <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-md transform -translate-x-1/2 mt-6 z-10" />

                                {/* Content Card */}
                                <div className="ml-12 md:ml-0 md:w-1/2">
                                    <div className={`glass-card p-6 rounded-xl relative hover:scale-[1.02] transition-transform duration-300 ${index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'
                                        }`}>
                                        <div className="flex items-center gap-2 text-blue-600 font-semibold mb-2">
                                            <Calendar className="w-4 h-4" />
                                            <span>{project.timeline.month} {project.timeline.semester.split(' ')[1]}</span>
                                        </div>

                                        <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                                        <p className="text-gray-600 mb-4 text-sm line-clamp-2">{project.description}</p>

                                        <div className="flex flex-wrap gap-2 mb-4">
                                            {project.techStack.slice(0, 3).map(tech => (
                                                <span key={tech} className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-md">
                                                    {tech}
                                                </span>
                                            ))}
                                            {project.techStack.length > 3 && (
                                                <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-md">
                                                    +{project.techStack.length - 3}
                                                </span>
                                            )}
                                        </div>

                                        <div className="space-y-2 mb-4">
                                            {project.timeline.milestones.map((milestone, i) => (
                                                <div key={i} className="flex items-center gap-2 text-sm text-gray-500">
                                                    <div className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                                                    {milestone}
                                                </div>
                                            ))}
                                        </div>

                                        <Link
                                            href={`/projects/${project.group}/${project.id}`}
                                            className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium text-sm"
                                        >
                                            View Case Study <ArrowRight className="w-4 h-4 ml-1" />
                                        </Link>
                                    </div>
                                </div>

                                {/* Empty space for the other side */}
                                <div className="hidden md:block md:w-1/2" />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </main>
    );
}
