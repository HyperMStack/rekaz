import contact from "./schemas/contact";
import contactInfo from "./schemas/contactInfo";
import footerLink from "./schemas/footerLink";
import footerLinks from "./schemas/footerLinks";
import hero from "./schemas/hero";
import navLink from "./schemas/navLink";
import navLinks from "./schemas/navLinks";
import sectors from "./schemas/sectors";
import siteSettings from "./schemas/siteSettings";
import socialLink from "./schemas/socialLink";
import stat from "./schemas/stat";
import statsSection from "./schemas/statsSection";

export const schema = {
  types: [
    siteSettings,
    hero,
    sectors,
    stat,
    statsSection,
    contactInfo,
    socialLink,
    contact,
    navLink,
    navLinks,
    footerLink,
    footerLinks,
  ],
};
