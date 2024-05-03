import { LayoutWrapper } from "@/components/LayoutWrapper";
import { Contact } from "../components/index/Contact";
import { Hero } from "../components/project/Hero";
import ImageSet from "../components/project/ImageSet";
import { Info } from "../components/project/Info";
import { InlineDescription } from "../components/project/InlineDescription";
import { WideImage } from "../components/project/WideImage";
import { navLinks, websiteData } from "@/data/data";

const projectData = {
  coverImage: "/images/project/project.jpg",
  title: "Project's Data",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque numquam tenetur dolorem ullam dolores animi corporis illum harum. Obcaecati soluta a atque culpa ipsam necessitatibus asperiores facere modi eos mollitia. Molestiae vitae minima laudantium, sapiente nostrum ipsa, facilis, voluptates perferendis quaerat inventore quidem eligendi. A deserunt culpa necessitatibus aperiam illo commodi, dolorum similique eaque. Distinctio porro officiis ipsa? Laboriosam, alias!",
  clientName: "Client's name",
  sector: "Buildings",
  location: "Muscat, Oman",
  imageSet_1: [
    {
      id: 1,
      image: "/images/project/pj-1.jpg",
      caption: "this is a capption for the image Image",
    },
    { id: 2, image: "/images/project/pj-2.jpg", caption: "" },
  ],
  imageSet_2: [
    { id: 1, image: "/images/project/pj-3.jpg", caption: "" },
    { id: 2, image: "/images/project/pj-4.jpg", caption: "" },
  ],
  wideImage: "/images/project/pj-wide.jpg",
  InlineDescription:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt ratione soluta, accusantium nulla distinctio porro, impedit quidem eius dicta, doloribus aspernatur odio enim. Sed in quia nesciunt hic distinctio animi.",
};

export default function project() {
  return (
    <LayoutWrapper logo={websiteData.logo} navItems={navLinks}>
      <Hero image={projectData.coverImage} />
      <Info projectInfo={projectData} />
      <ImageSet imageSet={projectData.imageSet_1} />
      <InlineDescription inlineDescription={projectData.InlineDescription} />
      <WideImage image={projectData.wideImage} />
      <InlineDescription inlineDescription={projectData.InlineDescription} />
      <ImageSet imageSet={projectData.imageSet_2} />
      <ImageSet imageSet={projectData.imageSet_1} />
      <Contact className={`mt-20`} />
    </LayoutWrapper>
  );
}
