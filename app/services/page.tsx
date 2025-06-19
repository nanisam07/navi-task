'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Footer from '@/components/Footer'; // Adjust path if needed

const services = [
  {
    title: 'Post-Tensioning Solutions',
    description:
      'Advanced post-tensioning methods that reinforce concrete structures for durability and efficiency.',
    image: '/images/services/maintanence.jpg',
  },
  {
    title: 'Design and Implementation',
    description:
      'Custom structural designs and precise implementation tailored to each construction project.',
    image: '/images/services/civil.jpg',
  },
  {
    title: 'Project Management',
    description:
      'Professional oversight to ensure timely, cost-effective, and quality project delivery.',
    image: '/images/services/management.jpg',
  },
  {
    title: 'Maintenance and Repair',
    description:
      'Ongoing maintenance services to keep your infrastructure strong and secure.',
    image: '/images/services/maintanence.jpg',
  },
  {
    title: 'Civil Works',
    description:
      'Expert civil engineering services for foundations, roads, and public infrastructure.',
    image: '/images/services/civil.jpg',
  },
  {
    title: 'Quality Assurance and Control',
    description:
      'Strict QA & QC protocols to meet safety and performance standards.',
    image: '/images/services/quality.jpg',
  },
  {
    title: 'Site Inspection & Supervision',
    description:
      'Detailed inspections and hands-on supervision to ensure site safety and compliance.',
    image: '/images/services/site-supervision.jpg',
  },
  {
    title: 'Consulting & Technical Support',
    description:
      'Expert guidance and problem-solving for complex engineering challenges.',
    image: '/images/services/management.jpg',
  },
  {
    title: 'Project Documentation & Reporting',
    description:
      'Comprehensive documentation, real-time progress updates, and reporting solutions.',
    image: '/images/services/civil.jpg',
  },
  {
    title: 'Full Turnkey Projects',
    description:
      'End-to-end management from design to handover, ensuring hassle-free execution.',
    image: '/images/services/site-supervision.jpg',
  },
  {
    title: 'Construction Supervision',
    description:
      'Expert supervision to ensure construction quality, compliance, and timelines.',
    image: '/images/services/quality.jpg',
  },
  {
    title: 'Equipment Supply',
    description:
      'Supplying high-grade construction equipment tailored to site needs.',
    image: '/images/services/equipment.jpg',
  },
];

export default function ServicesPage() {
  return (
    <main className="bg-gradient-to-br from-slate-950 via-gray-900 to-black text-white font-serif">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center text-center px-6">
        <Image
          src="/images/services/hero.jpg"
          alt="Hero Background"
          layout="fill"
          objectFit="cover"
          className="z-0 opacity-20"
        />
        <div className="z-10 max-w-3xl">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-6xl font-extrabold mb-6 drop-shadow-xl bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent"
          >
            Our Premium Services
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-xl text-gray-300"
          >
            Empowering infrastructure with innovation, precision, and passion.
          </motion.p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-6 md:px-24 font-serif">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-center mb-12 text-cyan-400 animate-bounce">
            What We Offer
          </h2>
        </motion.div>

        <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05, rotate: 1 }}
              whileTap={{ scale: 0.98 }}
              className="bg-gradient-to-br from-white via-gray-100 to-gray-200 text-gray-900 rounded-2xl overflow-hidden shadow-2xl hover:shadow-emerald-400/50 group border border-gray-300"
            >
              <div className="overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  width={500}
                  height={300}
                  className="w-full h-52 object-cover group-hover:scale-110 group-hover:rotate-1 transition-all duration-700 ease-in-out"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2 text-indigo-900 group-hover:text-indigo-600 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-700 text-sm">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Banner */}
      <section className="relative py-24 px-6 md:px-24 bg-[url('/images/services/full-project.jpg')] bg-cover bg-center font-serif">
        <div className="bg-black bg-opacity-70 rounded-xl p-10 max-w-2xl text-white">
          <motion.h2
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold mb-4 text-cyan-300"
          >
            Total Project Lifecycle Management
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            From consultation to execution, we’re with you every step of the way — delivering quality, innovation, and satisfaction.
          </motion.p>
        </div>
      </section>

      {/* Footer */}
      <div className="mt-24 w-full">
        <Footer />
      </div>
    </main>
  );
}
