import { LayoutWrapper } from "@/components/LayoutWrapper";
import { Hero } from "@/components/project/Hero";
import ImageSet from "@/components/project/ImageSet";
import { Info } from "@/components/project/Info";
import { InlineDescription } from "@/components/project/InlineDescription";
import { navLinks, projects as localProjects, websiteData } from "@/data/data";
import { ImageSlider } from "@/components/project/ImageSlider";
import Head from "next/head";
import Image from "next/image";

export default function project({ projectData }) {
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
      </LayoutWrapper>
    </div>
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
