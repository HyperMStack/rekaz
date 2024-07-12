import Image from "next/image";
import React from "react";

export default function Hero() {
  return (
    <div className="h-dvh relative mb-10">
      <Image
        src={`/images/about/about-us.jpg`}
        alt="Hero Image"
        className="absolute inset-0 object-cover object-right h-full"
        width={1920}
        height={1080}
      />
      <div className="absolute inset-0 bg-black/30" />
      <div className="absolute bottom-[15%] max-w-[1350px] mx-auto -mt-6 z-20 lg:-mt-20 text-white">
        <h1 className="text-6xl md:text-7xl font-semibold m-4">About us</h1>
        <p className="text-base m-4">
          Rekaz Construction is a growing team working in your community to
          Build Together.
        </p>
      </div>
    </div>
  );
}
