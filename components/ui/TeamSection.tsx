'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import type { Variants } from 'framer-motion';

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

const cardVariants: Variants = {
  offscreen: {
    y: 100,
    opacity: 0,
  },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      bounce: 0.4,
      duration: 0.8,
    },
  },
};

const TeamSection = () => {
  return (
    <div className="relative overflow-hidden py-20 px-6 sm:px-10 font-serif bg-gradient-to-br from-sky-100 via-blue-200 to-indigo-100 text-gray-900">
      {/* 💠 Animated Blue Blob Background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-[-30%] left-[-20%] w-[80vw] h-[80vw] bg-sky-300 rounded-full mix-blend-multiply filter blur-[100px] opacity-30 animate-blob" />
        <div className="absolute bottom-[-25%] right-[-20%] w-[90vw] h-[90vw] bg-blue-400 rounded-full mix-blend-multiply filter blur-[100px] opacity-30 animate-blob animation-delay-2000" />
        <div className="absolute top-[30%] left-[15%] w-[60vw] h-[60vw] bg-indigo-300 rounded-full mix-blend-multiply filter blur-[100px] opacity-30 animate-blob animation-delay-4000" />
      </div>

      <div className="relative max-w-6xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold text-center mb-16 tracking-wide drop-shadow-xl text-indigo-700">
          OUR TEAM
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              className="bg-white/90 border border-white/20 backdrop-blur-md rounded-2xl overflow-hidden shadow-xl transform transition duration-500 hover:scale-105 hover:shadow-blue-400/40"
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.5 }}
              variants={cardVariants}
            >
              <div className="relative h-64 sm:h-80 w-full overflow-hidden">
                <Image
                  src={member.image}
                  alt={member.name}
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-5 text-center">
                <p className="text-xs sm:text-sm font-semibold text-blue-600 mb-1 uppercase tracking-wide">
                  {member.title}
                </p>
                <h3 className="text-base sm:text-lg font-bold leading-tight text-indigo-800">
                  {member.name}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamSection;
