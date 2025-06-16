"use client";

import { HeroSection } from "@/components/ui/HeroSection";
import { NavbarMenu } from "@/components/ui/Navbar";
import GoalsAndObjectives from "@/components/GoalsAndObjectives";
import VisionSection from "@/components/ui/VisionSection";
import ProjectsSection from "@/components/ui/ProjectsSection";
import ServiceSection from "@/components/ui/ServiceSection";
import FeatureSection from "@/components/ui/FeatureSection";
import StructuralFloors from "@/components/ui/StructuralFloors";
import Projects from "@/components/ui/Projects";
import StrategiesSection from "@/components/ui/StrategiesSection";
import TeamSection from "../components/ui/TeamSectio";
import BenefitsSection from "@/components/BenefitsSection";
import Footer from "@/components/Footer";
// ✅ Dynamically import StatsSection to prevent hydration errors
import dynamic from "next/dynamic";
const StatsSection = dynamic(() => import("@/components/StatsSection"), { ssr: false });

export default function Home() {
  const projects = [
    { title: "My Portfolio", link: "https://yourportfolio.com", thumbnail: "/images/one11.png" },
    { title: "E-Commerce Site", link: "https://example.com", thumbnail: "/images/three.png" },
    { title: "Blog Platform", link: "https://blog.example.com", thumbnail: "/images/two.png" },
    { title: "SaaS Dashboard", link: "https://dashboard.example.com", thumbnail: "/images/three.png" },
    { title: "SaaS Dashboard1", link: "https://dashboard.example.com", thumbnail: "/images/two.png" },
    { title: "SaaS Dashboard3", link: "https://dashboard.example.com", thumbnail: "/images/one11.png" },
    { title: "SaaS Dashboard4", link: "https://dashboard.example.com", thumbnail: "/images/three.png" },
    { title: "SaaS Dashboard5", link: "https://dashboard.example.com", thumbnail: "/images/one11.png" },
    { title: "SaaS Dashboard6", link: "https://dashboard.example.com", thumbnail: "/images/three.png" },
    { title: "SaaS Dashboard8", link: "https://dashboard.example.com", thumbnail: "/images/one11.png" },
  ];

  const testimonials = [
    {
      name: "John Doe",
      designation: "CEO, Example Corp",
      src: "/images/one11.png",
    },
    {
      name: "Jane Smith",
      designation: "Project Manager, BuildIt",
      quote: "Their attention to detail and quality is unmatched in the industry.",
    },
    {
      name: "Alice Johnson",
      designation: "Architect, Design Studio",
      quote: "Innovative solutions that exceeded our expectations every time.",
    },
  ];

  return (
    <>
      <NavbarMenu />
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
