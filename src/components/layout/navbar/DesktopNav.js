import Link from "next/link";
// import { DesktopSubNav } from "./DesktopSubNav";
import { useRouter } from "next/router";

export function DesktopNav({ navItems }) {
  const router = useRouter();
  function handleProfileOpen() {
    document.getElementById("profile").showModal();
  }

  return (
    <div className="flex">
      {navItems.map((navItem) => (
        <div key={navItem.title} className="group/navItem py-4 mx-2">
          <div className="relative">
            {navItem.title == "Company Profile" ? (
              <button
                className={`text-sm font-semibold hover:text-[#3a6776]`}
                onClick={
                  navItem.title == "Company Profile" ? handleProfileOpen : null
                }
              >
                {navItem.title}
              </button>
            ) : (
              <Link
                className={`p-2 text-sm font-semibold ${router.pathname == navItem.link ? "text-[#3a6776]" : "text-[#082833]"} hover:text-[#3a6776]`}
                href={navItem.link}
              >
                {navItem.title}
              </Link>
            )}

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
