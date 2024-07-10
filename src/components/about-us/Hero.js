import Image from "next/image";
import React from "react";

export default function Hero() {
  return (
    <div className="relative mb-10">
      <div className="relative">
        <Image
          src={`/images/about/about-us.jpg`}
          alt="Hero Image"
          className="h-[50vh] w-auto object-cover object-right"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-black/30" />
      </div>
      <h1 className="text-4xl font-semibold m-4">About us</h1>
      <p className="text-base m-4">
        Rekaz Construction is a growing team working in your community to Build
        Together.
      </p>
    </div>
  );
}
