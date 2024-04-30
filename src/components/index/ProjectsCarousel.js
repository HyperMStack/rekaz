import useEmblaCarousel from "embla-carousel-react";
import { Card } from "./projectsCarousel/Card";

export function ProjectsCarousel({ projects }) {
  const [emblaRef] = useEmblaCarousel();
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
              <Card projectData={project} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
