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
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Rekaz Development</title>
        <meta
          name="description"
          content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque numquam tenetur dolorem ullam dolores animi corporis illum harum."
          key="description"
        />
        <meta property="og:title" content="Rekaz Development" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`https://rekaz.netlify.app`} />
        <meta
          property="og:image"
          content={`https://rekaz.netlify.app${heroData.image}`}
        />
        <meta property="og:site_name" content={`Rekaz Development`} />
      </Head>
      <LayoutWrapper
        logo={websiteData.logo}
        navItems={navLinks}
        showNav={false}
      >
        <Hero data={heroData} />
        <ProjectsCarousel projects={projects} />
        <Sectors sectorsData={sectors} />
        <StatsIncrement />
        <Contact />
      </LayoutWrapper>
    </>
  );
}
