import { LayoutWrapper } from "@/components/LayoutWrapper";
import { navLinks, websiteData } from "@/data/data";
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <LayoutWrapper logo={websiteData.logo} navItems={navLinks}>
          <Main />
          <NextScript />
        </LayoutWrapper>
      </body>
    </Html>
  );
}
