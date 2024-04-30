import Image from "next/image";
import Link from "next/link";

export function DesktopSubNav({ label, href, subLabel }) {
  return (
    <Link
      className="block p-2 rounded-md hover:bg-orange-50 group/subItem"
      href={href}
    >
      <div className="flex items-center">
        <div>
          <p className="transition-all duration-300 ease-in-out font-medium group-hover/subItem:text-orange-400">
            {label}
          </p>
          <p className="text-sm">{subLabel}</p>
        </div>
        <div className="transition-all duration-300 ease-in-out -translate-x-[10%] opacity-0 group-hover/subItem:opacity-100 group-hover/subItem:translate-x-0 justify-end items-center flex flex-1">
          <Image
            src="/images/svg/arrow-right.svg"
            alt="go to link"
            className=" w-5 h-5"
            width={20}
            height={20}
          />
        </div>
      </div>
    </Link>
  );
}
