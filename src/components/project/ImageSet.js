import Image from "next/image";
import { urlForImage } from "../../../sanity/lib/image";

export default function ImageSet({ imageSet }) {
  const { _type, ...imageSetWithoutType } = imageSet;
  const imagesArray = Object.keys(imageSetWithoutType).map((key) => ({
    key,
    ...imageSetWithoutType[key],
  }));

  return (
    <div className="grid grid-cols-2">
      {imagesArray?.map((image) => (
        <div
          key={image.key}
          className="col-span-2 md:col-span-1 w-11/12 md:w-2/3 mx-auto odd:place-self-start odd:mt-20 md:odd:mt-0 even:place-self-end even:mt-20"
        >
          <Image
            className="!static"
            src={urlForImage(image.image)}
            alt={image.caption ? image.caption : "project"}
            fill
            sizes="(max-width: 1200px) 100vw, (max-width: 768px) 50vw, 33vw"
          />
          {image.caption && (
            <p className="text-start mt-2 text-gray-600">{image.caption}</p>
          )}
        </div>
      ))}
    </div>
  );
}
