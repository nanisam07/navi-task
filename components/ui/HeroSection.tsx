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
  const [hasMounted, setHasMounted] = React.useState(false);
  const ref = React.useRef(null);

  React.useEffect(() => {
    setHasMounted(true);
  }, []);

  // ✅ HOOKS are called always
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

  // ✅ prevent rendering until after mount (to avoid hydration mismatch)
  if (!hasMounted) return null;

  const firstRow = products.slice(0, 5);
  const secondRow = products.slice(5, 10);
  const thirdRow = products.slice(10, 15);

  return (
    <div
      ref={ref}
      className="relative h-[300vh] py-24 overflow-hidden antialiased flex flex-col [perspective:1000px] [transform-style:preserve-3d]"
    >
      {/* 🔁 Background Video */}
      <div className="absolute inset-0 z-0">
        <motion.video
          className="absolute top-0 left-0 w-full h-full object-cover opacity-40"
          style={{ opacity: video1Opacity }}
          src="/videos/bg1.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/30 to-pink-300/20 mix-blend-multiply backdrop-blur-sm" />
      </div>

      {/* 🌟 Content */}
      <div className="relative z-10">
        <Header />
        <motion.div
          style={{ rotateX, rotateZ, translateY, opacity }}
          className="space-y-10 px-4"
        >
          {[firstRow, secondRow, thirdRow].map((row, i) => (
            <motion.div
              key={i}
              className="flex flex-wrap justify-center gap-6 mb-8 sm:mb-12"
            >
              {row.map((product) => (
                <ProductCard
                  key={product.title}
                  product={product}
                  translate={i % 2 === 0 ? translateX : translateXReverse}
                />
              ))}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export const Header = () => {
  return (
    <div className="max-w-6xl mx-auto py-20 px-4 text-center sm:text-left">
      <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold dark:text-white font-serif leading-tight tracking-wide">
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
      whileHover={{ scale: 1.05, y: -10 }}
      className="group/product relative w-full sm:w-[18rem] md:w-[22rem] lg:w-[26rem] h-72 sm:h-80 md:h-96 rounded-xl overflow-hidden transition-transform duration-300 shadow-xl hover:shadow-blue-300/50"
    >
      <Link href={product.link} className="block w-full h-full">
        <Image
          src={product.thumbnail}
          alt={product.title}
          fill
          className="object-contain absolute inset-0 transition-transform duration-300"
          priority
        />
      </Link>
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover/product:opacity-100 transition-opacity duration-300 pointer-events-none" />
      <h2 className="absolute bottom-4 left-4 text-white text-base font-semibold drop-shadow-xl group-hover/product:opacity-100 transition-opacity duration-300">
        {product.title}
      </h2>
    </motion.div>
  );
};

export default HeroSection;
