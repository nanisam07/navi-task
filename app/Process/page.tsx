'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const processSteps = [
  {
    title: 'Planning',
    description:
      'Optimizing structural integrity and efficiency through expert post-tensioning planning and execution.',
    image: 'https://via.placeholder.com/400x250?text=Planning',
    icon: 'https://via.placeholder.com/40?text=P',
  },
  {
    title: 'Competitive',
    description:
      'Staying ahead of industry standards with innovative post-tensioning techniques and practices.',
    image: 'https://via.placeholder.com/400x250?text=Competitive',
    icon: 'https://via.placeholder.com/40?text=C',
  },
  {
    title: 'Analysis',
    description:
      'Conducting thorough analysis to optimize post-tensioning solutions for structural efficiency.',
    image: 'https://via.placeholder.com/400x250?text=Analysis',
    icon: 'https://via.placeholder.com/40?text=A',
  },
  {
    title: 'Execution',
    description:
      'Implementing precision and expertise in post-tensioning execution for superior structural performance.',
    image: 'https://via.placeholder.com/400x250?text=Execution',
    icon: 'https://via.placeholder.com/40?text=E',
  },
];

export default function ProcessSection() {
  return (
    <section className="bg-white py-20 px-4 md:px-12">
      <div className="text-center mb-12">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-blue-900 mb-4"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          OUR PROCESS
        </motion.h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Explore the features of our process to ensure quality and performance in every project.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {processSteps.map((step, index) => (
          <motion.div
            key={index}
            className="rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Image
              src={step.image}
              alt={step.title}
              width={400}
              height={250}
              className="w-full h-56 object-cover"
            />
            <div className="p-6 text-center">
              <Image
                src={step.icon}
                alt="icon"
                width={40}
                height={40}
                className="mx-auto mb-3"
              />
              <h3 className="text-xl font-semibold text-blue-800 mb-2">{step.title}</h3>
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
