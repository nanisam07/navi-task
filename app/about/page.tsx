'use client';

import { useEffect, useState } from 'react';
import { MotionDiv } from '@/components/MotionWrapper';
import VisionSection from "@/components/ui/VisionSection";
import ServiceSection from "@/components/ui/ServiceSection";
import StrategiesSection from "@/components/ui/StrategiesSection";
import Footer from '@/components/Footer';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import Image from 'next/image';

export default function About() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Set default fallback width/height
  const [windowSize, setWindowSize] = useState({ width: 1200, height: 800 });

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
  }, []);

  const blobX = useTransform(x, [0, windowSize.width], [-100, 100]);
  const blobY = useTransform(y, [0, windowSize.height], [-100, 100]);

  const handleMouse = (e: React.MouseEvent) => {
    x.set(e.clientX);
    y.set(e.clientY);
  };

  return (
    <div
      onMouseMove={handleMouse}
      className="relative overflow-hidden min-h-screen bg-gradient-to-br from-[#fdfcfb] via-[#e2d1c3] to-[#d3cce3]"
    >
      {/* Animated Background Blobs */}
      <motion.div
        style={{ x: blobX, y: blobY }}
        className="absolute -top-32 -left-32 w-[600px] h-[600px] bg-[#c084fc] opacity-30 rounded-full blur-3xl"
      />
      <motion.div
        style={{ x: blobX, y: blobY }}
        className="absolute -bottom-32 -right-32 w-[500px] h-[500px] bg-[#a5b4fc] opacity-25 rounded-full blur-2xl"
      />

      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center py-32 px-6 text-left"
        style={{ backgroundImage: "url('/images/about-hero.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/50 z-0" />
        <MotionDiv
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 max-w-5xl mx-auto text-white"
        >
          <p className="text-sm uppercase tracking-widest mb-2 text-blue-200">
            Explore the features
          </p>
          <h1 className="text-6xl md:text-8xl font-extrabold leading-tight tracking-tight opacity-30">
            SCHEDULE
          </h1>
          <h2 className="text-4xl md:text-6xl font-bold -mt-8">ABOUT US</h2>
          <p className="mt-4 text-lg max-w-xl text-blue-100">
            Etiam scelerisque tortor at lectus dapibus, nec fermentum diam feugiat.
            Morbi rutrum magna et dui.
          </p>
        </MotionDiv>
      </section>

      {/* Main About Section */}
      <section className="max-w-4xl mx-auto p-6 mt-10 relative z-10 space-y-10">
        <MotionDiv
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white/70 backdrop-blur-md rounded-xl p-8 shadow-2xl"
        >
          <h2 className="text-2xl font-semibold mb-4">Who We Are</h2>
          <p>
            Navni Post Tensioning Systems Pvt. Ltd., founded in 2019 in Hyderabad,
            specializes in designing and executing post-tensioning systems for
            commercial buildings, IT parks, and residential developments.
          </p>
        </MotionDiv>

        {/* Our Values */}
        <MotionDiv
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-xl p-6 bg-orange-500 text-white shadow-lg"
        >
          <h2 className="text-3xl font-bold text-center mb-6">OUR VALUES</h2>
          <div className="grid md:grid-cols-4 gap-4 text-center text-sm">
            <div>
              <div className="text-3xl mb-2">📐</div>
              <h3 className="font-bold">Integrity</h3>
              <p>Meticulous design & execution ensuring structural safety.</p>
            </div>
            <div>
              <div className="text-3xl mb-2">🔧</div>
              <h3 className="font-bold">Excellence</h3>
              <p>Commitment to superior design and structural performance.</p>
            </div>
            <div>
              <div className="text-3xl mb-2">📅</div>
              <h3 className="font-bold">Collaboration</h3>
              <p>Partnerships for seamless design & execution workflows.</p>
            </div>
            <div>
              <div className="text-3xl mb-2">🚀</div>
              <h3 className="font-bold">Innovation</h3>
              <p>Creative approaches to post-tensioning for new heights.</p>
            </div>
          </div>
        </MotionDiv>

        {/* Designing & Implementation */}
        <MotionDiv
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white/70 backdrop-blur-md rounded-xl p-8 shadow-lg"
        >
          <h2 className="text-2xl font-semibold mb-6 text-right text-indigo-800">
            Explore Our Works
          </h2>
          <div className="md:flex items-center gap-10">
            <Image
              src="/images/designing-structure.jpg"
              alt="Design Image"
              width={400}
              height={300}
              className="rounded-lg shadow-md"
            />
            <div className="flex-1 mt-6 md:mt-0">
              <h3 className="text-xl font-semibold mb-2">
                Designing & Implementation
              </h3>
              <div className="space-y-3">
                {[{ label: 'Residential Buildings', value: 70 }, { label: 'Architecture', value: 93 }, { label: 'Construction', value: 82 }].map((item, idx) => (
                  <div key={idx}>
                    <div className="flex justify-between text-sm mb-1">
                      <span>{item.label}</span>
                      <span>{item.value}%</span>
                    </div>
                    <div className="h-2 bg-gray-200 rounded-full">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${item.value}%` }}
                        transition={{ duration: 1 }}
                        className="h-2 bg-orange-500 rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </MotionDiv>
      </section>

      {/* Extra Sections */}
      <VisionSection />
      <ServiceSection />
      <StrategiesSection />

      {/* Footer */}
      <Footer />
    </div>
  );
}
