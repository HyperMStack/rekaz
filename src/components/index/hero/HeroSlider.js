import Image from "next/image";
import { useState } from "react";
import Swiper from "react-id-swiper";
import "swiper/css/swiper.css";
import { urlForImage } from "../../../../sanity/lib/image";

export default function HeroSlider({ images }) {
  //slider config options
  const HeroSliderConfigs = {
    containerClass: "swiper-container hero-slider",
    parallax: true,
    direction: "vertical",
    loop: true,
    centeredSlides: true,
    speed: 1000,
    spaceBetween: 0,
    effect: "slide",
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
    allowTouchMove: false,
  };

  const [parallaxSwiper, setParallaxSwiper] = useState(null);
  const parallaxAmount = parallaxSwiper ? parallaxSwiper.width * 0.95 - 200 : 0;

  return (
    <Swiper {...HeroSliderConfigs} getSwiper={setParallaxSwiper}>
      {images.map((image, index) => (
        <div className="h-screen flex relative overflow-hidden" key={index}>
          <div
            className="h-full opacity-100 inset-0 absolute m-auto flex justify-center items-center"
            data-swiper-parallax={parallaxAmount}
          >
            {/* <img src={urlForImage(image)} alt={"slide " + index} /> */}
            <Image
              src={urlForImage(image)}
              alt={`Slide ${index}`}
              className={`h-screen w-auto object-cover max-w-none [flex:0_0_100%]`}
              width={1920}
              height={1080}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 1920px"
            />
          </div>
        </div>
      ))}
    </Swiper>
  );
}
