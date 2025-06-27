'use client';

import Link from 'next/link';
import Image from 'next/image';
import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/navigation';

// Left & Right Menus
const leftMenu = [
  { label: 'HOME', href: '/' },
  { label: 'ABOUT US', href: '/about' },
  { label: 'SERVICES', href: '/services' },
  { label: 'OUR PROCESS', href: '/process' },
];

const rightMenu = [
  { label: 'OUR PROJECTS', href: '/projects' },
  { label: 'CLIENTS', href: '/clients' },
  { label: 'TEAM', href: '/team' },
  { label: 'CONTACT US', href: '/contact' },
  { label: 'BLOG', href: '/blog' },
];

type BlogPost = {
  slug: string;
  title: string;
};

const blogPosts: BlogPost[] = Array.from({ length: 14 }, (_, i) => ({
  slug: `blog-${i + 1}`,
  title: `Blog ${i + 1}`,
}));

export const NavbarMenu = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showBlogDropdown, setShowBlogDropdown] = useState(false);
  const dropdownRef = useRef(null);
  const router = useRouter();

  const handleBlogClick = (slug: string) => {
    setShowBlogDropdown(false);
    router.push(`/blog/${slug}`);
  };

  return (
    <nav className="relative z-50 mx-4 my-6 rounded-3xl px-6 py-4 shadow-2xl bg-white/80 dark:bg-black/70 backdrop-blur-md border border-gray-200 dark:border-white/10 font-serif">
      <div className="max-w-7xl mx-auto flex items-center justify-between lg:justify-center gap-8">
        {/* LEFT MENU */}
        <div className="hidden lg:flex items-center gap-6">
          {leftMenu.map(({ label, href }) => (
            <Link key={label} href={href}>
              <motion.p
                whileHover={{ scale: 1.05, color: '#3b82f6' }}
                transition={{ duration: 0.2 }}
                className="cursor-pointer text-black hover:text-blue-500 dark:text-white dark:hover:text-blue-400"
              >
                {label}
              </motion.p>
            </Link>
          ))}
        </div>

        {/* LOGO */}
        <div className="mx-4">
          <Link href="/">
            <Image
              src="/images/logo.png"
              alt="Logo"
              width={80}
              height={80}
              className="hover:scale-110 transition-transform duration-300"
            />
          </Link>
        </div>

        {/* RIGHT MENU */}
        <div className="hidden lg:flex items-center gap-6">
          {rightMenu.map(({ label, href }) => (
            <div
              key={label}
              onMouseEnter={() => label === 'BLOG' && setShowBlogDropdown(true)}
              onMouseLeave={() => label === 'BLOG' && setShowBlogDropdown(false)}
              className="relative"
            >
              {label !== 'BLOG' ? (
                <Link href={href}>
                  <motion.p
                    whileHover={{ scale: 1.05, color: '#3b82f6' }}
                    transition={{ duration: 0.2 }}
                    className="cursor-pointer text-black hover:text-blue-500 dark:text-white dark:hover:text-blue-400"
                  >
                    {label}
                  </motion.p>
                </Link>
              ) : (
                <>
                  <motion.p
                    whileHover={{ scale: 1.05, color: '#3b82f6' }}
                    transition={{ duration: 0.2 }}
                    className="cursor-pointer text-black hover:text-blue-500 dark:text-white dark:hover:text-blue-400"
                  >
                    {label}
                  </motion.p>
                  <AnimatePresence>
                    {showBlogDropdown && (
                      <motion.ul
                        ref={dropdownRef}
                        onMouseEnter={() => setShowBlogDropdown(true)}
                        onMouseLeave={() => setShowBlogDropdown(false)}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="absolute top-full mt-2 bg-white shadow-xl border border-gray-100 dark:bg-black dark:border-gray-800 rounded-md w-64 z-50"
                      >
                        {blogPosts.map((post) => (
                          <motion.li
                            key={post.slug}
                            whileHover={{ scale: 1.02, x: 5 }}
                            className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-800 text-sm text-gray-800 dark:text-gray-200 cursor-pointer"
                            onClick={() => handleBlogClick(post.slug)}
                          >
                            {post.title}
                          </motion.li>
                        ))}
                      </motion.ul>
                    )}
                  </AnimatePresence>
                </>
              )}
            </div>
          ))}
        </div>

        {/* MOBILE MENU BUTTON */}
        <div className="lg:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 rounded-md border dark:border-white border-black"
          >
            <svg className="w-6 h-6 dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* MOBILE DROPDOWN */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="lg:hidden mt-4 px-2 space-y-3"
          >
            {[...leftMenu, ...rightMenu].map(({ label, href }) => (
              <Link key={label} href={href} onClick={() => setIsMobileMenuOpen(false)}>
                <p className="text-sm text-black dark:text-white hover:text-blue-500 dark:hover:text-blue-400">
                  {label}
                </p>
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default NavbarMenu;
