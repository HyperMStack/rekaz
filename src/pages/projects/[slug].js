import { LayoutWrapper } from "@/components/LayoutWrapper";
import { Contact } from "@/components/index/Contact";
import { Hero } from "@/components/project/Hero";
import ImageSet from "@/components/project/ImageSet";
import { Info } from "@/components/project/Info";
import { InlineDescription } from "@/components/project/InlineDescription";
import { navLinks, projects as localProjects, websiteData } from "@/data/data";
import { ImageSlider } from "@/components/project/ImageSlider";
import Head from "next/head";

export default function project({ projectData }) {
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
        <ImageSet imageSet={projectData.imageSet_2} />
        <Contact className={`mt-20`} />
      </LayoutWrapper>
    </>
  );
}

export async function getStaticProps({ params }) {
  // const res = await fetch('https://.../posts')
  // const posts = await res.json()

  // Find the project data based on the slug
  const projectData = localProjects.find(
    (project) => project.slug === params.slug
  );

  if (!projectData) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      projectData,
    },
    // Re-generate every 10 seconds (adjust as needed)
    revalidate: 10,
  };
}

// export async function getStaticProps() {

//   return {
//     props: {
//       localProjects,
//     },
//     // Next.js will attempt to re-generate the page:
//     // - When a request comes in
//     // - At most once every 10 seconds
//     revalidate: 10, // In seconds
//   };
// }

export async function getStaticPaths() {
  // const res = await fetch('https://.../posts')
  // const posts = await res.json()

  //    const projects = projects

  // Get the paths we want to pre-render based on posts
  const paths = localProjects.map((project) => ({
    params: { slug: project.slug },
  }));

  // We'll pre-render only these paths at build time.
  // { fallback: 'blocking' } will server-render pages
  // on-demand if the path doesn't exist.
  return { paths, fallback: "blocking" };
}
