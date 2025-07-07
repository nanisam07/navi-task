'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function PortfolioPage() {
  const [showOnlyProjects, setShowOnlyProjects] = useState(false);

  useEffect(() => {
    const checkHash = () => {
      const hash = window.location.hash;
      if (hash === '#projects') {
        setShowOnlyProjects(true);
        const el = document.getElementById('projects');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      } else {
        setShowOnlyProjects(false);
      }
    };

    checkHash(); // Check on mount
    window.addEventListener('hashchange', checkHash); // Handle future hash changes

    return () => {
      window.removeEventListener('hashchange', checkHash);
    };
  }, []);

  return (
    <section className="py-20 px-4 sm:px-8 bg-gradient-to-br from-purple-900 via-fuchsia-800 to-pink-700 text-white font-serif min-h-screen scroll-smooth">
      <div className="max-w-5xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold mb-12"
        >
          Our <span className="text-yellow-300">Portfolio</span>
        </motion.h2>

        {/* Only show Clients/Consultants if not hash = #projects */}
        {!showOnlyProjects && (
          <div className="grid sm:grid-cols-2 gap-8 text-lg font-medium mb-20">
            <Link href="/portfolio/clients">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="p-6 bg-white/10 rounded-xl shadow-md hover:bg-white/20 transition text-white/90 text-center cursor-pointer"
              >
                Clients
              </motion.div>
            </Link>

            <Link href="/portfolio/consultants">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="p-6 bg-white/10 rounded-xl shadow-md hover:bg-white/20 transition text-white/90 text-center cursor-pointer"
              >
                Consultants
              </motion.div>
            </Link>
          </div>
        )}

        {/* Projects Section */}
        <div id="projects" className="pt-24 text-left">
          <motion.h3
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold mb-6 text-center"
          >
            Our Projects
          </motion.h3>
          <p className="text-white/80 text-lg mb-6 text-center">
            Here are some featured projects from our portfolio.
          </p>

          <div className="grid sm:grid-cols-2 gap-6 mt-6">
            <div className="p-4 bg-white/10 rounded-xl shadow">Project 1 - Farmhouse</div>
            <div className="p-4 bg-white/10 rounded-xl shadow">Project 2 - Kadapa Central</div>
            <div className="p-4 bg-white/10 rounded-xl shadow">Project 3 - MyHome</div>
            <div className="p-4 bg-white/10 rounded-xl shadow">Project 4 - GSR Tower</div>
          </div>
        </div>
      </div>
    </section>
  );
}
