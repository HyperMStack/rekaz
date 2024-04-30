import Link from "next/link";
import { DesktopNav } from "./navbar/DesktopNav.js";
import { MobileNav } from "./navbar/MobileNav";
import { useState } from "react";
import Image from "next/image.js";

export const Navbar = ({ navItems, logo }) => {
  const [isOpen, setIsOpen] = useState(true);
  function toggleCollapse() {
    console.log(isOpen);
    setIsOpen(!isOpen);
  }

  return (
    <div className="absolute top-0 left-0 z-10 w-full">
      <div className="min-h-[60px] py-2 px-4 md:px-40 items-center relative">
        <div className="flex-1 md:flex-auto -ml-2 flex md:hidden absolute top-3/4 translate-y-1/2 left-[10%]">
          <button
            onClick={toggleCollapse}
            className="text-white hover:bg-transparent active:bg-transparent"
          >
            {isOpen ? (
              <Image
                width={20}
                height={20}
                src="/images/svg/cross.svg"
                alt="exit menu"
                className="text-white"
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
        <div className="flex flex-1 justify-center md:justify-start m-auto absolute md:static top-0 left-1/2 -translate-x-1/2 md:translate-x-0">
          <Link className="flex-1" href="/">
            <Image
              width={140}
              height={140}
              src={logo.dark}
              alt="Rekaz-logo"
              className="h-[140px] z-10"
            />
          </Link>
          <div className="flex-1 hidden md:flex items-center justify-center">
            <DesktopNav navItems={navItems} />
          </div>
          <div className="hidden md:block flex-1" />
        </div>
      </div>
      <div>
        <div
          className={`transition-all duration-300 ease-in-out ${
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
