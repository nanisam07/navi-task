"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

// Transition used for animations
import type { Transition } from "framer-motion";

const transition: Transition = {
  type: "spring",
  mass: 0.5,
  damping: 11.5,
  stiffness: 100,
  restDelta: 0.001,
  restSpeed: 0.001,
};

// Top-level navbar component
export const NavbarMenu = () => {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <Menu setActive={setHovered}>
  <div className="flex items-center justify-between w-full max-w-7xl mx-auto px-4">
    {/* Logo on Left */}
    <a href="/" className="flex items-center space-x-2">
      <img src="/images/logo.png" alt="Logo" className="h-10 w-10 object-contain" />
      <span className="text-xl font-sarif text-black dark:text-white">
        NANVI
      </span>
    </a>

        <MenuItem item="HOME" active={hovered} setActive={setHovered}>
          <HoveredLink href="#">Email</HoveredLink>
          <HoveredLink href="#">LinkedIn</HoveredLink>
        </MenuItem>

        <MenuItem item="ABOUT US" active={hovered} setActive={setHovered}>
          <HoveredLink href="#">Company</HoveredLink>
          <HoveredLink href="#">Team</HoveredLink>
        </MenuItem>
        <MenuItem item="SERVICES" active={hovered} setActive={setHovered}>
          <HoveredLink href="#">Company</HoveredLink>
          <HoveredLink href="#">Team</HoveredLink>
        </MenuItem>
        <MenuItem item="OUR PEOCESS" active={hovered} setActive={setHovered}>
          <HoveredLink href="#">Company</HoveredLink>
          <HoveredLink href="#">Team</HoveredLink>
        </MenuItem>
        <MenuItem item="OUR PROJECTS" active={hovered} setActive={setHovered}>
          <HoveredLink href="#">Company</HoveredLink>
          <HoveredLink href="#">Team</HoveredLink>
        </MenuItem>
        <MenuItem item="CLIENTS" active={hovered} setActive={setHovered}>
          <HoveredLink href="#">Company</HoveredLink>
          <HoveredLink href="#">Team</HoveredLink>
        </MenuItem>
        <MenuItem item="TEAM" active={hovered} setActive={setHovered}>
          <HoveredLink href="#">Company</HoveredLink>
          <HoveredLink href="#">Team</HoveredLink>
        </MenuItem>
        <MenuItem item="CONTACT US" active={hovered} setActive={setHovered}>
          <HoveredLink href="#">Company</HoveredLink>
          <HoveredLink href="#">Team</HoveredLink>
        </MenuItem>
        <MenuItem item="BLOG" active={hovered} setActive={setHovered}>
          <HoveredLink href="#">Company</HoveredLink>
          <HoveredLink href="#">Team</HoveredLink>
        </MenuItem>
        <MenuItem item="WISHLIST" active={hovered} setActive={setHovered}>
          <HoveredLink href="#">Company</HoveredLink>
          <HoveredLink href="#">Team</HoveredLink>
        </MenuItem>
      </div>
      </Menu>
  );
};

// Menu component wrapper
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
      className="relative rounded-full border border-transparent dark:bg-black dark:border-white/[0.2] bg-white shadow-input flex justify-center space-x-6 px-10 py-6"
    >
      {children}
    </nav>
  );
};

// Individual menu item
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
        className="cursor-pointer text-black hover:opacity-[0.9] dark:text-white"
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

// Product preview block
export const ProductItem = ({
  title,
  description,
  href,
  src,
}: {
  title: string;
  description: string;
  href: string;
  src: string;
}) => {
  return (
    <a href={href} className="flex space-x-2">
      <img
        src={src}
        width={140}
        height={70}
        alt={title}
        className="shrink-0 rounded-md shadow-2xl"
      />
      <div>
        <h4 className="text-xl font-bold mb-1 text-black dark:text-white">
          {title}
        </h4>
        <p className="text-neutral-700 text-sm max-w-[10rem] dark:text-neutral-300">
          {description}
        </p>
      </div>
    </a>
  );
};

// Simple link hover
export const HoveredLink = ({
  children,
  ...rest
}: React.AnchorHTMLAttributes<HTMLAnchorElement>) => {
  return (
    <a
      {...rest}
      className="block text-neutral-700 dark:text-neutral-200 hover:text-black dark:hover:text-white"
    >
      {children}
    </a>
  );
};
