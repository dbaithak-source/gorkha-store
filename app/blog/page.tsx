'use client';

import { useEffect, useState } from 'react';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  link: string;
  date: string;
}

export default function BlogPage() {
  const [posts, setPosts] = useState<BlogPost[]>([
    {id: 1, title: 'Health Benefits of Raw Himalayan Honey', excerpt: 'Discover the incredible wellness properties of raw Himalayan honey and how it can support your daily health routine.', link: 'https://gorkhajaibik.wordpress.com/health-benefits-of-raw-himalayan-honey', date: '2025-01-08'},
    {id: 2, title: 'Shilajit: Nature\'s Ancient Wellness Secret', excerpt: 'Learn about the mineral-rich resin that has been used for centuries in traditional Himalayan wellness practices.', link: 'https://gorkhajaibik.wordpress.com/himalayan-sun-activated-shilajit', date: '2025-01-07'},
    {id: 3, title: 'Pure Organic Ghee: Traditional Clarification Methods', excerpt: 'Explore the traditional bilona method of making ghee and why it preserves nutritional integrity better than modern techniques.', link: 'https://gorkhajaibik.wordpress.com/nauni-bilona-ghee', date: '2025-01-06'},
    {id: 4, title: 'Ancient Himalayan Grains & Their Nutrition', excerpt: 'Discover the traditional grains grown in high-altitude Himalayan valleys and their remarkable nutritional properties.', link: 'https://gorkhajaibik.wordpress.com/marsi-rice', date: '2025-01-05'},
    {id: 5, title: 'Yak Ghee A2: Premium Mountain Nutrition', excerpt: 'Understanding the unique properties of yak ghee and why it\'s prized in high-altitude traditional diets.', link: 'https://gorkhajaibik.wordpress.com/yak-ghee-a2', date: '2025-01-04'},
    {id: 6, title: 'Moringa: The Nutritional Powerhouse', excerpt: 'Sun-dried moringa powder and its incredible nutritional density for daily wellness support.', link: 'https://gorkhajaibik.wordpress.com/moringa-powder', date: '2025-01-03'},
  ]);

  return (
    <main className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      <div className="max-w-4xl mx-auto px-4 py-16">
        {/* Hero */}
        <section className="text-center mb-16">
          <h1 className="text-5xl font-bold text-green-900 mb-4">Wellness Blog</h1>
          <p className="text-xl text-gray-600">Insights, Knowledge, and Tips for Himalayan Wellness</p>
        </section>

        {/* Blog Posts */}
        <section className="space-y-8">
          {posts.map((post) => (
            <article key={post.id} className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="flex justify-between items-start mb-4">
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-green-800 mb-2 hover:text-green-600 transition">
                    <a href={post.link} target="_blank" rel="noopener noreferrer">
                      {post.title}
                    </a>
                  </h2>
                  <p className="text-sm text-gray-500 mb-4">{new Date(post.date).toLocaleDateString('en-US', {year: 'numeric', month: 'long', day: 'numeric'})}</p>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">{post.excerpt}</p>
              <a href={post.link} target="_blank" rel="noopener noreferrer" className="inline-block text-green-700 font-semibold hover:text-green-900 transition">
                Read Full Article →
              </a>
            </article>
          ))}
        </section>

        {/* Call to Action */}
        <section className="mt-16 bg-green-100 p-8 rounded-lg text-center">
          <h2 className="text-2xl font-bold text-green-900 mb-4">More Articles Available</h2>
          <p className="text-gray-700 mb-6">Visit our WordPress blog for more in-depth wellness articles and product guides.</p>
          <a href="https://gorkhajaibik.wordpress.com" target="_blank" rel="noopener noreferrer" className="inline-block bg-green-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-800 transition">
            Visit Full Blog →
          </a>
        </section>
      </div>
    </main>
  );
}
