import { LayoutWrapper } from "@/components/LayoutWrapper";
import React from "react";
import { client } from "../../sanity/lib/client";
import Head from "next/head";
import { urlForImage } from "../../sanity/lib/image";
import Hero from "@/components/about-us/Hero";
import Messages from "@/components/about-us/Messages";
import Team from "@/components/about-us/Team";

export async function getStaticProps(context) {
  const { locale } = context;

  let navLinksData = [];
  let footerLinksData = [];
  let websiteSettingsData = [];

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
  }

  return {
    props: {
      navLinksData: navLinksData[0].links || {},
      footerLinksData: footerLinksData[0].links || {},
      websiteSettingsData: websiteSettingsData[0] || {},
    },
    revalidate: 10, // In seconds
  };
}

export default function AboutUs({
  navLinksData,
  footerLinksData,
  websiteSettingsData,
}) {
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
      <LayoutWrapper
        logo={websiteSettingsData.logo}
        navItems={navLinksData}
        showNav={false}
        footerLinks={footerLinksData}
        websiteName={websiteSettingsData.websiteName}
        language={websiteSettingsData.language}
      >
        <Hero />
        <Messages />
        <Team />
        {/* <WhyUs /> */}
      </LayoutWrapper>
    </>
  );
}
