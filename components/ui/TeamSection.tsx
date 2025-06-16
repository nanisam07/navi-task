'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const teamMembers = [
  {
    name: 'VIISHHNUVARDHANSUNKARI, B.E (CIVIL)',
    title: 'FOUNDER & MANAGING DIRECTOR',
    image: '/images/team1.jpg',
  },
  {
    name: 'DANAKOTI RAJA, M.E (STRU.ENGG)',
    title: 'DIRECTOR, DESIGNS',
    image: '/images/team2.png',
  },
  {
    name: 'B.VINOTH, M.TECH (STRU.ENGG)',
    title: 'ASSOCIATE DIRECTOR, DESIGNS',
    image: '/images/team3.png',
  },
];

import type { Variants } from 'framer-motion';

const cardVariants: Variants = {
  offscreen: {
    y: 100,
    opacity: 0,
  },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8,
    },
  },
};

const TeamSection = () => {
  return (
    <div className="relative overflow-hidden min-h-screen py-16 px-6 sm:px-12 font-serif">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 z-0 animate-gradient bg-gradient-to-br from-purple-600 via-pink-500 to-yellow-400 blur-3xl opacity-30" />
      <h2 className="text-4xl font-bold text-center mb-12 drop-shadow-lg text-black dark:text-white">OUR TEAM</h2>
      <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {teamMembers.map((member, index) => (
          <motion.div
            key={index}
            className="bg-white dark:bg-black rounded-2xl overflow-hidden shadow-2xl transform transition duration-500 hover:scale-105 hover:shadow-indigo-500/50"
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.5 }}
            variants={cardVariants}
          >
            <div className="relative h-80 w-full">
              <Image
                src={member.image}
                alt={member.name}
                layout="fill"
                objectFit="cover"
                className="hover:scale-110 transition duration-500"
              />
            </div>
            <div className="p-6 text-center text-gray-900 dark:text-white">
              <p className="text-sm font-semibold text-indigo-600 mb-1 uppercase tracking-wide">
                {member.title}
              </p>
              <h3 className="text-lg font-bold leading-tight">
                {member.name}
              </h3>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default TeamSection;
