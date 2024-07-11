import Link from "next/link";
import { TypingAnimation } from "./hero/TypingAnimation";
import FadingWords from "./hero/FadingWords";
import { useRouter } from "next/router";
import ParallaxSlider from "./ParallaxSlider";

export function Hero({ data, color }) {
  const router = useRouter();

  return (
    <div className="relative">
      <div className="flex items-center justify-center overflow-hidden">
        <ParallaxSlider images={data.sliderImages} />
      </div>

      <div className="bottom-[20%] start-[10%] absolute flex flex-col items-start content-center gap-4 leading-8 z-10">
        <b
          className={`text-6xl md:text-7xl ${color == "black" ? "text-[#082833]" : "text-white"}`}
        >
          {" "}
          {data.title}
        </b>
        {router.locale == "ar" ? (
          <FadingWords color={color} words={data.changingWords} />
        ) : (
          <TypingAnimation color={color} words={data.changingWords} />
        )}
        <button className="my-4">
          <Link
            href={`/${data.buttonLink}`}
            className={`bg-white rounded-none text-sm px-6 py-2  font-semibold`}
          >
            {data.buttonText}
          </Link>
        </button>
      </div>
    </div>
  );
}
