import React from "react";
import MemberCard from "./team/MemberCard";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

export default function Team({ data, isRtl }) {
  const options = {
    loop: true,
    slidesToScroll: 1,
    align: "start",
    direction: isRtl ? "rtl" : "ltr",
  };
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [
    Autoplay({ delay: 3000, stopOnFocusIn: false }),
  ]);
  return (
    <div className="mt-8 max-w-[1350px] mx-auto">
      <h1 className="text-center text-4xl font-semibold m-4">{data.title}</h1>
      <p className="text-center text-base my-4">{data.description}</p>
      <section className="">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex -ms-4 [backfaceVisibility:hidden] [touchAction:pan-y_pinch-zoom]">
            {data.members.map((member, index) => (
              <div
                className="[flex:0_0_100%] md:[flex:0_0_50%] lg:[flex:0_0_33%] min-w-0 ps-4 mt-4"
                key={index}
              >
                <MemberCard
                  key={index}
                  image={member.memberImage}
                  name={member.name}
                  title={member.title}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
