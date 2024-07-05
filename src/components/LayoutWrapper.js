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
  color,
}) {
  return (
    <div
      className={`relative overflow-hidden ${color ? "!bg-[#082833] text-white" : ""}`}
    >
      <Navbar navItems={navItems} logo={logo} color={color} />
      {children}
      <Footer
        color={color}
        footerLinks={footerLinks}
        websiteName={websiteName}
        language={language}
      />
    </div>
  );
}
