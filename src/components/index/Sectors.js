import { Sector } from "./sectors/Sector";

export function Sectors({ sectorsData }) {
  return (
    <div className="my-16 px-4 rounded-lg">
      <h2 className="text-center text-5xl font-bold py-16">Our Sectors</h2>
      <div className="flex flex-wrap justify-center">
        {sectorsData.map((sector, i) => (
          <Sector
            icon={sector.icon}
            title={sector.title}
            text={sector.text}
            key={i}
          />
        ))}
      </div>
    </div>
  );
}
