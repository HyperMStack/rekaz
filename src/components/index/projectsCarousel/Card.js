import Image from "next/image";

export function Card({ projectData }) {
  return (
    <div className="relative hover:cursor-pointer">
      <div className="group overflow-hidden">
        <Image
          src={projectData.coverImage}
          alt={"project1"}
          className="w-auto h-full aspect-3/4 object-cover !static transition-transform duration-300 transform scale-110 hover:scale-100"
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 768px) 50vw, 33vw"
        />
        <div className="absolute bottom-0 -right-1 -translate-y-3/4 flex flex-row bg-white group/card">
          <p className="my-auto font-medium overflow-hidden relative pl-0 left-14 opacity-0 w-0 group-hover/card:pl-4 group-hover/card:opacity-100 group-hover/card:left-0 group-hover/card:w-full transition-all duration-300">
            View Project
          </p>
          <Image
            src="/images/svg/arrow-right.svg"
            alt="view project"
            className="w-[3.75rem] h-[3.75rem] text-black my-auto"
            width={20}
            height={20}
          />
        </div>
      </div>
      <p className="my-4 text-start text-2xl font-semibold">
        {projectData.title}
      </p>
    </div>
  );
}
