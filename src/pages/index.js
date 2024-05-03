import Image from "next/image";
import { Inter } from "next/font/google";
import { Hero } from "@/components/index/Hero";
import { ProjectsCarousel } from "@/components/index/ProjectsCarousel";
import { Sectors } from "@/components/index/Sectors";
import { StatsIncrement } from "@/components/index/StatsIncrement";
import { Contact } from "@/components/index/Contact";
import {
  heroData,
  navLinks,
  projects,
  sectors,
  websiteData,
} from "@/data/data";
import { LayoutWrapper } from "@/components/LayoutWrapper";

export default function Home() {
  return (
    <LayoutWrapper logo={websiteData.logo} navItems={navLinks} showNav={false}>
      <Hero data={heroData} />
      <ProjectsCarousel projects={projects} />
      <Sectors sectorsData={sectors} />
      <StatsIncrement />
      <Contact />
    </LayoutWrapper>
  );
}
