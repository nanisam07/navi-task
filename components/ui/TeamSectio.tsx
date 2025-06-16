import React from 'react';
import { motion } from 'framer-motion';

const teamMembers = [
  {
    name: 'VIISHHNUVARDHANSUNKARI, B.E (CIVIL)',
    title: 'FOUNDER & MANAGING DIRECTOR',
    image: '/team1.jpg',
  },
  {
    name: 'DANAKOTI RAJA, M.E (STRU.ENGG)',
    title: 'DIRECTOR, DESIGNS',
    image: '/team2.jpg',
  },
  {
    name: 'B.VINOTH, M.TECH (STRU.ENGG)',
    title: 'ASSOCIATE DIRECTOR, DESIGNS',
    image: '/team3.jpg',
  },
];

const cardVariants = {
  offscreen: {
    y: 100,
    opacity: 0,
  },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring' as 'spring',
      bounce: 0.4,
      duration: 0.8,
    },
  },
};

const TeamSection = () => {
  return (
    <div className="relative overflow-hidden min-h-screen py-16 px-6 sm:px-12 font-serif">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 z-0 animate-gradient bg-gradient-to-br from-purple-600 via-pink-500 to-yellow-400 blur-3xl opacity-30 font-serif" />
      <h2 className="text-4xl font-bold text-center mb-12 drop-shadow-lg">OUR TEAM</h2>
      <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {teamMembers.map((member, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-2xl overflow-hidden shadow-2xl transform transition duration-500 hover:scale-105 hover:shadow-indigo-500/50"
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.5 }}
            variants={cardVariants}
          >
            <div className="h-80 overflow-hidden">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-full object-cover hover:scale-110 transition duration-500"
              />
            </div>
            <div className="p-6 text-center text-gray-900">
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
