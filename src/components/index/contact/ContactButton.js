import Image from "next/image";
import Link from "next/link";

export function ContactButton({ icon, text, link, color }) {
  return (
    <Link
      href={link}
      className={`inline-flex items-center justify-center px-4 py-2 border-2 border-transparent text-sm font-medium rounded-md ${color ? "text-white" : "text-gray-700"}  hover:border-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500`}
    >
      <Image width={24} height={24} src={icon} alt="" />
      <span className="mx-3" dir="ltr">
        {text}
      </span>
    </Link>
  );
}
