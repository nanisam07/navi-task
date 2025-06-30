'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { NavbarMenu } from '@/components/ui/Navbar';
import Footer from '@/components/Footer';
import { MailIcon } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { blogPosts } from '@/app/blog/blogData';

export default function BlogPage() {
  const [visibleCount, setVisibleCount] = useState(6);
  const visibleBlogs = blogPosts.slice(0, visibleCount);
  const hasMore = visibleCount < blogPosts.length;

  const handleLoadMore = () => {
    setVisibleCount((prev) => Math.min(prev + 6, blogPosts.length));
  };

  return (
    <main className="relative w-full overflow-x-hidden text-white font-sans bg-gradient-to-br from-[#003e7e] via-[#0075c7] to-[#ee2b7a]">
      <NavbarMenu />

      {/* Blog Section */}
      <section className="relative z-10 px-6 py-16">
        <motion.h1
          initial={{ opacity: 0, y: -60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl font-extrabold text-center mb-12"
        >
          Explore Our Latest Blogs
        </motion.h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          <AnimatePresence>
            {visibleBlogs.map((blog) => (
              <motion.div
                key={blog.slug}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4, delay: 0.05 }}
                className="bg-white/5 backdrop-blur-lg rounded-xl overflow-hidden shadow-2xl border border-white/10 transform transition-transform duration-300 hover:scale-105 hover:rotate-1 cursor-pointer group"
              >
                <Link href={`/blog/${blog.slug}`}>
                  <div className="relative h-48 w-full overflow-hidden">
                    <Image
                      src={blog.image ?? '/default-blog-image.jpg'}
                      alt={blog.title}
                      fill
                      priority
                      unoptimized={true}
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-4">
                    <h2 className="text-xl font-bold mb-2 group-hover:text-pink-400 transition-colors duration-300">
                      {blog.title}
                    </h2>
                    <p className="text-sm text-gray-100 group-hover:text-gray-200 transition-colors">
                      {blog.summary}
                    </p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {hasMore && (
          <div className="mt-12 flex justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleLoadMore}
              className="bg-white text-[#003e7e] font-bold px-6 py-3 rounded-full shadow-lg hover:bg-[#f0f0f0] transition duration-300"
            >
              Load More Blogs
            </motion.button>
          </div>
        )}
      </section>

      {/* Newsletter Section */}
      <section className="relative z-10 mt-24 px-6 py-16 bg-gradient-to-r from-[#003e7e] to-[#0075c7] text-white">
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 50 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center border border-white/10 p-10 rounded-2xl shadow-xl bg-white/10 backdrop-blur"
        >
          <div className="flex justify-center mb-4">
            <motion.div
              whileHover={{ rotate: 10, scale: 1.1 }}
              className="p-3 bg-pink-600 rounded-full shadow-xl"
            >
              <MailIcon className="h-8 w-8 text-white" />
            </motion.div>
          </div>
          <h2 className="text-3xl font-bold mb-3 tracking-tight">Subscribe to Our Newsletter</h2>
          <p className="text-gray-100 mb-6">
            Stay in the loop! Get the latest blogs, updates, and offers directly to your inbox.
          </p>
          <form className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full sm:w-2/3 px-4 py-2 rounded-lg text-black focus:outline-none shadow-md"
              required
            />
            <button
              type="submit"
              className="bg-pink-500 hover:bg-pink-600 text-white font-semibold px-6 py-2 rounded-lg transition shadow-lg"
            >
              Subscribe
            </button>
          </form>
        </motion.div>
      </section>

      <Footer />
    </main>
  );
}
