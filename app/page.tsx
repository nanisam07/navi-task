"use client";

import { HeroSection } from "@/components/ui/HeroSection";

import GoalsAndObjectives from "@/components/GoalsAndObjectives";
import VisionSection from "@/components/ui/VisionSection";
import ProjectsSection from "@/components/ui/ProjectsSection";
import ServiceSection from "@/components/ui/ServiceSection";
import FeatureSection from "@/components/ui/FeatureSection";
import StructuralFloors from "@/components/ui/StructuralFloors";
import Projects from "@/components/ui/Projects";
import StrategiesSection from "@/components/ui/StrategiesSection";
import TeamSection from "../components/ui/TeamSection";
import BenefitsSection from "@/components/BenefitsSection";
import Footer from "@/components/Footer";
import Header from '@/components/Header';
// ✅ Dynamically import StatsSection to prevent hydration errors
import dynamic from "next/dynamic";
const StatsSection = dynamic(() => import("@/components/StatsSection"), { ssr: false });

export default function Home() {
  const projects = [
    { title: "Client 1", link: "https://yourportfolio.com", thumbnail: "/images/logos/C1.PNG" },
    { title: "Client 2", link: "https://example.com", thumbnail: "/images/logos/C2.png" },
    { title: "Client 3", link: "https://blog.example.com", thumbnail: "/images/logos/C3.png" },
    { title: "Client 4", link: "https://dashboard.example.com", thumbnail: "/images/logos/C4.png" },
    { title: "Client 5", link: "https://dashboard.example.com", thumbnail: "/images/logos/C5.png" },
    { title: "Client 6", link: "https://dashboard.example.com", thumbnail: "/images/logos/C6.png" },
    { title: "Clinet 7", link: "https://dashboard.example.com", thumbnail: "/images/logos/C7.png" },
    { title: " Client 8", link: "https://dashboard.example.com", thumbnail: "/images/logos/C8.png" },
    { title: "Client 9 ", link: "https://dashboard.example.com", thumbnail: "/images/logos/C9.png" },
    { title: "Client 10 ", link: "https://dashboard.example.com", thumbnail: "/images/logos/C10.png" },
    { title: "Client 11 ", link: "https://dashboard.example.com", thumbnail: "/images/logos/C11.png" },
    { title: "Client 12 ", link: "https://dashboard.example.com", thumbnail: "/images/logos/C12.png" },
    { title: "Client 13 ", link: "https://dashboard.example.com", thumbnail: "/images/logos/C13.png" },
    { title: "Client 14 ", link: "https://dashboard.example.com", thumbnail: "/images/logos/C14.png" },
  ];

  

  return (
    <>
     <Header />
      
      <HeroSection products={projects} />
      <GoalsAndObjectives />
      <VisionSection />
      <ProjectsSection />
      <ServiceSection />
      <FeatureSection />
      <StructuralFloors />
      <Projects />
      <StrategiesSection />
      <TeamSection />
      <StatsSection />
      <BenefitsSection />
      <Footer  />
    </>
  );
}
