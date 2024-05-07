import { LayoutWrapper } from "@/components/LayoutWrapper";
import { Contact } from "../components/index/Contact";
import { Hero } from "../components/project/Hero";
import ImageSet from "../components/project/ImageSet";
import { Info } from "../components/project/Info";
import { InlineDescription } from "../components/project/InlineDescription";
import { WideImage } from "../components/project/WideImage";
import { navLinks, websiteData } from "@/data/data";
import { ImageSlider } from "@/components/project/ImageSlider";
import Head from "next/head";
import { projects } from "@/data/data";

export default function project() {
  const projectData = projects[0];
  return (
    <>
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
      <LayoutWrapper
        logo={websiteData.logo}
        navItems={navLinks}
        showNav={false}
      >
        <Hero image={projectData.coverImage} />
        <Info projectInfo={projectData} />
        <ImageSet imageSet={projectData.imageSet_1} />
        <InlineDescription inlineDescription={projectData.InlineDescription} />
        <ImageSlider images={projectData.sliderImages} />
        {/* <WideImage image={projectData.wideImage} /> */}
        {/* <InlineDescription inlineDescription={projectData.InlineDescription} /> */}
        <ImageSet imageSet={projectData.imageSet_2} />
        <Contact className={`mt-20`} />
      </LayoutWrapper>
    </>
  );
}
