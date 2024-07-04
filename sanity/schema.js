import sectorData from "./schemas/homePage/sectorSection/sectorData";
import singleStat from "./schemas/homePage/statsSection/singleStat";
import statsSection from "./schemas/homePage/statsSection";
import sectorsSection from "./schemas/homePage/sectorsSection";
import heroSection from "./schemas/homePage/heroSection";
import homePage from "./schemas/homePage";
import singleImageSet from "./schemas/projectPage/projectImageSet/singleImageSet";
import inlineDescription from "./schemas/projectPage/inlineDescription";
import sliderImages from "./schemas/projectPage/sliderImages";
import projectPage from "./schemas/projectPage";
import projectHeroSection from "./schemas/projectPage/projectHeroSection";
import projectInfo from "./schemas/projectPage/projectInfo";
import projectImageSet from "./schemas/projectPage/projectImageSet";
import navLink from "./schemas/navLinks/navLink";
import navLinks from "./schemas/navLinks";
import footerLink from "./schemas/footerLinks/footerLink";
import footerLinks from "./schemas/footerLinks";
import settings from "./schemas/settings";
import contactInfoRecord from "./schemas/contact/contactInfo/contactInfoRecord";
import contactInfo from "./schemas/contact/contactInfo";
import socialLinksRecord from "./schemas/contact/socialLinks/socialLinksRecord";
import socialLinks from "./schemas/contact/socialLinks";
import contact from "./schemas/contact";
import termsOfService from "./schemas/termsOfService";
import privacyPolicy from "./schemas/privacyPolicy";

export const schema = {
  types: [
    heroSection,
    sectorData,
    sectorsSection,
    singleStat,
    statsSection,
    homePage,
    projectHeroSection,
    projectInfo,
    singleImageSet,
    projectImageSet,
    inlineDescription,
    sliderImages,
    projectPage,
    navLink,
    navLinks,
    footerLink,
    footerLinks,
    settings,
    contactInfoRecord,
    contactInfo,
    socialLinksRecord,
    socialLinks,
    contact,
    termsOfService,
    privacyPolicy,
  ],
};
