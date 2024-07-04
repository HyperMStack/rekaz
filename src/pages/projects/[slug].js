import { LayoutWrapper } from "@/components/LayoutWrapper";
import { Hero } from "@/components/project/Hero";
import ImageSet from "@/components/project/ImageSet";
import { Info } from "@/components/project/Info";
import { InlineDescription } from "@/components/project/InlineDescription";
import { ImageSlider } from "@/components/project/ImageSlider";
import Head from "next/head";
import Image from "next/image";
import { client } from "../../../sanity/lib/client";
import { urlForImage } from "../../../sanity/lib/image";

export default function project({
  projectData,
  navLinksData,
  footerLinksData,
  websiteSettingsData,
}) {
  const locale = projectData.language;
  return (
    <div className="relative overflow-hidden">
      <Head>
        <title>{projectData.title}</title>
        <meta
          name="description"
          content={`${projectData.projectInformation.description}`}
          key="description"
        />
        <meta property="og:title" content={projectData.title} />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content={`https://rekaz.netlify.app/${projectData.slug}`}
        />
        <meta
          property="og:image"
          content={`https://rekaz.netlify.app${projectData.coverImage}`}
        />
        <meta
          property="og:site_name"
          content={`${websiteSettingsData.websiteName}`}
        />
      </Head>
      {/* sm screens */}
      <Image
        width={450}
        height={450}
        src={"/images/svg/star-color.svg"}
        alt="feature"
        className="md:hidden absolute top-[calc(25%-500px)] right-0 translate-x-1/2 opacity-50"
      />
      <Image
        width={350}
        height={350}
        src={"/images/svg/star-gray.svg"}
        alt="feature"
        className="md:hidden absolute top-[calc(75%+300px)] left-0 -translate-x-1/2"
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
        className="hidden lg:block absolute top-[calc(50%-800px)] right-0 translate-x-1/2 opacity-50"
      />
      <Image
        width={800}
        height={800}
        src={"/images/svg/star-gray.svg"}
        alt="feature"
        className="hidden lg:block absolute top-[calc(50%+800px)] left-0 -translate-x-1/2"
      />
      <LayoutWrapper
        logo={websiteSettingsData.logo}
        navItems={navLinksData}
        footerLinks={footerLinksData}
        showNav={false}
        websiteName={websiteSettingsData.websiteName}
        language={websiteSettingsData.language}
      >
        <Hero image={projectData.projectHero.image} />
        <Info
          projectInfo={projectData.projectInformation}
          projectTitle={projectData.title}
          language={locale}
        />
        <ImageSet imageSet={projectData.projectImageSet} />
        <InlineDescription
          inlineDescription={projectData.projectInlineDescription}
        />
        <ImageSlider images={projectData.projectSliderImages.images} />
      </LayoutWrapper>
    </div>
  );
}

export async function getStaticProps({ params, locale }) {
  let navLinksData = [];
  let websiteSettingsData;
  let footerLinksData = [];
  const query = `*[_type == "projectPage" && language == $locale && slug.current == $slug][0]`;
  const projectData = await client.fetch(query, {
    locale: locale === "ar" ? "ar" : "en",
    slug: params.slug,
  });

  if (locale === "en") {
    navLinksData = await client.fetch(
      '*[_type == "navLinks" && language == "en"]'
    );
    websiteSettingsData = await client.fetch(
      '*[_type == "settings" && language == "en"]'
    );
    footerLinksData = await client.fetch(
      '*[_type == "footerLinks" && language == "en"]'
    );
  }

  if (locale === "ar") {
    navLinksData = await client.fetch(
      '*[_type == "navLinks" && language == "en"]'
    );
    websiteSettingsData = await client.fetch(
      '*[_type == "settings" && language == "ar"]'
    );
    footerLinksData = await client.fetch(
      '*[_type == "footerLinks" && language == "ar"]'
    );
  }

  if (!projectData) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      navLinksData: navLinksData[0].links,
      websiteSettingsData: websiteSettingsData[0],
      projectData,
      footerLinksData: footerLinksData[0].links,
    },
    revalidate: 10,
  };
}

export async function getStaticPaths() {
  const projects = await client.fetch(
    `*[_type == "projectPage"]{slug, language}`
  );
  const paths = projects.map((project) => ({
    params: { slug: project.slug.current },
    locale: project.language,
  }));

  return { paths, fallback: "blocking" };
}
