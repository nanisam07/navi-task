'use client';
import Link from 'next/link';
import Image from 'next/image';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import type { Transition } from 'framer-motion';

const transition: Transition = {
  type: 'spring',
  mass: 0.5,
  damping: 11.5,
  stiffness: 100,
  restDelta: 0.001,
  restSpeed: 0.001,
};

export const NavbarMenu = () => {
  const [hovered, setHovered] = useState<string | null>(null);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [mounted, setMounted] = useState(false); // Fix hydration

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (mounted) {
      document.documentElement.classList.toggle('dark', isDarkMode);
    }
  }, [isDarkMode, mounted]);

  if (!mounted) return null; // Avoid SSR/CSR mismatch

  const menuItems = [
    'HOME',
    'ABOUT US',
    'SERVICES',
    'OUR PROCESS',
    'OUR PROJECTS',
    'CLIENTS',
    'TEAM',
    'CONTACT US',
    'BLOG',
    'WISHLIST',
  ];

  return (
    <Menu setActive={setHovered}>
      <div className="flex items-center justify-between w-full max-w-7xl mx-auto px-4">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="/images/logo.png"
            alt="Logo"
            width={40}
            height={40}
            className="object-contain"
          />
          <span className="text-xl font-serif font-bold text-black dark:text-white">
            NANVI
          </span>
        </Link>

        {/* Links + Toggle */}
        <div className="flex items-center space-x-6">
          {menuItems.map((label) => (
            <MenuItem key={label} item={label} active={hovered} setActive={setHovered}>
              <HoveredLink href="#">Company</HoveredLink>
              <HoveredLink href="#">Team</HoveredLink>
            </MenuItem>
          ))}

          {/* Dark Mode Toggle Button */}
          <button
            onClick={() => setIsDarkMode(!isDarkMode)}
            className="ml-4 w-10 h-10 flex items-center justify-center rounded-full border dark:border-white border-black hover:bg-black/10 dark:hover:bg-white/10 transition"
            title="Toggle Dark Mode"
          >
            {isDarkMode ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 3v1m0 16v1m8.66-11.34l-.7.7m-13.92 0l-.7-.7M21 12h-1M4 12H3m15.66 6.34l-.7-.7m-13.92 0l-.7.7M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 text-black"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 3c1.657 0 3.156.672 4.243 1.757A6 6 0 0112 21a9 9 0 000-18z"
                />
              </svg>
            )}
          </button>
        </div>
      </div>
    </Menu>
  );
};

export const Menu = ({
  setActive,
  children,
}: {
  setActive: (item: string | null) => void;
  children: React.ReactNode;
}) => {
  return (
    <nav
      onMouseLeave={() => setActive(null)}
      className="relative rounded-full border border-transparent dark:bg-black dark:border-white/[0.2] bg-white shadow-xl flex justify-center space-x-6 px-10 py-6 transition-all duration-500 ease-in-out"
    >
      {children}
    </nav>
  );
};

export const MenuItem = ({
  setActive,
  active,
  item,
  children,
}: {
  setActive: (item: string) => void;
  active: string | null;
  item: string;
  children?: React.ReactNode;
}) => {
  return (
    <div onMouseEnter={() => setActive(item)} className="relative">
      <motion.p
        transition={{ duration: 0.3 }}
        className="cursor-pointer text-black hover:text-blue-500 dark:text-white dark:hover:text-blue-400"
      >
        {item}
      </motion.p>
      {active === item && (
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={transition}
          className="absolute top-[calc(100%_+_1.2rem)] left-1/2 transform -translate-x-1/2 pt-4 z-40"
        >
          <motion.div
            transition={transition}
            layoutId="active"
            className="bg-white dark:bg-black backdrop-blur-sm rounded-2xl overflow-hidden border border-black/[0.2] dark:border-white/[0.2] shadow-xl"
          >
            <motion.div layout className="w-max h-full p-4 space-y-2">
              {children}
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export const HoveredLink = ({
  children,
  ...rest
}: React.AnchorHTMLAttributes<HTMLAnchorElement>) => {
  return (
    <Link
      {...rest}
      href={rest.href || '#'}
      className="block text-neutral-700 dark:text-neutral-200 hover:text-black dark:hover:text-white transition-all"
    >
      {children}
    </Link>
  );
};
