import { Hero } from "@/components/index/Hero";
import { ProjectsCarousel } from "@/components/index/ProjectsCarousel";
import { Sectors } from "@/components/index/Sectors";
import { StatsIncrement } from "@/components/index/StatsIncrement";
import {
  heroData,
  navLinks,
  projects,
  sectors,
  websiteData,
} from "@/data/data";
import { LayoutWrapper } from "@/components/LayoutWrapper";
import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <div className="relative overflow-hidden">
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
      {/* sm screens */}
      <Image
        width={350}
        height={350}
        src={"/images/svg/star-color.svg"}
        alt="feature"
        className="md:hidden absolute top-[calc(50%-400px)] right-0 translate-x-1/2 opacity-50"
      />
      <Image
        width={350}
        height={350}
        src={"/images/svg/star-gray.svg"}
        alt="feature"
        className="md:hidden absolute top-[calc(50%+200px)] left-0 -translate-x-1/2"
      />
      {/* md screens */}
      <Image
        width={600}
        height={600}
        src={"/images/svg/star-color.svg"}
        alt="feature"
        className="hidden md:block lg:hidden absolute top-[calc(50%-200px)] right-0 translate-x-1/2 opacity-50"
      />
      <Image
        width={600}
        height={600}
        src={"/images/svg/star-gray.svg"}
        alt="feature"
        className="hidden md:block lg:hidden absolute top-[calc(50%+400px)] left-0 -translate-x-1/2"
      />
      {/* lg screens */}
      <Image
        width={800}
        height={800}
        src={"/images/svg/star-color.svg"}
        alt="feature"
        className="hidden lg:block absolute top-[calc(50%-100px)] right-0 translate-x-1/2 opacity-50"
      />
      <Image
        width={800}
        height={800}
        src={"/images/svg/star-gray.svg"}
        alt="feature"
        className="hidden lg:block absolute top-[calc(50%+500px)] left-0 -translate-x-1/2"
      />
      <LayoutWrapper
        logo={websiteData.logo}
        navItems={navLinks}
        showNav={false}
      >
        <Hero data={heroData} />
        <ProjectsCarousel projects={projects} />
        <Sectors sectorsData={sectors} />
        <StatsIncrement />
      </LayoutWrapper>
    </div>
  );
}
