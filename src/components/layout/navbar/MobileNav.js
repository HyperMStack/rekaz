import LanguageSwitcher from "../LanguageSwitcher";
import { MobileNavItem } from "./MobileNavItem";

export function MobileNav({ navItems, openState }) {
  return (
    <div className="bg-black/50 backdrop-blur-sm p-4 mx-4 mt-6 rounded-md md:hidden ease-linear flex flex-col">
      {navItems.map((navItem) => (
        <MobileNavItem key={navItem.title} {...navItem} openState={openState} />
      ))}
      <LanguageSwitcher />
    </div>
  );
}
