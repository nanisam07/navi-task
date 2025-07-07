'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

const projects = [
  { name: 'Farmhouse', slug: 'farmhouse', color: 'from-green-400 to-lime-500' },
  { name: 'Kadapa Central', slug: 'kadapa', color: 'from-blue-500 to-indigo-600' },
  { name: 'MyHome', slug: 'myhome', color: 'from-pink-500 to-rose-500' },
  { name: 'GSR Tower', slug: 'gsr', color: 'from-purple-600 to-fuchsia-600' },
  { name: 'GRAVA', slug: 'grava', color: 'from-orange-400 to-amber-500' },
  { name: '360 Project', slug: '360', color: 'from-cyan-500 to-teal-500' },
];

export default function ProjectPage() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white py-16 px-4 sm:px-8 font-serif">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-yellow-400">
          All Projects
        </h1>
        <p className="text-white/70 text-lg">
          Explore our diverse range of featured projects
        </p>
      </motion.div>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {projects.map(({ name, slug, color }) => (
          <Link key={slug} href={`/project/${slug}`}>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className={`p-6 rounded-xl shadow-lg bg-gradient-to-tr ${color} transition-all duration-300 cursor-pointer text-center`}
            >
              <h2 className="text-xl font-bold text-white">{name}</h2>
              <p className="text-white/90 text-sm mt-2">View Details</p>
            </motion.div>
          </Link>
        ))}
      </div>
    </section>
  );
}
