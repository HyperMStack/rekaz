import Slideshow from "@/components/index/hero/Slideshow";

function test() {
  const images = [
    "/images/project2/1.webp",
    "/images/project2/2.webp",
    "/images/project2/3.webp",
    "/images/project2/4.webp",
    "/images/project2/1.webp",
  ];
  return (
    <div className="h-screen">
      <Slideshow images={images} />
    </div>
  );
}

export default test;
