import { useEffect } from "react";
import setupEventListeners from "./sliderComponent/main";
import Image from "next/image";
import { useRouter } from "next/router";
import "./sliderComponent/asset";

export default function SliderComponent({ images }) {
  const router = useRouter();
  const direction = router.locale == "ar" ? "rtl" : "ltr";

  useEffect(() => {
    setupEventListeners();
  }, []);
  return (
    <div id="app">
      <style jsx>
        {`
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
          .swiper-pagination {
            position: absolute;
            text-align: center;
            transition: 0.3s opacity;
            transform: translate(0);
            z-index: 10;
          }
          .swiper-pagination.swiper-pagination-hidden {
            opacity: 0;
          }
          .swiper-pagination-disabled > .swiper-pagination,
          .swiper-pagination.swiper-pagination-disabled {
            display: none !important;
          }
          .swiper-pagination-fraction,
          .swiper-pagination-custom,
          .swiper-horizontal > .swiper-pagination-bullets,
          .swiper-pagination-bullets.swiper-pagination-horizontal {
            bottom: var(--swiper-pagination-bottom, 8px);
            top: var(--swiper-pagination-top, auto);
            left: 0;
            width: 100%;
          }
          .swiper-pagination-bullets-dynamic {
            overflow: hidden;
            font-size: 0;
          }
          .swiper-pagination-bullets-dynamic .swiper-pagination-bullet {
            transform: scale(0.33);
            position: relative;
          }
          .swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active {
            transform: scale(1);
          }
          .swiper-pagination-bullets-dynamic
            .swiper-pagination-bullet-active-main {
            transform: scale(1);
          }
          .swiper-pagination-bullets-dynamic
            .swiper-pagination-bullet-active-prev {
            transform: scale(0.66);
          }
          .swiper-pagination-bullets-dynamic
            .swiper-pagination-bullet-active-prev-prev {
            transform: scale(0.33);
          }
          .swiper-pagination-bullets-dynamic
            .swiper-pagination-bullet-active-next {
            transform: scale(0.66);
          }
          .swiper-pagination-bullets-dynamic
            .swiper-pagination-bullet-active-next-next {
            transform: scale(0.33);
          }
          .swiper-pagination-bullet {
            width: var(
              --swiper-pagination-bullet-width,
              var(--swiper-pagination-bullet-size, 8px)
            );
            height: var(
              --swiper-pagination-bullet-height,
              var(--swiper-pagination-bullet-size, 8px)
            );
            display: inline-block;
            border-radius: var(--swiper-pagination-bullet-border-radius, 50%);
            background: var(--swiper-pagination-bullet-inactive-color, #fff);
            opacity: var(--swiper-pagination-bullet-inactive-opacity, 0.2);
          }
          button.swiper-pagination-bullet {
            border: none;
            margin: 0;
            padding: 0;
            box-shadow: none;
            appearance: none;
          }
          .swiper-pagination-clickable .swiper-pagination-bullet {
            cursor: pointer;
          }
          .swiper-pagination-bullet:only-child {
            display: none !important;
          }
          .swiper-pagination-bullet-active {
            opacity: var(--swiper-pagination-bullet-opacity, 1);
            background: var(
              --swiper-pagination-color,
              var(--swiper-theme-color)
            );
          }
          .swiper-vertical > .swiper-pagination-bullets,
          .swiper-pagination-vertical.swiper-pagination-bullets {
            right: var(--swiper-pagination-right, 8px);
            left: var(--swiper-pagination-left, auto);
            top: 50%;
            transform: translateY(-50%);
          }
          .swiper-vertical
            > .swiper-pagination-bullets
            .swiper-pagination-bullet,
          .swiper-pagination-vertical.swiper-pagination-bullets
            .swiper-pagination-bullet {
            margin: var(--swiper-pagination-bullet-vertical-gap, 6px) 0;
            display: block;
          }
          .swiper-vertical
            > .swiper-pagination-bullets.swiper-pagination-bullets-dynamic,
          .swiper-pagination-vertical.swiper-pagination-bullets.swiper-pagination-bullets-dynamic {
            top: 50%;
            transform: translateY(-50%);
            width: 8px;
          }
          .swiper-vertical
            > .swiper-pagination-bullets.swiper-pagination-bullets-dynamic
            .swiper-pagination-bullet,
          .swiper-pagination-vertical.swiper-pagination-bullets.swiper-pagination-bullets-dynamic
            .swiper-pagination-bullet {
            display: inline-block;
            transition:
              0.2s transform,
              0.2s top;
          }
          .swiper-horizontal
            > .swiper-pagination-bullets
            .swiper-pagination-bullet,
          .swiper-pagination-horizontal.swiper-pagination-bullets
            .swiper-pagination-bullet {
            margin: 0 var(--swiper-pagination-bullet-horizontal-gap, 4px);
          }
          .swiper-horizontal
            > .swiper-pagination-bullets.swiper-pagination-bullets-dynamic,
          .swiper-pagination-horizontal.swiper-pagination-bullets.swiper-pagination-bullets-dynamic {
            left: 50%;
            transform: translate(-50%);
            white-space: nowrap;
          }
          .swiper-horizontal
            > .swiper-pagination-bullets.swiper-pagination-bullets-dynamic
            .swiper-pagination-bullet,
          .swiper-pagination-horizontal.swiper-pagination-bullets.swiper-pagination-bullets-dynamic
            .swiper-pagination-bullet {
            transition:
              0.2s transform,
              0.2s left;
          }
          .swiper-horizontal.swiper-rtl
            > .swiper-pagination-bullets-dynamic
            .swiper-pagination-bullet {
            transition:
              0.2s transform,
              0.2s right;
          }
          .swiper-pagination-fraction {
            color: var(--swiper-pagination-fraction-color, inherit);
          }
          .swiper-pagination-progressbar {
            background: var(
              --swiper-pagination-progressbar-bg-color,
              rgba(0, 0, 0, 0.25)
            );
            position: absolute;
          }
          .swiper-pagination-progressbar .swiper-pagination-progressbar-fill {
            background: var(
              --swiper-pagination-color,
              var(--swiper-theme-color)
            );
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            transform: scale(0);
            transform-origin: left top;
          }
          .swiper-rtl
            .swiper-pagination-progressbar
            .swiper-pagination-progressbar-fill {
            transform-origin: right top;
          }
          .swiper-horizontal > .swiper-pagination-progressbar,
          .swiper-pagination-progressbar.swiper-pagination-horizontal,
          .swiper-vertical
            > .swiper-pagination-progressbar.swiper-pagination-progressbar-opposite,
          .swiper-pagination-progressbar.swiper-pagination-vertical.swiper-pagination-progressbar-opposite {
            width: 100%;
            height: var(--swiper-pagination-progressbar-size, 4px);
            left: 0;
            top: 0;
          }
          .swiper-vertical > .swiper-pagination-progressbar,
          .swiper-pagination-progressbar.swiper-pagination-vertical,
          .swiper-horizontal
            > .swiper-pagination-progressbar.swiper-pagination-progressbar-opposite,
          .swiper-pagination-progressbar.swiper-pagination-horizontal.swiper-pagination-progressbar-opposite {
            width: var(--swiper-pagination-progressbar-size, 4px);
            height: 100%;
            left: 0;
            top: 0;
          }
          .swiper-pagination-lock {
            display: none;
          }
          :root {
            --swiper-navigation-size: 44px;
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
          .swiper-virtual .swiper-slide {
            -webkit-backface-visibility: hidden;
            transform: translateZ(0);
          }
          .swiper-virtual.swiper-css-mode .swiper-wrapper:after {
            content: "";
            position: absolute;
            left: 0;
            top: 0;
            pointer-events: none;
          }
          .swiper-virtual.swiper-css-mode.swiper-horizontal
            .swiper-wrapper:after {
            height: 1px;
            width: var(--swiper-virtual-size);
          }
          .swiper-virtual.swiper-css-mode.swiper-vertical
            .swiper-wrapper:after {
            width: 1px;
            height: var(--swiper-virtual-size);
          }
          .swiper-slicer .swiper-slide,
          .swiper-slicer swiper-slide {
            overflow: hidden;
          }
          .swiper-slicer-image,
          .swiper-slicer-image-clones,
          .swiper-slicer-image-clone {
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            pointer-events: none;
          }
          .swiper-slicer-image {
            display: none;
            object-fit: cover;
            object-position: center;
          }
          .swiper-slicer-image-clone {
            overflow: hidden;
            transition-timing-function: cubic-bezier(1, 0, 0.5, 1);
          }
          .swiper-slicer-image-clone .swiper-slicer-image {
            display: block;
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
            --swiper-theme-color: #fff;
          }
          .demo-slide-title {
            font-weight: bold;
            font-size: 58px;
            position: absolute;
            left: 10%;
            right: 10%;
            bottom: 10%;
            z-index: 100;
            transform: translate(0);
          }
        `}
      </style>
      <div className="swiper" dir={direction}>
        <div className="swiper-wrapper">
          {images.map((image, index) => (
            <div className="swiper-slide" key={index}>
              <Image
                className="swiper-slicer-image"
                src={image}
                alt={index}
                width={1920}
                height={1080}
              />
            </div>
          ))}
        </div>
        <div className="swiper-button-next"></div>
        <div className="swiper-button-prev"></div>
      </div>
    </div>
  );
}
