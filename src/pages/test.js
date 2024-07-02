import ParallaxSlider from "@/components/index/ParallaxSlider";

function test() {
  const images = [
    "/images/project2/1.webp",
    "/images/project2/2.webp",
    "/images/project2/3.webp",
    "/images/project2/4.webp",
    "/images/project2/1.webp",
    "/images/project2/2.webp",
  ];
  // const testImages = [
  //   "/test-images/01.jpg",
  //   "/test-images/04.jpg",
  //   "/test-images/02.jpg",
  //   "/test-images/03.jpg",
  // ];
  return <ParallaxSlider images={images} />;
}

export default test;
