import { urlForImage } from "../../../sanity/lib/image";
import { Sector } from "./sectors/Sector";

export function Sectors({ sectorsData }) {
  const { _type, title, ...sectorsWithoutType } = sectorsData;
  const sectorsArray = Object.keys(sectorsWithoutType).map((key) => ({
    key,
    ...sectorsWithoutType[key],
  }));
  return (
    <div className="my-16 px-4 rounded-lg" id="sectors">
      <h2 className="text-center text-5xl font-bold py-16">{title}</h2>
      <div className="flex flex-wrap md:flex-nowrap justify-center">
        {sectorsArray?.map((sector, i) => (
          <Sector
            icon={urlForImage(sector.image)}
            title={sector.title}
            text={sector.description}
            key={i}
          />
        ))}
      </div>
    </div>
  );
}
