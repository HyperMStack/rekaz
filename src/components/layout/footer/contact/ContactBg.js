import Image from "next/image";

export function ContactBg({ bgImage }) {
  return (
    <>
      <Image
        src={bgImage}
        alt="rekaz-contact"
        className="!h-screen w-screen object-cover !static"
        fill
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/25" />
    </>
  );
}
