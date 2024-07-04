import Image from "next/image";

export function Sector({ icon, title, text }) {
  return (
    <div className="m-4 max-w-96 text-start">
      <Image
        src={icon}
        alt={title}
        className="mb-4 aspect-square w-16 md:w-20 lg:w-24"
        width={50}
        height={50}
      />
      <p className="text-2xl font-bold mb-2">{title}</p>
      <p>{text}</p>
    </div>
  );
}
