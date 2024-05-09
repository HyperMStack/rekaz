import Image from "next/image";
import Link from "next/link";

export function ContactButton({ icon, text, link }) {
  return (
    <Link
      href={link}
      className="inline-flex items-center justify-center ps-0 pe-4 py-2 border-2 border-transparent text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 hover:border-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
    >
      <Image width={24} height={24} src={icon} alt="" />
      <span className="ml-2">{text}</span>
    </Link>
  );
}
