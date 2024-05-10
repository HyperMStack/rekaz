import { Navbar } from "./layout/Navbar";
import { Footer } from "./layout/Footer";

export function LayoutWrapper({ children, navItems, logo, showNav = false }) {
  return (
    <div className="relative overflow-hidden">
      <Navbar navItems={navItems} logo={logo} showNav={showNav} />
      {children}
      <Footer />
    </div>
  );
}
