import GroupCard from '@/components/GroupCard';
import { groups } from '@/data/projects';

export default function ProjectsPage() {
    return (
        <main className="min-h-screen bg-gray-50 pt-24 pb-12">
            <div className="container-width">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        Project <span className="text-blue-600">Groups</span>
                    </h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Explore my work organized by domain, from financial analytics to game theory simulations.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {Object.values(groups).map((group, index) => (
                        <GroupCard
                            key={group.id}
                            title={group.title}
                            description={group.description}
                            techStack={group.techStack}
                            progress={group.progress}
                            slug={group.id}
                            index={index}
                        />
                    ))}
                </div>
            </div>
        </main>
    );
}
