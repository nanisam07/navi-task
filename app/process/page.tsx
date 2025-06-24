'use client';

import dynamic from 'next/dynamic';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Footer from '@/components/Footer';
import NavbarMenu from '@/components/ui/Navbar';


// Dynamically import Lottie to avoid hydration errors
const Lottie = dynamic(() => import('lottie-react'), { ssr: false });

const processSteps = [
  {
    title: 'Planning',
    description: 'Optimizing structural integrity and efficiency...',
    image: '/images/process/P1.jpg',
    
  },
  {
    title: 'Competitive',
    description: 'Staying ahead of industry standards...',
    image: '/images/process/P2.jpg',
    
  },
  {
    title: 'Analysis',
    description: 'Conducting thorough analysis...',
    image: '/images/process/P3.png',
    
  },
  {
    title: 'Execution',
    description: 'Implementing precision and expertise...',
    image: '/images/process/P4.jpg',
    
  },
];

export default function ProcessSection() {
  return (
    <>
      <NavbarMenu />
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
              className="bg-white border border-gray-200 rounded-2xl shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-500 font-serif"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              {/* Image as header background */}
              <div className="relative h-40 w-full">
                <Image
                  src={step.image}
                  alt={step.title}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-t-2xl"
                />
              </div>

              

              {/* Text Content */}
              <div className="p-6 text-center">
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
        <Footer />
      </section>
    </>
  );
}
