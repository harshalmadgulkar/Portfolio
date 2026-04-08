// app/blog/page.tsx
import Link from "next/link";

export default function BlogPage() {
    return (
        <section className="min-h-screen bg-black text-white pt-28 pb-20">
            <div className="max-w-7xl mx-auto px-6">
                <div className="mb-16">
                    <h1 className="text-5xl md:text-6xl font-bold tracking-tight bg-linear-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent">
                        Blog
                    </h1>
                    <p className="text-gray-400 mt-4 text-lg">
                        Thoughts on MERN Stack, React architecture, full-stack development, and lessons from real-world projects.
                    </p>
                </div>

                {/* Blog posts will appear here */}
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {/* Placeholder card – will be replaced when you add real posts */}
                    <div className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:border-orange-500/50 transition-all group">
                        <div className="text-orange-400 text-sm mb-3">COMING SOON</div>
                        <h3 className="text-2xl font-semibold mb-3 group-hover:text-orange-400 transition-colors">
                            How I Built a Scalable Role-Based MERN Dashboard for Government Projects
                        </h3>
                        <p className="text-gray-400 line-clamp-3">
                            Lessons learned while developing the School Management Information System and Clinic Licensing Platform.
                        </p>
                        <div className="mt-8 flex justify-between items-center text-sm">
                            <span className="text-gray-500">April 2026</span>
                            <span className="text-orange-400 hover:underline">Read →</span>
                        </div>
                    </div>
                </div>

                <p className="text-center text-gray-500 mt-16">
                    More articles coming soon...
                </p>
            </div>
        </section>
    );
}