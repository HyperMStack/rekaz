import { Hero } from "@/components/index/Hero";
import { ProjectsCarousel } from "@/components/index/ProjectsCarousel";
import { Sectors } from "@/components/index/Sectors";
import { StatsIncrement } from "@/components/index/StatsIncrement";
import { LayoutWrapper } from "@/components/LayoutWrapper";
import Head from "next/head";
import Image from "next/image";
import { Contact } from "@/components/index/Contact";
import { client } from "../../sanity/lib/client";
import { urlForImage } from "../../sanity/lib/image";

export async function getStaticProps(context) {
  const { locale } = context;

  let homePageData = [];
  let projectPageData = [];
  let navLinksData = [];
  let footerLinksData = [];
  let websiteSettingsData = [];
  let contactsData = [];

  if (locale == "en") {
    homePageData = await client.fetch(
      '*[_type == "homePage" && language=="en"]'
    );
    projectPageData = await client.fetch(
      '*[_type == "projectPage" && language == "en"]{title,projectHero,slug}'
    );
    navLinksData = await client.fetch(
      '*[_type == "navLinks" && language == "en"]'
    );
    footerLinksData = await client.fetch(
      '*[_type == "footerLinks" && language == "en"]'
    );
    websiteSettingsData = await client.fetch(
      '*[_type == "settings" && language == "en"]'
    );
    contactsData = await client.fetch(
      '*[_type == "contact" && language == "en"]'
    );
  } else if (locale == "ar") {
    homePageData = await client.fetch(
      '*[_type == "homePage" && language=="ar"]'
    );
    projectPageData = await client.fetch(
      '*[_type == "projectPage" && language == "ar"]{title,projectHero,slug}'
    );
    navLinksData = await client.fetch(
      '*[_type == "navLinks" && language == "ar"]'
    );
    footerLinksData = await client.fetch(
      '*[_type == "footerLinks" && language == "ar"]'
    );
    websiteSettingsData = await client.fetch(
      '*[_type == "settings" && language == "ar"]'
    );
    contactsData = await client.fetch(
      '*[_type == "contact" && language == "ar"]'
    );
  }

  return {
    props: {
      homePageData: homePageData[0] || {},
      projectPageData,
      navLinksData: navLinksData[0].links || {},
      footerLinksData: footerLinksData[0].links || {},
      websiteSettingsData: websiteSettingsData[0] || {},
      contactsData: contactsData[0],
    },
    revalidate: 10, // In seconds
  };
}

export default function Home({
  homePageData,
  projectPageData,
  navLinksData,
  footerLinksData,
  websiteSettingsData,
  contactsData,
}) {
  const { heroSection, sectorsSection, statsSection } = homePageData;
  return (
    <>
      <Head>
        <title>Rekaz Development</title>
        <meta
          name="description"
          content={`${websiteSettingsData.websiteDescription}`}
          key="description"
        />
        <meta
          property="og:title"
          content={`${websiteSettingsData.websiteName}`}
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${websiteSettingsData.websiteURL}`} />
        <meta
          property="og:image:secure_url"
          content={`${urlForImage(websiteSettingsData.logo)}`}
        />
        <meta
          property="og:site_name"
          content={`${websiteSettingsData.websiteName}`}
        />
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
          logo={websiteSettingsData.logo}
          navItems={navLinksData}
          showNav={false}
          footerLinks={footerLinksData}
          websiteName={websiteSettingsData.websiteName}
          language={websiteSettingsData.language}
        >
          <Hero data={heroSection} />
          <ProjectsCarousel projects={projectPageData} />
          <Sectors sectorsData={sectorsSection} />
          <StatsIncrement statsData={statsSection} />
          <Contact
            language={homePageData.language}
            contactsData={contactsData}
          />
        </LayoutWrapper>
      </div>
    </>
  );
}
