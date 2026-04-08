// app/sitemap.ts
import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const baseUrl = "https://harshalmadgulkar.live";

    // Static pages
    const staticPages = [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: "weekly" as const,
            priority: 1.0,
        },
        {
            url: `${baseUrl}/#projects`,
            lastModified: new Date(),
            changeFrequency: "monthly" as const,
            priority: 0.9,
        },
        {
            url: `${baseUrl}/blog`,
            lastModified: new Date(),
            changeFrequency: "weekly" as const,
            priority: 0.8,
        },
    ];

    // ← Future blog posts will be added here automatically
    const blogPosts: MetadataRoute.Sitemap = [];

    return [...staticPages, ...blogPosts];
}