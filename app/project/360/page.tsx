'use client';

import { motion } from "framer-motion";
import Image from "next/image";
import Header from '@/components/Header';
import Footer from "@/components/Footer";

export default function LifeTowerProjectPage() {
  return (
    <div className="bg-gradient-to-b from-gray-900 to-black text-white min-h-screen">
        <Header />
      {/* 🔥 Hero Section */}
      <div className="bg-[#1e1e2f] h-[50vh] sm:h-[60vh] flex items-center justify-center px-4">
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl sm:text-5xl font-extrabold text-center text-white"
        >
          360 Life Tower – 2 Residential <br />
          <span className="text-white
          "> Green Buildings</span> 
          
        </motion.h1>
      </div>

      {/* 💡 Main Content */}
      <div className="max-w-5xl mx-auto px-4 py-10 font-[Poppins]">

        {/* 🧾 Intro */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-lg leading-relaxed mb-6"
        >
          360 Life Tower – 2 is one of the most prestigious residential high-rise developments in the fast-growing area of Kondapur, Hyderabad. This landmark structure stands tall with 3 basements, a ground floor, and 35 upper floors, delivering world-class living spaces combined with modern architectural excellence.
        </motion.p>

        <p className="mb-6">
          <strong>Navni Post Tensioning Systems Pvt. Ltd.</strong> was entrusted with the post-tensioning design and execution for this massive project, partnering with the renowned structural consultancy firm <strong>Zaki & Associates</strong>.
        </p>

        <p className="mb-10">
          Spanning a total construction area of <strong>6,00,000 Sq.ft</strong>, this project demanded advanced structural solutions to accommodate luxury residential units, maximize open spaces, and efficiently manage slab depths while maintaining superior structural integrity.
        </p>

        {/* 🖼️ Images Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
          <Image
            src="/images/projects/3601.png"
            alt="360 Life Tower Inside View 1"
            width={600}
            height={400}
            className="w-full h-auto rounded-xl shadow-lg"
          />
          <Image
            src="/images/projects/3602.png"
            alt="360 Life Tower Inside View 2"
            width={600}
            height={400}
            className="w-full h-auto rounded-xl shadow-lg"
          />
        </div>

        {/* 🔧 Scope of Work */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-blue-400 mb-4">🔧 Our Scope Included:</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Post-tensioning design optimization for slender slabs and longer spans.</li>
            <li>Execution of PT works for high-rise slabs and basements with stringent quality assurance processes.</li>
            <li>Adherence to tight project timelines ensuring seamless coordination with other structural and architectural elements.</li>
          </ul>
        </section>

        {/* 📋 Project Info */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-pink-400 mb-4">📋 Project Info:</h2>
          <ul className="list-disc list-inside space-y-2">
            <li><strong>Project Name:</strong> 360 Life Tower – 2</li>
            <li><strong>No. of Floors:</strong> 3 Basements + Ground + 35 Floors</li>
            <li><strong>Consultant:</strong> Zaki & Associates</li>
            <li><strong>Location:</strong> Kondapur, Hyderabad</li>
            <li><strong>Total Area:</strong> 6,00,000 Sq.ft</li>
          </ul>
        </section>

        {/* 🏁 Conclusion */}
        <section className="mb-10">
          <p>
            360 Life Tower – 2 stands as a testament to Navni’s engineering expertise, precision execution, and ability to deliver value-added solutions in large-scale residential infrastructure.
          </p>
        </section>
 </div>
        <Footer />
    </div>
  );
}
