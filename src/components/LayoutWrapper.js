import { Navbar } from "./layout/Navbar";
import { Footer } from "./layout/Footer";
import { useRouter } from "next/router";

export function LayoutWrapper({
  children,
  navItems,
  logo,
  footerLinks,
  websiteName,
  language,
}) {
  const router = useRouter();
  return (
    <div className="relative overflow-hidden">
      <Navbar navItems={navItems} logo={logo} />
      {children}
      <Footer
        footerLinks={footerLinks}
        websiteName={websiteName}
        language={language}
      />
    </div>
  );
}
