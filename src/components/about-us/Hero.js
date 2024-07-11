import Image from "next/image";
import React from "react";

export default function Hero() {
  return (
    <div className="mb-10">
      <div className="relative h-[50vh] lg:h-[90vh] w-full overflow-hidden">
        <Image
          src={`/images/about/about-us.jpg`}
          alt="Hero Image"
          className="absolute inset-0 object-cover object-right h-full"
          width={1920}
          height={1080}
        />
        <Image
          src={`/images/svg/wave.svg`}
          alt="Hero Image"
          className="absolute -bottom-1 object-bottom"
          width={1920}
          height={1080}
        />
        {/* <div className="absolute inset-0 bg-black/30" /> */}
      </div>
      <div className="relative max-w-[1350px] mx-auto -mt-6 z-20 lg:-mt-20">
        <h1 className="text-4xl font-semibold m-4">About us</h1>
        <p className="text-base m-4">
          Rekaz Construction is a growing team working in your community to
          Build Together.
        </p>
      </div>
    </div>
  );
}
