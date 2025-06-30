'use client';

import { use } from 'react';
import { blogPosts } from '../blogData';
import { notFound } from 'next/navigation';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { NavbarMenu } from "@/components/ui/Navbar";
import Footer from "@/components/Footer";

export default function BlogPage(props: { params: Promise<{ slug: string }> }) {
  const { slug } = use(props.params);
  const blog = blogPosts.find((b) => b.slug === slug);

  if (!blog) {
    notFound();
  }

  return (
    <div className="bg-gradient-to-br from-purple-200 via-pink-100 to-blue-200 min-h-screen font-serif">
      <NavbarMenu />

      {/* 🔽 Main Blog Layout */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-8 pb-20">
        {/* 📄 Blog Content */}
        <div className="lg:col-span-8 space-y-10">
          <motion.div
            className="w-full max-h-[420px] relative rounded-2xl overflow-hidden shadow-2xl"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Image
              src={blog.image}
              alt={blog.title}
              layout="fill"
              objectFit="cover"
              className="rounded-2xl"
              priority
            />
          </motion.div>

          <motion.div
            className="prose prose-lg text-gray-800 leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {blog.content.split('\n').map((para, idx) => (
              <p key={idx}>{para.trim()}</p>
            ))}
          </motion.div>
        </div>

        {/* 📌 Right Sticky Sidebar */}
        <div className="lg:col-span-4 hidden lg:block">
          <div className="sticky top-24 h-[calc(100vh-6rem)] overflow-y-auto space-y-8 pr-2">
            {/* 📅 Recent Posts */}
            <div className="bg-white rounded-xl shadow-lg p-6 w-full">
              <h3 className="text-xl font-bold text-purple-800 mb-4">📅 Recent Posts</h3>
              <ul className="space-y-3 text-sm text-gray-700">
                {blogPosts.slice(0, 5).map((post) => (
                  <li key={post.slug}>
                    <Link href={`/blog/${post.slug}`} className="hover:text-purple-700 transition">
                      {post.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* ✨ More Blogs */}
            <div className="bg-white rounded-xl shadow-lg p-6 w-full">
              <h3 className="text-xl font-bold text-purple-800 mb-4">✨ More Blogs</h3>
              {blogPosts
                .filter((post) => post.slug !== blog.slug)
                .slice(0, 4)
                .map((post) => (
                  <Link
                    key={post.slug}
                    href={`/blog/${post.slug}`}
                    className="flex items-center gap-4 mb-4 group"
                  >
                    <div className="relative w-14 h-14 rounded-md overflow-hidden shadow-sm">
                      <Image
                        src={post.image}
                        alt={post.title}
                        layout="fill"
                        objectFit="cover"
                      />
                    </div>
                    <span className="text-sm text-gray-800 group-hover:text-purple-700 font-medium">
                      {post.title}
                    </span>
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
