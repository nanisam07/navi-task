'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const processSteps = [
  {
    title: 'Planning',
    description:
      'Optimizing structural integrity and efficiency through expert post-tensioning planning and execution.',
    image: '/images/process/P1.jpg',
    icon: 'https://via.placeholder.com/40?text=P',
  },
  {
    title: 'Competitive',
    description:
      'Staying ahead of industry standards with innovative post-tensioning techniques and practices.',
    image: '/images/process/P2.jpg',
    icon: 'https://via.placeholder.com/40?text=C',
  },
  {
    title: 'Analysis',
    description:
      'Conducting thorough analysis to optimize post-tensioning solutions for structural efficiency.',
    image: '/images/process/P3.png',
    icon: 'https://via.placeholder.com/40?text=A',
  },
  {
    title: 'Execution',
    description:
      'Implementing precision and expertise in post-tensioning execution for superior structural performance.',
    image: '/images/process/P4.jpg',
    icon: 'https://via.placeholder.com/40?text=E',
  },
];

export default function ProcessSection() {
  return (
    <section className="bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 py-20 px-6 sm:px-12 font-serif">
      <div className="text-center mb-16">
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold text-blue-900 mb-4"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          OUR PROCESS
        </motion.h2>
        <p className="text-gray-700 max-w-2xl mx-auto text-md sm:text-lg">
          Explore the features of our process to ensure quality and performance in every project.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {processSteps.map((step, index) => (
          <motion.div
            key={index}
            className="bg-gradient-to-br from-white via-slate-100 to-sky-50 border border-gray-200 rounded-2xl shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-500 font-serif"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.05 }}
          >
            <div className="overflow-hidden">
              <motion.div
                whileHover={{ scale: 1.1, rotate: 1 }}
                transition={{ duration: 0.5 }}
              >
                <Image
                  src={step.image}
                  alt={step.title}
                  width={400}
                  height={250}
                  className="w-full h-56 object-cover transition-transform duration-700"
                />
              </motion.div>
            </div>

            <div className="p-6 text-center">
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 1 }}
                className="inline-block"
              >
                <Image
                  src={step.icon}
                  alt="icon"
                  width={40}
                  height={40}
                  className="mx-auto mb-3"
                />
              </motion.div>
              <h3 className="text-xl font-bold text-indigo-800 mb-2 group-hover:text-indigo-600 transition-colors duration-300">
                {step.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {step.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
