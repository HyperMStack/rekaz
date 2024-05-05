import Image from "next/image";
import Link from "next/link";

export function ContactIconButton({ icon, label, link }) {
  return (
    <Link
      href={link}
      aria-label={label}
      target="_blank"
      className="inline-flex items-center justify-center p-2 border-2 border-transparent text-gray-700 bg-white rounded-full hover:border-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
    >
      <Image width={24} height={24} src={icon} alt={label} />
    </Link>
  );
}
