import Image from "next/image";
import { Inter } from "next/font/google";
import { Hero } from "@/components/index/Hero";
import { ProjectsCarousel } from "@/components/index/ProjectsCarousel";
import { Sectors } from "@/components/index/Sectors";
import { StatsIncrement } from "@/components/index/StatsIncrement";
import { Contact } from "@/components/index/Contact";
import { heroData, projects, sectors } from "@/data/data";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <Hero data={heroData} />
      <ProjectsCarousel projects={projects} />
      <Sectors sectorsData={sectors} />
      <StatsIncrement />
      <Contact />
    </div>
  );
}
