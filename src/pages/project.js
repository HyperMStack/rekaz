import { LayoutWrapper } from "@/components/LayoutWrapper";
import { Contact } from "../components/index/Contact";
import { Hero } from "../components/project/Hero";
import ImageSet from "../components/project/ImageSet";
import { Info } from "../components/project/Info";
import { InlineDescription } from "../components/project/InlineDescription";
import { WideImage } from "../components/project/WideImage";
import { navLinks, websiteData } from "@/data/data";
import { ImageSlider } from "@/components/project/ImageSlider";

const projectData = {
  coverImage: "/images/project1/1.webp",
  title: "Project Title",
  slug: "project-title",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque numquam tenetur dolorem ullam dolores animi corporis illum harum. Obcaecati soluta a atque culpa ipsam necessitatibus asperiores facere modi eos mollitia. Molestiae vitae minima laudantium, sapiente nostrum ipsa, facilis, voluptates perferendis quaerat inventore quidem eligendi. A deserunt culpa necessitatibus aperiam illo commodi, dolorum similique eaque. Distinctio porro officiis ipsa? Laboriosam, alias!",
  clientName: "Client's name",
  sector: "Buildings",
  location: "Muscat, Oman",
  imageSet_1: [
    {
      id: 1,
      image: "/images/project1/2.webp",
      caption: "this is a capption for the image Image",
    },
    { id: 2, image: "/images/project1/3.webp", caption: "" },
  ],
  imageSet_2: [
    { id: 1, image: "/images/project1/4.webp", caption: "" },
    { id: 2, image: "/images/project1/5.webp", caption: "" },
  ],
  sliderImages: [
    { id: 1, image: "/images/project1/6.webp" },
    { id: 2, image: "/images/project1/7.webp" },
    { id: 2, image: "/images/project1/8.webp" },
    { id: 2, image: "/images/project1/9.webp" },
    { id: 2, image: "/images/project1/10.webp" },
    { id: 2, image: "/images/project1/11.webp" },
    { id: 2, image: "/images/project1/12.webp" },
    { id: 2, image: "/images/project1/13.webp" },
    { id: 2, image: "/images/project1/14.webp" },
    { id: 2, image: "/images/project1/15.webp" },
    { id: 2, image: "/images/project1/16.webp" },
  ],
  wideImage: "/images/project1/6.webp",
  InlineDescription:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt ratione soluta, accusantium nulla distinctio porro, impedit quidem eius dicta, doloribus aspernatur odio enim. Sed in quia nesciunt hic distinctio animi.",
};

export default function project() {
  return (
    <LayoutWrapper logo={websiteData.logo} navItems={navLinks} showNav={false}>
      <Hero image={projectData.coverImage} />
      <Info projectInfo={projectData} />
      <ImageSet imageSet={projectData.imageSet_1} />
      <InlineDescription inlineDescription={projectData.InlineDescription} />
      <WideImage image={projectData.wideImage} />
      <InlineDescription inlineDescription={projectData.InlineDescription} />
      <ImageSet imageSet={projectData.imageSet_2} />
      <ImageSlider images={projectData.sliderImages} />
      <Contact className={`mt-20`} />
    </LayoutWrapper>
  );
}
