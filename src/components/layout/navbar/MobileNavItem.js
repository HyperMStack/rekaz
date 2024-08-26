import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export function MobileNavItem({ title, children, link, openState }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  function handleProfileOpen() {
    document.getElementById("profile").showModal();
    openState(false);
  }

  return (
    <>
      {title === "Company Profile" || "ملف الشركة" ? (
        <button
          onClick={handleProfileOpen}
          className="py-2 flex justify-between items-center"
        >
          <p className="font-semibold text-white">{title}</p>
        </button>
      ) : (
        <button onClick={children && toggleCollapse} className="w-full">
          <Link
            href={link ?? "#"}
            className="py-2 flex justify-between items-center"
          >
            <p className="font-semibold text-white">{title}</p>
            {children && (
              <Image
                width={6}
                height={6}
                src="/images/svg/arrow-down.svg"
                alt="open sub-title"
                className={`text-white w-6 h-6 ${
                  isOpen ? "rotate-180" : ""
                } transition-all duration-200 ease-in-out`}
              />
            )}
          </Link>
        </button>
      )}
    </>
  );
}
