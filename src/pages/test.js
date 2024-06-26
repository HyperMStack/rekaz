import { LayoutWrapper } from "@/components/LayoutWrapper";
import FullScreenCarousel from "@/components/test/FullScreenCarousel";
import SliderComponent from "@/components/test/SliderComponent";
import { navLinks, websiteData } from "@/data/data";

function test() {
  const images = [
    "/images/project2/1.webp",
    "/images/project2/2.webp",
    "/images/project2/3.webp",
    "/images/project2/4.webp",
    "/images/project2/1.webp",
    "/images/project2/2.webp",
  ];
  const testImages = [
    "/test-images/01.jpg",
    "/test-images/04.jpg",
    "/test-images/02.jpg",
    "/test-images/03.jpg",
  ];
  return (
    <LayoutWrapper
      logo={websiteData.logo.hor}
      navItems={navLinks}
      showNav={false}
    >
      <div className="flex items-center justify-center overflow-hidden">
        <FullScreenCarousel images={images} />
      </div>
    </LayoutWrapper>
  );
}

export default test;
