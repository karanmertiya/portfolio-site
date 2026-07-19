import { groups, projects } from '@/data/projects';
import Link from 'next/link';
import { ArrowLeft, Github, ExternalLink } from 'lucide-react';
import { notFound } from 'next/navigation';

export function generateStaticParams() {
    return Object.keys(groups).map((group) => ({
        group: group,
    }));
}

export default async function GroupPage({ params }: { params: Promise<{ group: string }> }) {
    const { group } = await params;
    const groupData = groups[group as keyof typeof groups];

    if (!groupData) {
        notFound();
    }

    const groupProjects = projects.filter(p => p.group === group);

    return (
        <main className="min-h-screen bg-gray-50 pt-24 pb-12">
            <div className="container-width">
                <Link href="/projects" className="inline-flex items-center text-gray-500 hover:text-blue-600 mb-8 transition-colors">
                    <ArrowLeft className="w-4 h-4 mr-2" /> Back to Groups
                </Link>

                <div className="mb-12">
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">{groupData.title}</h1>
                    <p className="text-xl text-gray-600 max-w-3xl">{groupData.description}</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {groupProjects.map((project) => (
                        <div key={project.id} className="glass-card rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300">
                            <div className="h-48 bg-gradient-to-r from-blue-100 to-purple-100 flex items-center justify-center">
                                {/* Placeholder for project screenshot */}
                                <span className="text-blue-300 text-6xl font-bold opacity-20">{project.title[0]}</span>
                            </div>

                            <div className="p-6">
                                <div className="flex justify-between items-start mb-4">
                                    <h2 className="text-2xl font-bold text-gray-900">{project.title}</h2>
                                    <div className="flex gap-2">
                                        {project.repoUrl && (
                                            <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-900">
                                                <Github className="w-5 h-5" />
                                            </a>
                                        )}
                                        {project.demoUrl && (
                                            <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-600">
                                                <ExternalLink className="w-5 h-5" />
                                            </a>
                                        )}
                                    </div>
                                </div>

                                <p className="text-gray-600 mb-6 line-clamp-3">{project.description}</p>

                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.techStack.slice(0, 5).map((tech) => (
                                        <span key={tech} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-md font-medium">
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                <Link
                                    href={`/projects/${group}/${project.id}`}
                                    className="btn-primary w-full"
                                >
                                    View Case Study
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
}
