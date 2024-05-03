import Link from "next/link";
import { footerLinks, websiteData } from "../../data/data";

export function Footer() {
  return (
    <footer className="text-black lg:text-white text-sm font-semibold relative my-auto mt-24 lg:-mt-14 mx-4">
      <div className="container mx-auto flex flex-col lg:flex-row items-center">
        <p className="text-center lg:text-left text-sm w-full">
          &copy; 2023{" "}
          <Link href="/" className="hover:underline">
            {websiteData.websiteName}
          </Link>
          . All rights reserved.
        </p>
        <div className="w-full flex flex-wrap gap-4 justify-center lg:justify-end my-4">
          {footerLinks.map((link) => (
            <div key={link.id} className="w-auto">
              <Link href={link.href} className="hover:underline">
                {link.label}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
}
