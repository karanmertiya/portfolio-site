import { groups, projects } from '@/data/projects';
import { ArrowLeft, Github, ExternalLink, Database, Cpu, Layers } from 'lucide-react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import PDFDownloadButton from '@/components/PDFDownloadButton';
import DemoEmbed from '@/components/DemoEmbed';

export function generateStaticParams() {
    return projects.map((project) => ({
        group: project.group,
        project: project.id,
    }));
}

export default async function ProjectPage({ params }: { params: Promise<{ group: string; project: string }> }) {
    const { group, project: projectId } = await params;
    const project = projects.find((p) => p.id === projectId);
    const groupData = groups[group as keyof typeof groups];

    if (!project || !groupData) {
        notFound();
    }

    return (
        <main className="min-h-screen bg-gray-50 pt-24 pb-12">
            <div className="container-width">
                <Link
                    href={`/projects/${groupData.id}`}
                    className="inline-flex items-center text-gray-600 hover:text-blue-600 mb-8 transition-colors"
                >
                    <ArrowLeft className="w-4 h-4 mr-2" /> Back to {groupData.title}
                </Link>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Main Content */}
                    <div className="lg:col-span-2 space-y-8">
                        <div className="glass-card rounded-2xl p-8">
                            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{project.title}</h1>
                            <p className="text-xl text-gray-600 mb-8 leading-relaxed">{project.description}</p>

                            <div className="flex flex-wrap gap-4 mb-8">
                                <a
                                    href={project.repoUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn-primary"
                                >
                                    <Github className="w-5 h-5 mr-2" /> View Code
                                </a>
                                {project.demoUrl && (
                                    <a
                                        href={project.demoUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="btn-secondary"
                                    >
                                        <ExternalLink className="w-5 h-5 mr-2" /> Live Demo
                                    </a>
                                )}
                                <PDFDownloadButton project={project} />
                            </div>

                            <div className="space-y-8">
                                <div>
                                    <h2 className="text-2xl font-bold text-gray-900 mb-4">The Problem</h2>
                                    <p className="text-gray-600 leading-relaxed">{project.problem}</p>
                                </div>
                                <div>
                                    <h2 className="text-2xl font-bold text-gray-900 mb-4">The Solution</h2>
                                    <p className="text-gray-600 leading-relaxed">{project.solution}</p>
                                </div>
                            </div>
                        </div>

                        {/* Interactive Demo Section */}
                        {project.demoUrl && (
                            <div className="mb-12">
                                <h2 className="text-2xl font-bold text-gray-900 mb-6">Interactive Demo</h2>
                                <DemoEmbed url={project.demoUrl} title={project.title} />
                            </div>
                        )}

                        {/* Architecture Section */}
                        {project.architecture && (
                            <div className="glass-card rounded-2xl p-8">
                                <div className="flex items-center gap-3 mb-6">
                                    <Layers className="w-6 h-6 text-blue-600" />
                                    <h2 className="text-2xl font-bold text-gray-900">System Architecture</h2>
                                </div>
                                <p className="text-gray-600 mb-6">{project.architecture.description}</p>
                                <div className="bg-gray-100 rounded-xl h-64 flex items-center justify-center border-2 border-dashed border-gray-300">
                                    <span className="text-gray-400 font-medium">Architecture Diagram Placeholder</span>
                                </div>
                            </div>
                        )}

                        {/* Database & API Section */}
                        {project.database && (
                            <div className="glass-card rounded-2xl p-8">
                                <div className="flex items-center gap-3 mb-6">
                                    <Database className="w-6 h-6 text-blue-600" />
                                    <h2 className="text-2xl font-bold text-gray-900">Database & APIs</h2>
                                </div>
                                <div className="overflow-x-auto">
                                    <table className="w-full text-left border-collapse">
                                        <thead>
                                            <tr className="border-b border-gray-200">
                                                <th className="py-3 px-4 text-sm font-semibold text-gray-600">Method</th>
                                                <th className="py-3 px-4 text-sm font-semibold text-gray-600">Endpoint</th>
                                                <th className="py-3 px-4 text-sm font-semibold text-gray-600">Description</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {project.database.endpoints.map((endpoint, i) => (
                                                <tr key={i} className="border-b border-gray-100 last:border-0 hover:bg-gray-50/50">
                                                    <td className="py-3 px-4">
                                                        <span className="inline-block px-2 py-1 rounded text-xs font-mono font-medium bg-blue-100 text-blue-700">
                                                            {endpoint.method}
                                                        </span>
                                                    </td>
                                                    <td className="py-3 px-4 font-mono text-sm text-gray-600">{endpoint.path}</td>
                                                    <td className="py-3 px-4 text-sm text-gray-600">{endpoint.description}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Sidebar */}
                    <div className="space-y-8">
                        {/* Tech Stack */}
                        <div className="glass-card rounded-2xl p-6">
                            <h3 className="text-lg font-bold text-gray-900 mb-4">Tech Stack</h3>
                            <div className="flex flex-wrap gap-2">
                                {project.techStack.map((tech) => (
                                    <span
                                        key={tech}
                                        className="px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-sm font-medium border border-blue-100"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* ML Metrics */}
                        {project.ml && (
                            <div className="glass-card rounded-2xl p-6">
                                <div className="flex items-center gap-2 mb-4">
                                    <Cpu className="w-5 h-5 text-purple-600" />
                                    <h3 className="text-lg font-bold text-gray-900">ML Performance</h3>
                                </div>
                                <div className="space-y-4">
                                    <div>
                                        <div className="text-xs text-gray-500 uppercase tracking-wider mb-1">Model Architecture</div>
                                        <div className="font-medium text-gray-900">{project.ml.model}</div>
                                    </div>
                                    <div>
                                        <div className="text-xs text-gray-500 uppercase tracking-wider mb-1">Inference Latency</div>
                                        <div className="font-medium text-gray-900">{project.ml.inferenceLatency}</div>
                                    </div>
                                    <div className="pt-4 border-t border-gray-100">
                                        <div className="text-xs text-gray-500 uppercase tracking-wider mb-2">Key Metrics</div>
                                        <div className="grid grid-cols-2 gap-4">
                                            {Object.entries(project.ml.metrics).map(([key, value]) => (
                                                <div key={key} className="bg-gray-50 p-3 rounded-lg text-center">
                                                    <div className="text-lg font-bold text-blue-600">{value}</div>
                                                    <div className="text-xs text-gray-500 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </main>
    );
}
