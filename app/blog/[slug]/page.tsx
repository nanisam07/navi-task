'use client';

import { use } from 'react';
import { blogPosts } from '../blogData';
import { notFound } from 'next/navigation';
import { motion } from 'framer-motion';

export default function BlogPage(props: { params: Promise<{ slug: string }> }) {
  const { slug } = use(props.params);
  const blog = blogPosts.find((b) => b.slug === slug);

  if (!blog) {
    notFound();
  }

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-purple-200 via-pink-100 to-blue-200 overflow-hidden font-serif">
      {/* Optional animated background image or pattern */}
      <div className="absolute inset-0 bg-[url('/images/bg-texture.png')] bg-cover opacity-10 z-0" />

      {/* Overlay blur or tint */}
      <div className="absolute inset-0 bg-white/50 backdrop-blur-sm z-10" />

      {/* Blog content with scroll-based animation */}
      <div className="relative z-20 max-w-4xl mx-auto px-6 py-24 space-y-10">
        <motion.h1
          className="text-5xl font-extrabold text-gray-900"
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {blog.title}
        </motion.h1>

        <motion.img
          src={blog.image}
          alt={blog.title}
          className="rounded-xl w-full shadow-lg"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        />

        <motion.div
          className="prose prose-lg text-gray-800 whitespace-pre-line leading-loose"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {blog.content}
        </motion.div>
      </div>
    </div>
  );
}
