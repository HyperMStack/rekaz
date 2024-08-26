import { LayoutWrapper } from "@/components/LayoutWrapper";
import React from "react";
import { client } from "../../sanity/lib/client";
import Head from "next/head";
import { urlForImage } from "../../sanity/lib/image";
import Hero from "@/components/about-us/Hero";
import Messages from "@/components/about-us/Messages";
import Team from "@/components/about-us/Team";
import { Contact } from "@/components/index/Contact";
import Image from "next/image";
import { PartnersCarousel } from "@/components/about-us/PartnersCarousel";

export async function getStaticProps(context) {
  const { locale } = context;

  let navLinksData = [];
  let footerLinksData = [];
  let websiteSettingsData = [];
  let contactsData = [];
  let aboutUsData = [];

  if (locale == "en") {
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
    aboutUsData = await client.fetch(
      '*[_type == "aboutUs" && language == "en"]'
    );
  } else if (locale == "ar") {
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
    aboutUsData = await client.fetch(
      '*[_type == "aboutUs" && language == "ar"]'
    );
  }

  return {
    props: {
      navLinksData: navLinksData[0].links || {},
      footerLinksData: footerLinksData[0].links || {},
      websiteSettingsData: websiteSettingsData[0] || {},
      contactsData: contactsData[0],
      aboutUsData: aboutUsData[0],
    },
    revalidate: 10, // In seconds
  };
}

export default function AboutUs({
  navLinksData,
  footerLinksData,
  websiteSettingsData,
  contactsData,
  aboutUsData,
}) {
  console.log("about us: ", aboutUsData);
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
          property="og:image"
          content={`${urlForImage(websiteSettingsData.ogLogo)}`}
        />
        <meta property="og:image:width" content="200" />
        <meta property="og:image:height" content="200" />
        <meta property="og:image:type" content="image/png" />
        <meta
          property="og:site_name"
          content={`${websiteSettingsData.websiteName}`}
        />
      </Head>
      <div className="relative overflow-hidden">
        <Image
          width={350}
          height={350}
          src={"/images/svg/star-color.svg"}
          alt="feature"
          className="md:hidden absolute top-[calc(50%-600px)] right-0 translate-x-1/2 opacity-50"
        />
        <Image
          width={350}
          height={350}
          src={"/images/svg/star-gray.svg"}
          alt="feature"
          className="md:hidden absolute top-[calc(50%+600px)] left-0 -translate-x-1/2"
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
          className="hidden lg:block absolute top-[calc(35%-100px)] right-0 translate-x-1/2 opacity-50"
        />
        <Image
          width={800}
          height={800}
          src={"/images/svg/star-gray.svg"}
          alt="feature"
          className="hidden lg:block absolute top-[calc(40%+500px)] left-0 -translate-x-1/2"
        />
        <LayoutWrapper
          logo={websiteSettingsData.logo}
          navItems={navLinksData}
          showNav={false}
          footerLinks={footerLinksData}
          websiteName={websiteSettingsData.websiteName}
          language={websiteSettingsData.language}
        >
          <Hero
            title={aboutUsData.title}
            description={aboutUsData.companyDescription}
          />
          <Messages messages={aboutUsData.messages} />
          <Team
            data={aboutUsData.ourTeam}
            isRtl={aboutUsData.language == "ar"}
          />
          <PartnersCarousel
            partners={aboutUsData.ourPartners}
            isRtl={aboutUsData.language == "ar"}
          />
          {/* <WhyUs /> */}
          {/* <Contact
            language={websiteSettingsData.language}
            contactsData={contactsData}
          /> */}
        </LayoutWrapper>
      </div>
    </>
  );
}
