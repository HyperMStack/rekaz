import Link from "next/link";
import { DesktopSubNav } from "./DesktopSubNav";

export function DesktopNav({ navItems }) {
  return (
    <div className="flex gap-4">
      {navItems.map((navItem) => (
        <div key={navItem.title} className="group/navItem py-4 mx-2">
          <div className="relative">
            <Link
              className={`p-2 text-base font-semibold text-[#082833] hover:text-[#3a6776]"`} //! add decoration: none
              href={navItem.link ?? "#"}
            >
              {navItem.title}
            </Link>

            {/* {navItem.children && (
              <div className="top-10 left-0  min-w-80 hidden absolute border-0 shadow-xl bg-white p-4 rounded-xl group-hover/navItem:block">
                <div className="flex flex-col">
                  {navItem.children.map((child) => (
                    <DesktopSubNav key={child.title} {...child} />
                  ))}
                </div>
              </div>
            )} */}
          </div>
        </div>
      ))}
    </div>
  );
}
