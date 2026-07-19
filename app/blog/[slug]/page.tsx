import { blogPosts } from '@/data/blog';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, Calendar, Clock, Tag } from 'lucide-react';

export function generateStaticParams() {
    return blogPosts.map((post) => ({
        slug: post.slug,
    }));
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
    const post = blogPosts.find((p) => p.slug === params.slug);

    if (!post) {
        notFound();
    }

    return (
        <main className="min-h-screen bg-gray-50 pt-24 pb-12">
            <div className="container-width">
                <Link
                    href="/blog"
                    className="inline-flex items-center text-gray-600 hover:text-blue-600 mb-8 transition-colors"
                >
                    <ArrowLeft className="w-4 h-4 mr-2" /> Back to Blog
                </Link>

                <article className="max-w-3xl mx-auto">
                    <header className="text-center mb-12">
                        <div className="flex items-center justify-center gap-4 text-sm text-gray-500 mb-6">
                            <span className="flex items-center gap-1">
                                <Calendar className="w-4 h-4" /> {post.date}
                            </span>
                            <span className="flex items-center gap-1">
                                <Clock className="w-4 h-4" /> {post.readTime}
                            </span>
                            <span className="flex items-center gap-1 px-3 py-1 bg-blue-50 text-blue-600 rounded-full font-medium text-xs">
                                <Tag className="w-3 h-3" /> {post.category}
                            </span>
                        </div>
                        <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                            {post.title}
                        </h1>
                        <p className="text-xl text-gray-600 leading-relaxed">
                            {post.excerpt}
                        </p>
                    </header>

                    <div
                        className="prose prose-lg prose-blue mx-auto bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-gray-100"
                        dangerouslySetInnerHTML={{ __html: post.content }}
                    />
                </article>
            </div>
        </main>
    );
}
