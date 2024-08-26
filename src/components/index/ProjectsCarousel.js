import { useEffect, useRef } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { Card } from "./projectsCarousel/Card";
import Link from "next/link";
import { useRouter } from "next/router";

export function ProjectsCarousel({ projects }) {
  const router = useRouter();
  const language = router.locale;

  const options = {
    loop: true,
    direction: language === "ar" ? "rtl" : "ltr",
    align: "center",
  };
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [
    Autoplay({ delay: 3500, stopOnInteraction: false, stopOnFocusIn: false }),
  ]);

  return (
    <div className="my-16 container mx-auto" id="projects">
      <h2 className="text-center text-4xl my-16 font-semibold">
        {language == "ar" ? "آخر المشاريع" : "Our Latest Projects"}
      </h2>
      <div className="embla overflow-hidden" ref={emblaRef}>
        <div className="embla__container flex -ms-8 px-4">
          {projects.map((project, index) => (
            <div
              key={index}
              className="embla__slide flex-grow-0 flex-shrink-0 w-full md:w-1/2 lg:w-1/3 text-center ps-20 pe-8"
            >
              <Link href={`/projects/${project.slug.current}`}>
                <Card projectData={project} language={language} />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
