import { Navbar } from "./layout/Navbar";
import { Footer } from "./layout/Footer";
import Dialog from "./layout/navbar/Dialog";
import MobileDialog from "./layout/navbar/MobileDialog";

export function LayoutWrapper({
  children,
  navItems,
  logo,
  footerLinks,
  websiteName,
  language,
  pdfFile,
}) {
  return (
    <div className={`relative overflow-hidden`}>
      <Navbar navItems={navItems} logo={logo} />
      {children}
      <Dialog file={pdfFile} />
      <MobileDialog file={pdfFile} />
      <Footer
        footerLinks={footerLinks}
        websiteName={websiteName}
        language={language}
      />
    </div>
  );
}
