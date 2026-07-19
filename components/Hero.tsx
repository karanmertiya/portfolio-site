'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Github, Linkedin, Download } from 'lucide-react';
import Link from 'next/link';

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
            {/* Background Gradients */}
            <div className="absolute inset-0 z-0 opacity-30">
                <div className="absolute top-0 left-0 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
                <div className="absolute top-0 right-0 w-96 h-96 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
                <div className="absolute -bottom-8 left-20 w-96 h-96 bg-pink-400 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
            </div>

            <div className="container-width relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h1 className="mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
                        Building Intelligent Systems
                        <br />
                        <span className="text-gray-900">for the Future</span>
                    </h1>

                    <p className="mx-auto mb-8 max-w-2xl text-xl text-gray-600">
                        Full-stack developer specializing in AI/ML integration, financial analytics,
                        and scalable web architecture. Turning complex data into actionable insights.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
                        <Link href="/projects" className="btn-primary group">
                            Explore Projects
                            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                        </Link>

                        <button className="btn-secondary group">
                            <Download className="mr-2 h-5 w-5" />
                            Download Resume
                        </button>
                    </div>

                    <div className="flex items-center justify-center gap-6 text-gray-500 mb-12">
                        <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-900 transition-colors">
                            <Github className="h-6 w-6" />
                        </a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-700 transition-colors">
                            <Linkedin className="h-6 w-6" />
                        </a>
                    </div>

                    {/* Tech Badges */}
                    <div className="flex flex-wrap justify-center gap-3 opacity-80">
                        {['React', 'Next.js', 'TypeScript', 'Python', 'FastAPI', 'PostgreSQL', 'Docker', 'TensorFlow'].map((tech, index) => (
                            <motion.span
                                key={tech}
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.2 + index * 0.1 }}
                                className="px-4 py-2 rounded-full bg-white shadow-sm border border-gray-100 text-sm font-medium text-gray-700 hover:border-blue-200 hover:text-blue-600 transition-colors cursor-default"
                            >
                                {tech}
                            </motion.span>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
