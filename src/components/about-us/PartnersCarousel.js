import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";
import Image from "next/image";
import { urlForImage } from "../../../sanity/lib/image";

export function PartnersCarousel({ partners, isRtl }) {
  const options = {
    loop: true,
    align: "start",
    direction: isRtl ? "rtl" : "ltr",
  };
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [
    AutoScroll({
      playOnInit: true,
      stopOnInteraction: false,
      stopOnFocusIn: false,
    }),
  ]);
  console.log("partners ", partners);

  const slides = [
    { link: "/images/about/partners/github1.png" },
    { link: "/images/about/partners/node2.png" },
    { link: "/images/about/partners/npm1.png" },
    { link: "/images/about/partners/react1.png" },
    { link: "/images/about/partners/github1.png" },
    { link: "/images/about/partners/node2.png" },
    { link: "/images/about/partners/npm1.png" },
    { link: "/images/about/partners/react1.png" },
  ];
  return (
    <>
      <div className="max-w-[1350px] m-auto mt-20">
        <h1 className="text-4xl font-semibold text-center mt-4">
          {partners.title}
        </h1>
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="[backfaceVisibility:hidden] flex [touchAction:pane-y_pinch-zoom] -ms-4">
            {partners.ourPartners.map((partner, index) => (
              <div
                className="[flex:0_0_45%] md:[flex:0_0_35%] lg:[flex:0_0_25%] min-w-0 ps-4"
                key={index}
              >
                <div className="drop-shadow-md flex items-center justify-center mt-12">
                  <Image
                    src={urlForImage(partner.partnerImage)}
                    alt={partner.title}
                    width={175}
                    height={175}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
