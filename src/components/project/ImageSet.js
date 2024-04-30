import Image from "next/image";

export default function ImageSet({ imageSet }) {
  return (
    <div className="grid grid-cols-2">
      {imageSet.map((set) => (
        <div
          key={set.id}
          className="col-span-2 md:col-span-1 w-11/12 md:w-2/3 mx-auto odd:place-self-start odd:mt-20 md:odd:mt-0 even:place-self-end even:mt-20"
        >
          <Image
            className="!static"
            src={set.image}
            alt={set.caption ? set.caption : "project"}
            fill
          />
          {set.caption && (
            <p className="text-start mt-2 text-gray-600">{set.caption}</p>
          )}
        </div>
      ))}
    </div>
  );
}
