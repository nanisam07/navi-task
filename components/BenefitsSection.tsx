'use client';

import { motion } from 'framer-motion';

const benefits = [
  "Cost Savings",
  "Sustainability",
  "Client Satisfaction",
  "Structural Efficiency",
  "Increased Durability",
  "Quality Assurance",
];

const floorTypes = [
  "Flat Plate System",
  "Flat Slab",
  "Waffle Slab System",
  "Banded Beam Slab System",
];

const strategies = [
  "Planning",
  "Competitive",
  "Analysis",
  "Execution",
  "Growth",
];

const BenefitsSection = () => {
  return (
    <div className="relative py-16 px-4 sm:px-6 bg-gradient-to-r from-purple-50 via-pink-100 to-red-50 font-serif">
      <h2 className="text-4xl sm:text-5xl font-bold text-center text-gray-800 mb-12 sm:mb-16 relative z-10">
        BENEFITS
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-10 max-w-6xl mx-auto relative z-10">
        {[benefits, floorTypes, strategies].map((items, i) => (
          <motion.div
            key={i}
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className={`bg-white/90 shadow-lg hover:shadow-xl hover:scale-105 transform transition-all duration-300 p-6 sm:p-8 rounded-xl border-2 
              ${i === 1 ? 'bg-gradient-to-br from-purple-700 to-pink-600 text-white' : 'border-gray-200'}
            `}
          >
            <h3 className={`text-lg sm:text-xl font-bold mb-4 ${i === 1 ? 'text-white' : 'text-gray-800'}`}>
              {i === 0 ? 'Benefits' : i === 1 ? 'Types of Floors' : 'Strategies'}
            </h3>
            <ul className="space-y-2 text-sm">
              {items.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span>✔️</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

      <div className="absolute top-0 left-1/2 -translate-x-1/2 text-[8rem] sm:text-[12rem] text-white/10 font-black pointer-events-none select-none z-0 font-serif">
        SERVICE
      </div>
    </div>
  );
};

export default BenefitsSection;
