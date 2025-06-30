"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const projects = [
  {
    title: "Kadapa Central",
    image: "/images/one11.png",
    link: "https://navni.in/project/kadapa-central"
  },
  {
    title: "360 LIFE TOWERS - 1",
    image: "/images/two.png",
    link: "https://navni.in/project/green-towers"
  },
  {
    title: "MY HOME 99",
    image: "/images/myhome99.png",
    link: "https://navni.in/project/skyline"
  },
  {
    title: "HETRO DRUGS LIMITED ",
    image: "/images/hetrogrug.png",
    link: "https://navni.in/project/highrise"
  },
  {
    title: "BOMMIDI ELIE @ LB NAGAR",
    image: "/images/bommidi.png",
    link: "https://navni.in/project/corporate"
  },
  {
    title: "FARM HOUSE",
    image: "/images/farmhouse.png",
    link: "https://navni.in/project/mall"
  }
];

export default function ProjectsSection() {
  return (
    <section className="bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] text-white py-16 sm:py-20 px-4 sm:px-6 font-[Poppins]">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-5xl font-extrabold text-center mb-10 sm:mb-14 tracking-tight"
        >
          OUR PROJECTS
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
          {projects.map((project, index) => (
            <motion.a
              href={project.link}
              key={index}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative block rounded-3xl overflow-hidden shadow-2xl border border-white/10"
            >
              <Image
                src={project.image}
                alt={project.title}
                width={500}
                height={300}
                className="w-full h-60 sm:h-64 object-cover transform transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/50 flex items-end p-4 sm:p-5 transition-all duration-300 group-hover:bg-black/70">
                <h3 className="text-lg sm:text-xl font-semibold text-white drop-shadow-lg">
                  {project.title}
                </h3>
              </div>
            </motion.a>
          ))}
        </div>

        <div className="mt-12 sm:mt-16 text-center">
          <motion.a
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            href="/projects"
            className="inline-block px-6 py-3 sm:px-8 sm:py-3 bg-pink-600 text-white rounded-full font-bold text-base sm:text-lg shadow-xl hover:bg-pink-700 transition"
          >
            View All Projects →
          </motion.a>
        </div>
      </div>
    </section>
  );
}
