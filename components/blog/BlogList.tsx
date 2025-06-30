'use client';

import { blogPosts } from '@/app/blog/blogData';
import BlogCard from './BlogCard';
import { motion } from 'framer-motion';

export default function BlogList() {
  return (
    <div className="grid md:grid-cols-3 gap-8">
      {blogPosts.map((post, index) => {
        const normalizedPost = {
          ...post,
          image: post.image || '', 
        };

        return (
          <motion.div
            key={post.slug}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <BlogCard blog={normalizedPost} />
          </motion.div>
        );
      })}
    </div>
  );
}
