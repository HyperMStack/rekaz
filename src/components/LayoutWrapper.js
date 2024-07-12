import { Navbar } from "./layout/Navbar";
import { Footer } from "./layout/Footer";

export function LayoutWrapper({
  children,
  navItems,
  logo,
  footerLinks,
  websiteName,
  language,
}) {
  return (
    <div className={`relative overflow-hidden`}>
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
