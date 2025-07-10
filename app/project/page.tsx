'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import Image from 'next/image';
import Footer from "@/components/Footer";
import Header from '@/components/Header';

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    name: 'Farmhouse',
    slug: 'farmhouse',
    color: 'from-green-400 to-lime-500',
    image: '/images/projects/hyd3.png',
  },
  {
    name: 'Kadapa Central',
    slug: 'kadapa',
    color: 'from-blue-500 to-indigo-600',
    image: '/images/projects/kadapa1.png',
  },
  {
    name: 'MyHome',
    slug: 'myhome',
    color: 'from-pink-500 to-rose-500',
    image: '/images/projects/myhome2.png',
  },
  {
    name: 'GSR Tower',
    slug: 'gsr',
    color: 'from-purple-600 to-fuchsia-600',
    image: '/images/projects/hyd1.png',
  },
  {
    name: 'GRAVA',
    slug: 'grava',
    color: 'from-orange-400 to-amber-500',
    image: '/images/projects/grave1.png',
  },
  {
    name: '360 Project',
    slug: '360',
    color: 'from-cyan-500 to-teal-500',
    image: '/images/projects/3602.png',
  },
];

export default function ProjectPage() {
  const cardRefs = useRef<Array<HTMLDivElement | null>>([]);
  const headerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // Animate each card on scroll
    cardRefs.current.forEach((el) => {
      if (el) {
        gsap.fromTo(
          el,
          { opacity: 0, y: 80, rotate: 5 },
          {
            opacity: 1,
            y: 0,
            rotate: 0,
            duration: 1.2,
            ease: 'expo.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 85%',
            },
          }
        );
      }
    });

    // Animate header on load and scroll away
    if (headerRef.current) {
      gsap.fromTo(
        headerRef.current,
        { opacity: 0, y: -60, scale: 0.8 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1,
          ease: 'back.out(1.7)',
        }
      );

      gsap.to(headerRef.current, {
        opacity: 0,
        y: -80,
        scrollTrigger: {
          trigger: headerRef.current,
          start: 'top top',
          end: '+=300',
          scrub: true,
        },
      });
    }
  }, []);

  return (
    <>
      <Header />

      <section className="min-h-screen bg-purple-700 text-white py-16 px-4 sm:px-8 font-serif overflow-x-hidden">
        {/* Animated Header */}
        <div ref={headerRef} className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-yellow-300">
            All Projects
          </h1>
          <p className="text-white/90 text-lg">
            Explore our diverse range of featured projects
          </p>
        </div>

        {/* Project Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {projects.map(({ name, slug, color, image }, index) => (
            <Link key={slug} href={`/project/${slug}`}>
              <div
                ref={(el) => (cardRefs.current[index] = el)}
                className={`p-4 rounded-xl shadow-lg bg-gradient-to-tr ${color} transition-all duration-300 cursor-pointer text-center`}
              >
                <div className="relative w-full h-40 mb-4 overflow-hidden rounded-md">
                  <Image
                    src={image}
                    alt={name}
                    fill
                    className="object-cover rounded-md"
                  />
                </div>
                <h2 className="text-xl font-bold text-white">{name}</h2>
                <p className="text-white/90 text-sm mt-2">View Details</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
}
