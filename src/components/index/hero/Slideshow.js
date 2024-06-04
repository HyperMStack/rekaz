import React, { useEffect } from "react";
import setupEventListeners from "./slideshowAssets/main";
import Image from "next/image";
import { useRouter } from "next/router";

export default function Slideshow({ images }) {
  const router = useRouter();
  const direction = router.locale == "ar" ? "rtl" : "ltr";
  useEffect(() => {
    setupEventListeners("polygons-fall");
  }, []);

  useEffect(() => {
    const handleClickWithDelay = () => {
      setTimeout(() => {
        document.querySelector(".swiper-button-next").click();
      }, 1000);
    };

    const intervalId = setInterval(handleClickWithDelay, 4000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <style jsx>{`
        .swiper {
          margin-left: auto;
          margin-right: auto;
          position: relative;
          overflow: hidden;
          list-style: none;
          padding: 0;
          z-index: 1;
          display: block;
        }
        .swiper-vertical > .swiper-wrapper {
          flex-direction: column;
        }
        .swiper-wrapper {
          position: relative;
          width: 100%;
          height: 100%;
          z-index: 1;
          display: flex;
          transition-property: transform;
          transition-timing-function: var(
            --swiper-wrapper-transition-timing-function,
            initial
          );
          box-sizing: content-box;
        }
        .swiper-android .swiper-slide,
        .swiper-ios .swiper-slide,
        .swiper-wrapper {
          transform: translate(0);
        }
        .swiper-horizontal {
          touch-action: pan-y;
        }
        .swiper-vertical {
          touch-action: pan-x;
        }
        .swiper-slide {
          flex-shrink: 0;
          width: 100%;
          height: 100%;
          position: relative;
          transition-property: transform;
          display: block;
        }
        .swiper-slide-invisible-blank {
          visibility: hidden;
        }
        .swiper-autoheight,
        .swiper-autoheight .swiper-slide {
          height: auto;
        }
        .swiper-autoheight .swiper-wrapper {
          align-items: flex-start;
          transition-property: transform, height;
        }
        .swiper-backface-hidden .swiper-slide {
          transform: translateZ(0);
          backface-visibility: hidden;
        }
        .swiper-3d.swiper-css-mode .swiper-wrapper {
          perspective: 1200px;
        }
        .swiper-3d .swiper-wrapper {
          transform-style: preserve-3d;
        }
        .swiper-3d {
          perspective: 1200px;
        }
        .swiper-3d .swiper-slide,
        .swiper-3d .swiper-cube-shadow {
          transform-style: preserve-3d;
        }
        .swiper-css-mode > .swiper-wrapper {
          overflow: auto;
          scrollbar-width: none;
          -ms-overflow-style: none;
        }
        .swiper-css-mode > .swiper-wrapper::-webkit-scrollbar {
          display: none;
        }
        .swiper-css-mode > .swiper-wrapper > .swiper-slide {
          scroll-snap-align: start start;
        }
        .swiper-css-mode.swiper-horizontal > .swiper-wrapper {
          scroll-snap-type: x mandatory;
        }
        .swiper-css-mode.swiper-vertical > .swiper-wrapper {
          scroll-snap-type: y mandatory;
        }
        .swiper-css-mode.swiper-free-mode > .swiper-wrapper {
          scroll-snap-type: none;
        }
        .swiper-css-mode.swiper-free-mode > .swiper-wrapper > .swiper-slide {
          scroll-snap-align: none;
        }
        .swiper-css-mode.swiper-centered > .swiper-wrapper:before {
          content: "";
          flex-shrink: 0;
          order: 9999;
        }
        .swiper-css-mode.swiper-centered > .swiper-wrapper > .swiper-slide {
          scroll-snap-align: center center;
          scroll-snap-stop: always;
        }
        .swiper-css-mode.swiper-centered.swiper-horizontal
          > .swiper-wrapper
          > .swiper-slide:first-child {
          margin-inline-start: var(--swiper-centered-offset-before);
        }
        .swiper-css-mode.swiper-centered.swiper-horizontal
          > .swiper-wrapper:before {
          height: 100%;
          min-height: 1px;
          width: var(--swiper-centered-offset-after);
        }
        .swiper-css-mode.swiper-centered.swiper-vertical
          > .swiper-wrapper
          > .swiper-slide:first-child {
          margin-block-start: var(--swiper-centered-offset-before);
        }
        .swiper-css-mode.swiper-centered.swiper-vertical
          > .swiper-wrapper:before {
          width: 100%;
          min-width: 1px;
          height: var(--swiper-centered-offset-after);
        }
        .swiper-3d .swiper-slide-shadow,
        .swiper-3d .swiper-slide-shadow-left,
        .swiper-3d .swiper-slide-shadow-right,
        .swiper-3d .swiper-slide-shadow-top,
        .swiper-3d .swiper-slide-shadow-bottom,
        .swiper-3d .swiper-slide-shadow,
        .swiper-3d .swiper-slide-shadow-left,
        .swiper-3d .swiper-slide-shadow-right,
        .swiper-3d .swiper-slide-shadow-top,
        .swiper-3d .swiper-slide-shadow-bottom {
          position: absolute;
          left: 0;
          top: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: 10;
        }
        .swiper-3d .swiper-slide-shadow {
          background: rgba(0, 0, 0, 0.15);
        }
        .swiper-3d .swiper-slide-shadow-left {
          background-image: linear-gradient(
            to left,
            rgba(0, 0, 0, 0.5),
            rgba(0, 0, 0, 0)
          );
        }
        .swiper-3d .swiper-slide-shadow-right {
          background-image: linear-gradient(
            to right,
            rgba(0, 0, 0, 0.5),
            rgba(0, 0, 0, 0)
          );
        }
        .swiper-3d .swiper-slide-shadow-top {
          background-image: linear-gradient(
            to top,
            rgba(0, 0, 0, 0.5),
            rgba(0, 0, 0, 0)
          );
        }
        .swiper-3d .swiper-slide-shadow-bottom {
          background-image: linear-gradient(
            to bottom,
            rgba(0, 0, 0, 0.5),
            rgba(0, 0, 0, 0)
          );
        }
        .swiper-lazy-preloader {
          width: 42px;
          height: 42px;
          position: absolute;
          left: 50%;
          top: 50%;
          margin-left: -21px;
          margin-top: -21px;
          z-index: 10;
          transform-origin: 50%;
          box-sizing: border-box;
          border: 4px solid
            var(--swiper-preloader-color, var(--swiper-theme-color));
          border-radius: 50%;
          border-top-color: transparent;
        }
        .swiper:not(.swiper-watch-progress) .swiper-lazy-preloader,
        .swiper-watch-progress .swiper-slide-visible .swiper-lazy-preloader {
          animation: swiper-preloader-spin 1s infinite linear;
        }
        .swiper-lazy-preloader-white {
          --swiper-preloader-color: #fff;
        }
        .swiper-lazy-preloader-black {
          --swiper-preloader-color: #000;
        }
        @keyframes swiper-preloader-spin {
          0% {
            transform: rotate(0);
          }
          to {
            transform: rotate(360deg);
          }
        }
        .swiper-button-prev,
        .swiper-button-next {
          position: absolute;
          top: var(--swiper-navigation-top-offset, 50%);
          width: calc(var(--swiper-navigation-size) / 44 * 27);
          height: var(--swiper-navigation-size);
          margin-top: calc(0px - var(--swiper-navigation-size) / 2);
          z-index: 10;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--swiper-navigation-color, var(--swiper-theme-color));
        }
        .swiper-button-prev.swiper-button-disabled,
        .swiper-button-next.swiper-button-disabled {
          opacity: 0.35;
          cursor: auto;
          pointer-events: none;
        }
        .swiper-button-prev.swiper-button-hidden,
        .swiper-button-next.swiper-button-hidden {
          opacity: 0;
          cursor: auto;
          pointer-events: none;
        }
        .swiper-navigation-disabled .swiper-button-prev,
        .swiper-navigation-disabled .swiper-button-next {
          display: none !important;
        }
        .swiper-button-prev svg,
        .swiper-button-next svg {
          width: 100%;
          height: 100%;
          object-fit: contain;
          transform-origin: center;
        }
        .swiper-rtl .swiper-button-prev svg,
        .swiper-rtl .swiper-button-next svg {
          transform: rotate(180deg);
        }
        .swiper-button-prev,
        .swiper-rtl .swiper-button-next {
          left: var(--swiper-navigation-sides-offset, 10px);
          right: auto;
        }
        .swiper-button-lock {
          display: none;
        }
        .swiper-button-prev:after,
        .swiper-button-next:after {
          font-family: swiper-icons;
          font-size: var(--swiper-navigation-size);
          text-transform: none !important;
          letter-spacing: 0;
          font-variant: initial;
          line-height: 1;
        }
        .swiper-button-prev:after,
        .swiper-rtl .swiper-button-next:after {
          content: "prev";
        }
        .swiper-button-next,
        .swiper-rtl .swiper-button-prev {
          right: var(--swiper-navigation-sides-offset, 10px);
          left: auto;
        }
        .swiper-button-next:after,
        .swiper-rtl .swiper-button-prev:after {
          content: "next";
        }

        #app {
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .swiper {
          width: 100%;
          height: 100%;
        }
        .swiper-slide-content {
          position: absolute;
          left: 32px;
          bottom: 32px;
          max-width: calc(100% - 64px);
        }
        .swiper-slide-title {
          font-size: 32px;
          font-weight: bold;
          line-height: 1.25;
          text-shadow: 0px 0px 5px rgba(0, 0, 0, 0.25);
        }
        .demo-shader-picker {
          position: absolute;
          right: 8px;
          top: 8px;
          z-index: 100;
          cursor: pointer;
        }
        .demo-shader-selector {
          display: flex;
          align-items: center;
          color: #0080ff;
          background: rgb(40, 40, 40);
          padding: 8px 16px;
          border-radius: 4px;
          font-size: 14px;
          font-weight: 500;
        }
        .demo-shader-selector span {
          color: #fff;
          margin-right: 4px;
        }
        .demo-shader-selector svg {
          width: 12px;
          height: 12px;
          position: relative;
          top: 1px;
          margin-left: 2px;
        }
        .demo-shader-selector:hover {
          background: rgb(45, 45, 45);
        }
        .demo-shader-current {
          font-family: Monaco, Menlo, monospace;
        }
        .demo-shader-options {
          position: absolute;
          text-align: right;
          right: 8px;
          top: 8px;
          background: rgb(50, 50, 50);
          border-radius: 4px;
          display: none;
          white-space: nowrap;
          line-height: 1;
          font-weight: 500;
          font-size: 14px;
          font-family: Monaco, Menlo, monospace;
        }
        .demo-shader-options span {
          display: block;
          padding: 8px 16px;
        }
        .demo-shader-options span + span {
          border-top: 1px solid rgba(255, 255, 255, 0.1);
        }
        .demo-shader-options span:hover {
          background: rgba(255, 255, 255, 0.05);
          color: #0080ff;
        }
        .swiper-gl {
          position: relative;
          margin: 0 auto;
          max-width: 100%;
          overflow: hidden;
        }
        .swiper-gl .swiper-slide,
        .swiper-gl swiper-slide {
          position: relative;
        }
        .swiper-gl .swiper-gl-image {
          display: none;
        }
        .swiper-gl > canvas {
          position: absolute;
          left: 0;
          top: 0;
          width: 100%;
          height: 100%;
        }
        .swiper-gl-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          position: absolute;
          left: 0;
          top: 0;
        }
      `}</style>
      <div className="!h-screen w-full object-cover !static">
        {/* prettier-ignore */}
        <div dir={direction} className={`swiper`}>
        <div className={`swiper-wrapper`}>
          {images.map((image, index) => (
            <div className={`swiper-slide`} key={index}>
              <Image
                className={`swiper-gl-image`}
                src={image}
                alt={index}
                width={1920}
                height={1080}
              />
            </div>
          ))}
        </div>
        <div className={`swiper-button-next !hidden`}></div>
      </div>
      </div>
    </>
  );
}
