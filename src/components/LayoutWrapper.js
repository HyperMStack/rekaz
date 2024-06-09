import { Navbar } from "./layout/Navbar";
import { Footer } from "./layout/Footer";
import { useRouter } from "next/router";

export function LayoutWrapper({ children, navItems, logo }) {
  const router = useRouter();
  const direction = router.locale == "ar" ? "rtl" : "ltr";
  return (
    <div className="relative overflow-hidden">
      <Navbar navItems={navItems} logo={logo} direction={direction} />
      {children}
      <Footer />
    </div>
  );
}
