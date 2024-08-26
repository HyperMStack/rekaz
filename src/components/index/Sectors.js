import Image from "next/image";
import { urlForImage } from "../../../sanity/lib/image";
import { Sector } from "./sectors/Sector";

export function Sectors({ sectorsData }) {
  const { _type, title, ...sectorsWithoutType } = sectorsData;
  const sectorsArray = Object.keys(sectorsWithoutType).map((key) => ({
    key,
    ...sectorsWithoutType[key],
  }));
  return (
    <div className={`my-16 px-4 rounded-lg max-w-[1350px] m-auto`} id="sectors">
      <h2 className={`text-center text-4xl font-bold py-16`}>{title}</h2>
      <div
        className="grid grid-cols-1 grid-rows-5 gap-8
          md:grid-cols-6 md:grid-rows-2
          md:[grid-template-areas:'sector1_sector1_sector2_sector2_sector3_sector3''._sector4_sector4_sector5_sector5_.']"
      >
        {/* for regular screens */}
        {sectorsArray?.map((sector, i) => (
          <div
            key={i}
            className={`hidden md:block text-start md:text-center`}
            style={{ gridArea: `sector${i + 1}` }}
          >
            <Image
              src={urlForImage(sector.image)}
              alt={sector.title}
              className="md:m-auto aspect-square w-16 md:w-20 lg:w-24"
              width={50}
              height={50}
            />
            <p className="text-2xl font-bold mb-2">{sector.title}</p>
            <p>{sector.description}</p>
          </div>
        ))}
        {/* for mobile screens */}
        {sectorsArray?.map((sector, i) => (
          <div key={i} className={`md:hidden text-start md:text-center`}>
            <Image
              src={urlForImage(sector.image)}
              alt={sector.title}
              className="md:m-auto aspect-square w-16 md:w-20 lg:w-24"
              width={50}
              height={50}
            />
            <p className="text-2xl font-bold mb-2">{sector.title}</p>
            <p>{sector.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
