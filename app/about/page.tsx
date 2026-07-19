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
                                <h2 className="text-3xl font-bold text-gray-900 mb-4">Full Stack Developer & AI Enthusiast</h2>
                                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                                    I&apos;m passionate about building intelligent systems that solve real-world problems.
                                    With a background in Applied Mathematics and Game Theory, I bring a unique perspective
                                    to software engineering, combining rigorous analytical thinking with modern web technologies.
                                </p>
                                <div className="flex gap-4">
                                    <button className="btn-primary">
                                        <Download className="w-5 h-5 mr-2" /> Download Resume
                                    </button>
                                    <a href="mailto:your.email@example.com" className="btn-secondary">
                                        <Mail className="w-5 h-5 mr-2" /> Contact Me
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-gray-100 pt-12">
                            <div>
                                <h3 className="text-xl font-bold text-gray-900 mb-4">Frontend</h3>
                                <ul className="space-y-2 text-gray-600">
                                    <li>React / Next.js</li>
                                    <li>TypeScript</li>
                                    <li>Tailwind CSS</li>
                                    <li>Framer Motion</li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-gray-900 mb-4">Backend</h3>
                                <ul className="space-y-2 text-gray-600">
                                    <li>Node.js / Express</li>
                                    <li>Python / FastAPI</li>
                                    <li>PostgreSQL / Redis</li>
                                    <li>Docker / Kubernetes</li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-gray-900 mb-4">AI / ML</h3>
                                <ul className="space-y-2 text-gray-600">
                                    <li>PyTorch / TensorFlow</li>
                                    <li>Reinforcement Learning</li>
                                    <li>NLP / LLMs</li>
                                    <li>Computer Vision</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
