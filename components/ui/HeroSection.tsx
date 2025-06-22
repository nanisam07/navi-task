"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  MotionValue,
} from "framer-motion";

export const HeroSection = ({
  products,
}: {
  products: {
    title: string;
    link: string;
    thumbnail: string;
  }[];
}) => {
  const firstRow = products.slice(0, 5);
  const secondRow = products.slice(5, 10);
  const thirdRow = products.slice(10, 15);

  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

  const translateX = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, 1000]),
    springConfig
  );
  const translateXReverse = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, -1000]),
    springConfig
  );
  const rotateX = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [15, 0]),
    springConfig
  );
  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [0.2, 1]),
    springConfig
  );
  const rotateZ = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [20, 0]),
    springConfig
  );
  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [-700, 500]),
    springConfig
  );

  const video1Opacity = useSpring(
    useTransform(scrollYProgress, [0.1, 0.25], [0, 1]),
    springConfig
  );

  return (
    <div
      ref={ref}
      className="relative h-[300vh] py-24 overflow-hidden antialiased flex flex-col [perspective:1000px] [transform-style:preserve-3d]"
    >
      {/* 🔥 Video Background */}
      <div className="absolute inset-0 z-0">
        <motion.video
          className="absolute top-0 left-0 w-full h-full object-cover opacity-50"
          style={{ opacity: video1Opacity }}
          src="/videos/bg1.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Foreground Content */}
      <div className="relative z-10">
        <Header />
        <motion.div
          style={{ rotateX, rotateZ, translateY, opacity }}
          className="space-y-10 px-4"
        >
          <motion.div className="flex flex-wrap justify-center gap-6 mb-12">
            {firstRow.map((product) => (
              <ProductCard
                product={product}
                translate={translateX}
                key={product.title}
              />
            ))}
          </motion.div>
          <motion.div className="flex flex-wrap justify-center gap-6 mb-12">
            {secondRow.map((product) => (
              <ProductCard
                product={product}
                translate={translateXReverse}
                key={product.title}
              />
            ))}
          </motion.div>
          <motion.div className="flex flex-wrap justify-center gap-6">
            {thirdRow.map((product) => (
              <ProductCard
                product={product}
                translate={translateX}
                key={product.title}
              />
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export const Header = () => {
  return (
    <div className="max-w-6xl relative mx-auto py-20 px-4 text-center sm:text-left">
      <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold dark:text-white font-serif leading-tight">
        EXPLORE THE FEATURES <br className="hidden sm:block" />
        DESIGNING AND EXECUTION
      </h1>
      <p className="max-w-2xl text-base sm:text-lg md:text-xl mt-6 dark:text-neutral-200 font-serif mx-auto sm:mx-0">
        Post-tensioning specialists are trained to optimize structural designs,
        reducing material usage and enhancing efficiency without compromising
        structural integrity.
      </p>
    </div>
  );
};

export const ProductCard = ({
  product,
  translate,
}: {
  product: {
    title: string;
    link: string;
    thumbnail: string;
  };
  translate: MotionValue<number>;
}) => {
  return (
    <motion.div
      style={{ x: translate }}
      whileHover={{ y: -20 }}
      className="group/product w-full sm:w-[20rem] md:w-[24rem] lg:w-[30rem] h-80 relative shrink-0"
    >
      <Link
        href={product.link}
        className="block group-hover/product:shadow-2xl relative w-full h-full"
      >
        <Image
          src={product.thumbnail}
          alt={product.title}
          fill
          className="object-cover object-left-top absolute inset-0 rounded-lg"
          priority
        />
      </Link>
      <div className="absolute inset-0 h-full w-full opacity-0 group-hover/product:opacity-80 bg-black pointer-events-none rounded-lg" />
      <h2 className="absolute bottom-4 left-4 opacity-0 group-hover/product:opacity-100 text-white text-lg font-semibold">
        {product.title}
      </h2>
    </motion.div>
  );
};

export default HeroSection;
