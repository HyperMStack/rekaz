import { LayoutWrapper } from "@/components/LayoutWrapper";
import { Hero } from "@/components/project/Hero";
import ImageSet from "@/components/project/ImageSet";
import { Info } from "@/components/project/Info";
import { InlineDescription } from "@/components/project/InlineDescription";
import { websiteData } from "@/data/data";
import { ImageSlider } from "@/components/project/ImageSlider";
import Head from "next/head";
import Image from "next/image";
import { client } from "../../../sanity/lib/client";

export default function project({ projectData, navLinksData }) {
  const locale = projectData.language;
  return (
    <div className="relative overflow-hidden">
      <Head>
        <title>{projectData.title}</title>
        <meta
          name="description"
          content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque numquam tenetur dolorem ullam dolores animi corporis illum harum."
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
        <meta property="og:site_name" content={`Rekaz Development`} />
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
        logo={websiteData.logo.hor}
        navItems={navLinksData}
        showNav={false}
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
  const query = `*[_type == "projectPage" && language == $locale && slug.current == $slug][0]`;
  const projectData = await client.fetch(query, {
    locale: locale === "ar" ? "ar" : "en",
    slug: params.slug,
  });

  if (locale === "en") {
    navLinksData = await client.fetch(
      '*[_type == "navLinks" && language == "en"]'
    );
  }

  if (locale === "ar") {
    navLinksData = await client.fetch(
      '*[_type == "navLinks" && language == "en"]'
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
      projectData,
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
