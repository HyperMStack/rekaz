import { Navbar } from "./layout/Navbar";
import { Footer } from "./layout/Footer";
import { useRouter } from "next/router";

export function LayoutWrapper({ children, navItems, logo }) {
  const router = useRouter();
  return (
    <div className="relative overflow-hidden" dir="ltr">
      <Navbar navItems={navItems} logo={logo} />
      {children}
      <Footer />
    </div>
  );
}
