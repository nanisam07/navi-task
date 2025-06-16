"use client"

import React from "react"
import { motion} from "framer-motion"
import { DraftingCompass, Drill, Construction } from "lucide-react"

const services = [
  {
    icon: <DraftingCompass size={40} />,
    title: "Designing & Implementing",
    desc: "The main activity of Navni Post Tensioning Systems Pvt Ltd. revolves around design implementation of Post Tensioning systems in buildings and civil works. With strong technical backing, NAVNI added engineering services to both consultants and contractors.",
    animation: { y: 50, opacity: 0, duration: 0.6 },
  },
  {
    icon: <Drill size={40} />,
    title: "Buildings",
    desc: "The fast-growing Indian economy is changing lifestyles. Increased spending power demands more commercial complexes, shopping centers, multiplexes, hotels, and more.",
    animation: { scale: 0.8, opacity: 0, duration: 0.6 },
  },
  {
    icon: <Construction size={40} />,
    title: "Civil Works",
    desc: "Modern architecture requires column-free areas and shallower beam depths. NAVNI meets these demands where conventional RCC design falls short.",
    animation: { x: -50, opacity: 0, duration: 0.6 },
  },
]

export default function ServicesSection() {
  return (
    <section className="bg-purple-800 text-white py-20 px-4 font-serif">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={service.animation}
            whileInView={{ x: 0, y: 0, scale: 1, opacity: 1 }}
            transition={{ duration: service.animation.duration, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="bg-purple-700 rounded-2xl p-6 shadow-xl hover:scale-105 transition-all duration-300 group"
          >
            <div className="mb-4 text-white group-hover:text-yellow-300 transition-all">
              {service.icon}
            </div>
            <h3 className="text-xl font-bold mb-2">{service.title}</h3>
            <p className="text-sm leading-relaxed text-white/90">
              {service.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
