import Link from "next/link";
import { TypingAnimation } from "./hero/TypingAnimation";
import Image from "next/image";
import { urlForImage } from "../../../sanity/lib/image";
import FadingWords from "./hero/FadingWords";
import { useRouter } from "next/router";

export function Hero({ data }) {
  const router = useRouter();

  return (
    <div className="relative">
      <Image
        src={urlForImage(data.bgImage)}
        alt={data.buttonText}
        className="!h-screen w-full object-cover !static"
        fill
      />
      <div
        className={`absolute inset-0 bg-gradient-to-b from-[#062c3b] via-transparent to-transparent`}
      ></div>
      <div className="bottom-[20%] start-[10%] absolute flex flex-col items-start content-center gap-4 leading-8">
        <b className="text-6xl md:text-8xl text-white"> {data.title}</b>
        {router.locale == "ar" ? (
          <FadingWords words={data.changingWords} />
        ) : (
          <TypingAnimation words={data.changingWords} />
        )}
        <button className="my-4">
          <Link
            href={`/${data.buttonLink}`}
            className="text-black rounded-none px-8 py-3 bg-white font-semibold"
          >
            {data.buttonText}
          </Link>
        </button>
      </div>
    </div>
  );
}
