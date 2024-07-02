import React, { useEffect, useState, useCallback, useRef } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

export default function ParallaxSlider({ images }) {
  const options = {
    axis: "y",
    loop: true,
    align: "center",
    watchDrag: false,
  };
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [
    Autoplay({ delay: 3000, stopOnInteraction: false, stopOnFocusIn: false }),
  ]);

  // const scrollNext = useCallback(() => {
  //   if (emblaApi) emblaApi.scrollNext();
  // }, [emblaApi]);

  // const scrollPrev = useCallback(() => {
  //   if (emblaApi) emblaApi.scrollPrev();
  // }, [emblaApi]);

  const TWEEN_FACTOR_BASE = 0.63;
  const tweenFactor = useRef(0);
  const tweenNodes = useRef([]);

  const setTweenNodes = useCallback((emblaApi) => {
    tweenNodes.current = emblaApi.slideNodes().map((slideNode) => {
      return slideNode.querySelector(".embla__parallax__layer");
    });
  }, []);

  const setTweenFactor = useCallback((emblaApi) => {
    tweenFactor.current = TWEEN_FACTOR_BASE * emblaApi.scrollSnapList().length;
  }, []);

  const tweenParallax = useCallback((emblaApi, eventName) => {
    const engine = emblaApi.internalEngine();
    const scrollProgress = emblaApi.scrollProgress();
    const slidesInView = emblaApi.slidesInView();
    const isScrollEvent = eventName === "scroll";

    emblaApi.scrollSnapList().forEach((scrollSnap, snapIndex) => {
      let diffToTarget = scrollSnap - scrollProgress;
      const slidesInSnap = engine.slideRegistry[snapIndex];

      slidesInSnap.forEach((slideIndex) => {
        if (isScrollEvent && !slidesInView.includes(slideIndex)) return;

        if (engine.options.loop) {
          engine.slideLooper.loopPoints.forEach((loopItem) => {
            const target = loopItem.target();

            if (slideIndex === loopItem.index && target !== 0) {
              const sign = Math.sign(target);

              if (sign === -1) {
                diffToTarget = scrollSnap - (1 + scrollProgress);
              }
              if (sign === 1) {
                diffToTarget = scrollSnap + (1 - scrollProgress);
              }
            }
          });
        }

        const translate = diffToTarget * (-1 * tweenFactor.current) * 100;
        const tweenNode = tweenNodes.current[slideIndex];
        tweenNode.style.transform = `translateY(${translate}%)`;
      });
    });
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    setTweenNodes(emblaApi);
    setTweenFactor(emblaApi);
    tweenParallax(emblaApi);

    emblaApi
      .on("reInit", setTweenNodes)
      .on("reInit", setTweenFactor)
      .on("reInit", tweenParallax)
      .on("scroll", tweenParallax)
      .on("slideFocus", tweenParallax);
  }, [emblaApi, tweenParallax]);

  return (
    <div
      className={`relativ overflow-hidden h-screen w-screen z-0 pointer-events-none`}
    >
      <div className={`overflow-hidden w-full h-full`} ref={emblaRef}>
        <div className={`flex h-full [willChange:transform] flex-col`}>
          {images.map((image, index) => (
            <div
              className={`relative min-w-full h-full box-border`}
              key={index}
            >
              <div className={`h-full overflow-hidden`}>
                <div
                  className={`relativ w-full h-full flex justify-center embla__parallax__layer`}
                >
                  <img
                    src={image}
                    alt={`Slide ${index}`}
                    className={`h-screen w-auto object-cover max-w-none [flex:0_0_100%]`}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* <button
          className={
            "absolute top-1/2 -translate-x-1/2 bg-black/50 text-white border-none p-[10px] cursor-pointer disabled:bg-black/25 disabled:cursor-not-allowed first-of-type:left-[10px] last-of-type:right-[10px]"
          }
          onClick={scrollPrev}
        >
          Prev
        </button>
        <button
          className={
            "absolute top-1/2 -translate-x-1/2 bg-black/50 text-white border-none p-[10px] cursor-pointer disabled:bg-black/25 disabled:cursor-not-allowed first-of-type:left-[10px] last-of-type:right-[10px]"
          }
          onClick={scrollNext}
        >
          Next
        </button> */}
      </div>
    </div>
  );
}
