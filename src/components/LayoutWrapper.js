import { Navbar } from "./layout/Navbar";
import { Footer } from "./layout/Footer";

export function LayoutWrapper({ children, navItems, logo }) {
  return (
    <div>
      <Navbar navItems={navItems} logo={logo} />
      {children}
      <Footer />
    </div>
  );
}
