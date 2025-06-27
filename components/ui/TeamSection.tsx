'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import type { Variants } from 'framer-motion';

type TeamMember = {
  name: string;
  title: string;
  image: string;
};

const teamMembers: TeamMember[] = [
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
    y: 60,
    opacity: 0,
  },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      bounce: 0.3,
      duration: 0.8,
    },
  },
};

export default function TeamSection() {
  return (
    <div className="relative overflow-hidden py-24 px-6 sm:px-10 font-serif text-white">
      {/* 🌌 Gradient Background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[#141E30] via-[#243B55] to-[#0F2027]" />

      {/* 🔮 Blurry Moving Background Circles */}
      <motion.div
        className="absolute top-[-30%] left-[-20%] w-[80vw] h-[80vw] bg-purple-500 rounded-full mix-blend-multiply filter blur-[120px] opacity-20"
        animate={{ x: [0, 30, -20, 0], y: [0, -30, 10, 0] }}
        transition={{ repeat: Infinity, duration: 25, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-[-25%] right-[-20%] w-[90vw] h-[90vw] bg-pink-500 rounded-full mix-blend-multiply filter blur-[120px] opacity-20"
        animate={{ x: [0, -30, 20, 0], y: [0, 30, -10, 0] }}
        transition={{ repeat: Infinity, duration: 30, ease: 'easeInOut' }}
      />

      <div className="relative max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl sm:text-5xl font-bold text-center mb-20 tracking-wide drop-shadow-lg text-violet-300"
        >
          OUR TEAM
        </motion.h2>

        <div className="flex flex-col sm:flex-row sm:justify-center sm:flex-wrap gap-14 sm:gap-10 items-center">
          {teamMembers.map((member, index) => (
            <AnimatedCard key={index} member={member} delay={index * 0.2} />
          ))}
        </div>
      </div>
    </div>
  );
}

function AnimatedCard({
  member,
  delay,
}: {
  member: TeamMember;
  delay: number;
}) {
  const [transform, setTransform] = useState('rotateX(0deg) rotateY(0deg)');

  const handleMouseMove = (e: React.MouseEvent) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = -(y - centerY) / 15;
    const rotateY = (x - centerX) / 15;
    setTransform(`rotateX(${rotateX}deg) rotateY(${rotateY}deg)`);
  };

  const handleMouseLeave = () => {
    setTransform('rotateX(0deg) rotateY(0deg)');
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.5 }}
      transition={{ delay }}
      whileHover={{ scale: 1.05 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transform }}
      className="w-[90%] sm:w-[300px] bg-white/10 backdrop-blur-lg border border-white/10 rounded-3xl shadow-lg overflow-hidden transition-all duration-300 transform-gpu cursor-pointer hover:shadow-purple-400/30"
    >
      <div className="relative h-72 w-full overflow-hidden">
        <Image
          src={member.image}
          alt={member.name}
          fill
          className="object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>
      <div className="p-6 text-center">
        <p className="text-xs sm:text-sm font-semibold text-purple-300 mb-1 uppercase tracking-wide">
          {member.title}
        </p>
        <h3 className="text-base sm:text-lg font-bold text-white">
          {member.name}
        </h3>
      </div>
    </motion.div>
  );
}
