import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Hero({ title, description }) {
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
      <div className="absolute start-[10%] bottom-[10%] md:start-[8%] md:bottom-[15%] max-w-[1350px] -mt-6 z-20 lg:-mt-20 text-white me-4 md:me-10">
        <h1 className="text-6xl md:text-7xl font-semibold mb-4">{title}</h1>
        <p className="text-base">{description}</p>
        <button className="my-4">
          <Link
            href={`#contact`}
            className={`bg-white text-black rounded-none text-sm px-6 py-2  font-semibold`}
          >
            Contact Us
          </Link>
        </button>
      </div>
    </div>
  );
}
