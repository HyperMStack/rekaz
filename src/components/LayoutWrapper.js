import { Navbar } from "./layout/Navbar";
import { Footer } from "./layout/Footer";
import Dialog from "./layout/navbar/Dialog";

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
      <Dialog />
      <Footer
        footerLinks={footerLinks}
        websiteName={websiteName}
        language={language}
      />
    </div>
  );
}
