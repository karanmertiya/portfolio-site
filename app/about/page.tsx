import { Download, Mail } from 'lucide-react';

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-gray-50 pt-24 pb-12">
            <div className="container-width">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-16">
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                            About <span className="text-blue-600">Me</span>
                        </h1>
                    </div>

                    <div className="glass-card rounded-2xl p-8 md:p-12 mb-12">
                        <div className="flex flex-col md:flex-row gap-12 items-center mb-12">
                            <div className="w-48 h-48 bg-gray-200 rounded-full flex-shrink-0 overflow-hidden">
                                {/* Placeholder for profile photo */}
                                <div className="w-full h-full bg-gradient-to-br from-blue-400 to-purple-500" />
                            </div>
                            <div>
                                <h2 className="text-3xl font-bold text-gray-900 mb-4">AI Engineer & Hardware-Aware ML Researcher</h2>
                                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                                    I am an undergraduate conducting independent research in efficient LLM inference, quantisation, and hardware-aware machine learning.
                                    I am currently seeking an AI or ML Engineering internship focused on efficient foundation models and systems optimisation.
                                </p>
                                <div className="flex gap-4">
                                    <button className="btn-primary">
                                        <Download className="w-5 h-5 mr-2" /> Download Resume
                                    </button>
                                    <a href="mailto:karanmertiya92@gmail.com" className="btn-secondary">
                                        <Mail className="w-5 h-5 mr-2" /> Contact Me
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-gray-100 pt-12">
                            <div>
                                <h3 className="text-xl font-bold text-gray-900 mb-4">Programming & Core</h3>
                                <ul className="space-y-2 text-gray-600">
                                    <li>Python & C++</li>
                                    <li>CUDA</li>
                                    <li>TypeScript & Node.js</li>
                                    <li>Verilog</li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-gray-900 mb-4">Machine Learning</h3>
                                <ul className="space-y-2 text-gray-600">
                                    <li>PyTorch</li>
                                    <li>Hugging Face Transformers</li>
                                    <li>Quantisation (INT4, vBFP)</li>
                                    <li>RAG</li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-gray-900 mb-4">Tools & Frameworks</h3>
                                <ul className="space-y-2 text-gray-600">
                                    <li>React</li>
                                    <li>Vector Databases</li>
                                    <li>lm-eval-harness</li>
                                    <li>Git & MATLAB</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
