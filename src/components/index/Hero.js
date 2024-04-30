import Link from "next/link";
import { TypingAnimation } from "./hero/TypingAnimation";
import Image from "next/image";

export function Hero({ data }) {
  return (
    <div className="relative">
      <Image
        src={data.image}
        alt={data.buttonText}
        className="!h-screen w-full object-cover !static"
        fill
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-transparent"></div>
      <div className="bottom-[15%] left-[10%] absolute flex flex-col items-start content-center gap-4">
        <b className="text-7xl md:text-8xl text-white"> {data.text}</b>

        <TypingAnimation words={data.typedText} />
        <button className="">
          <Link
            href="/#"
            className="text-black rounded-none px-8 py-3 bg-white font-semibold"
          >
            {data.buttonText}
          </Link>
        </button>
      </div>
    </div>
  );
}
