import { urlForImage } from "../../../sanity/lib/image";

export function Hero({ image }) {
  return (
    <>
      <div
        className="w-full h-128 md:h-172 lg:h-196 bg-no-repeat bg-cover relative bg-center"
        style={{
          backgroundImage: `url(${urlForImage(image)})`,
        }}
      >
        {/* <div className="absolute inset-0 bg-gradient-to-b from-[#062c3b] via-transparent to-transparent"></div> */}
      </div>
    </>
  );
}
