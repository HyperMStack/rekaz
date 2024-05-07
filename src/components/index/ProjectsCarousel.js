import { useEffect, useRef } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { Card } from "./projectsCarousel/Card";
import Link from "next/link";

export function ProjectsCarousel({ projects }) {
  const options = { loop: true };
  const [emblaRef, emblaApi] = useEmblaCarousel(options);
  // const autoScrollInterval = useRef(null);

  // useEffect(() => {
  //   if (!emblaApi) return;

  //   const startAutoScroll = () => {
  //     autoScrollInterval.current = setInterval(() => {
  //       emblaApi.scrollNext(); // Change to scrollPrev() if you want to scroll in reverse
  //     }, 3500); // Adjust the interval time as needed
  //   };

  //   const stopAutoScroll = () => {
  //     clearInterval(autoScrollInterval.current);
  //   };

  //   emblaApi.on("init", startAutoScroll);
  //   emblaApi.on("destroy", stopAutoScroll);

  //   startAutoScroll();

  //   return () => {
  //     stopAutoScroll();
  //   };
  // }, [emblaApi]);

  return (
    <div className="my-16 container mx-auto">
      <h2 className="text-center text-5xl my-16 font-semibold">
        Our Latest Projects
      </h2>
      <div className="embla overflow-hidden" ref={emblaRef}>
        <div className="embla__container flex -ml-8 px-4">
          {projects.map((project, index) => (
            <div
              key={index}
              className="embla__slide flex-grow-0 flex-shrink-0 w-full md:w-1/2 lg:w-1/3 text-center pl-8"
            >
              <Link href={`/projects/${project.slug}`}>
                <Card projectData={project} />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
