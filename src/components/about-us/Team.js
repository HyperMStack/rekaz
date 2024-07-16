import React from "react";
import MemberCard from "./team/MemberCard";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

export default function Team() {
  const options = { loop: true, slidesToScroll: 1, align: "start" };
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [
    Autoplay({ delay: 3000, stopOnFocusIn: false }),
  ]);

  return (
    <div className="mt-8 max-w-[1350px] mx-auto">
      <h1 className="text-4xl font-semibold m-4">Meet The Team</h1>
      <p className="text-base m-4">
        At the heart of Rekaz is a dedicated team who ignites innovation and
        embodies the core values that define our company.
      </p>
      <section className="">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex -ms-4 [backfaceVisibility:hidden] [touchAction:pan-y_pinch-zoom]">
            {teamMembers.map((member, index) => (
              <div
                className="[flex:0_0_100%] md:[flex:0_0_50%] lg:[flex:0_0_33%] min-w-0 ps-4 mt-4"
                key={index}
              >
                <MemberCard
                  key={index}
                  image={member.image}
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

const teamMembers = [
  {
    image: "/images/about/team/team-2.jpg",
    name: "عبد العزيز سلطان حارب الغافري",
    title: "مدير تنفيذي",
  },
  {
    image: "/images/about/team/team-1.jpg",
    name: "الحسين بن علي الرمحي",
    title: "مدير تنفيذي",
  },
  {
    image: "/images/about/team/team-3.jpg",
    name: "ممدوح عجان الحديد",
    title: "مدير المشاريع",
  },
  {
    image: "/images/about/team/team-4.jpg",
    name: "مصطفى عجان الحديد",
    title: "المهندس الإنشائي",
  },
  {
    image: "/images/about/team/team-5.jpg",
    name: "أحمد جاسم",
    title: "مهندس ديكور",
  },
  {
    image: "/images/about/team/team-6.jpg",
    name: "محمد حيدر الفرج",
    title: "مدير قسم التصميم",
  },
  {
    image: "/images/about/team/team-7.jpg",
    name: "عادل عجان الحديد",
    title: "مهندس كهرباء وميكانيك",
  },
  {
    image: "/images/about/team/team-8.jpg",
    name: "محمد عجان الحديد",
    title: "المهندس الإنشائي",
  },
];
