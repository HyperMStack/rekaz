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
import { Contact } from "@/components/index/Contact";
import { client } from "../../sanity/lib/client";

export async function getStaticProps(context) {
  const { locale } = context;

  let homePageData = [];
  let projectPageData = [];

  if (locale == "en") {
    homePageData = await client.fetch(
      '*[_type == "homePage" && language=="en"]'
    );
    projectPageData = await client.fetch(
      '*[_type == "projectPage" && language == "en"]{title,projectHero,slug}'
    );
  } else if (locale == "ar") {
    homePageData = await client.fetch(
      '*[_type == "homePage" && language=="ar"]'
    );
    projectPageData = await client.fetch(
      '*[_type == "projectPage" && language == "ar"]{title,projectHero,slug}'
    );
  }

  return {
    props: {
      homePageData: homePageData[0] || {},
      projectPageData,
    },
    revalidate: 10, // In seconds
  };
}

export default function Home({ homePageData, projectPageData }) {
  const { heroSection, sectorsSection, statsSection } = homePageData;
  const images = [
    "/images/project2/1.webp",
    "/images/project2/2.webp",
    "/images/project2/3.webp",
    "/images/project2/4.webp",
    "/images/project2/1.webp",
  ];
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
      <div className="relative overflow-hidden">
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
          logo={websiteData.logo.hor}
          navItems={navLinks}
          showNav={false}
        >
          <Hero data={heroSection} images={images} />
          <ProjectsCarousel projects={projectPageData} />
          <Sectors sectorsData={sectorsSection} />
          <StatsIncrement statsData={statsSection} />
          <Contact language={homePageData.language} />
        </LayoutWrapper>
      </div>
    </>
  );
}
