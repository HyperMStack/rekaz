import Link from "next/link";
import { DesktopNav } from "./navbar/DesktopNav.js";
import { MobileNav } from "./navbar/MobileNav";
import { useState } from "react";
import Image from "next/image.js";

export const Navbar = ({ navItems, logo, showNav }) => {
  const [isOpen, setIsOpen] = useState(false);
  function toggleCollapse() {
    console.log(isOpen);
    setIsOpen(!isOpen);
  }

  return (
    <div className="absolute top-0 left-0 z-10 w-full">
      <div className="min-h-[60px] py-2 px-4 md:px-40 items-center relative">
        {/* mobileNav */}
        {showNav && (
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
        )}
        <div
          className={`flex flex-1 justify-center ${showNav ? "md:justify-start md:translate-x-0 md:static" : ""} m-auto absolute top-0 left-1/2 -translate-x-1/2`}
        >
          <Link className="flex-1" href="/">
            <Image
              width={showNav ? 240 : 200}
              height={showNav ? 180 : 200}
              src={logo.dark || logo}
              alt="Rekaz-logo"
              style={{ height: `${showNav ? "140px" : "200px"}` }}
              className={`z-10`}
            />
          </Link>
          {showNav && (
            <div className="flex-1 hidden md:flex items-center justify-center">
              <DesktopNav navItems={navItems} />
            </div>
          )}
          {showNav && <div className="hidden md:block flex-1" />}
        </div>
      </div>
      <div>
        {showNav && (
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
        )}
      </div>
    </div>
  );
};
