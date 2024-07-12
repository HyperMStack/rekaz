import Link from "next/link";
import { DesktopNav } from "./navbar/DesktopNav.js";
import { MobileNav } from "./navbar/MobileNav";
import { useEffect, useState } from "react";
import Image from "next/image.js";
import LanguageSwitcher from "./LanguageSwitcher.js";
import { urlForImage } from "../../../sanity/lib/image.js";

export const Navbar = ({ navItems, logo }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`absolute md:fixed top-0 start-0 z-50 w-full`} dir="ltr">
      <div
        className={`flex py-2 items-center justify-around relative w-full m-auto`}
      >
        {/* mobileNav */}
        <div
          className={`flex-1 md:flex-auto -ms-2 flex md:hidden absolute top-[125%] translate-y-1/2 start-[10%] z-10`}
        >
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white hover:bg-transparent active:bg-transparent"
          >
            {isOpen ? (
              <Image
                width={20}
                height={20}
                src="/images/svg/cross.svg"
                alt="exit menu"
              />
            ) : (
              <Image
                width={20}
                height={20}
                src="/images/svg/menu.svg"
                alt="menu"
              />
            )}
          </button>
        </div>
        <div
          className={`md:fixed md:top-0 md:bg-white py-2 mt-0 flex flex-1 mx-auto absolute top-0 w-full md:justify-around`}
          style={{ transition: "background 0.3s ease-in-out" }}
        >
          <Link
            className="flex flex-1 items-center justify-end me-8 mt-2 md:mt-0 md:justify-center"
            href="/"
          >
            <Image
              width={320}
              height={200}
              src={urlForImage(logo)}
              alt="Rekaz-logo"
              className={`z-10 w-48 md:w-52`}
            />
          </Link>
          <div className="grow hidden md:flex items-center justify-center">
            <DesktopNav navItems={navItems} />
          </div>
          <div className="hidden md:flex flex-1 items-center justify-center">
            <LanguageSwitcher />
          </div>
        </div>
      </div>
      <div>
        <div
          className={`mt-10 transition-all duration-300 ease-in-out ${
            isOpen ? "opacity-100" : "opacity-0"
          }`}
          style={{
            maxHeight: isOpen ? "100vh" : "0",
            overflow: "hidden",
          }}
        >
          <MobileNav navItems={navItems} />
        </div>
      </div>
    </div>
  );
};
