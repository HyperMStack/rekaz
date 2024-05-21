import sectorData from "./schemas/sectorData";
import singleStat from "./schemas/singleStat";
import statsSection from "./schemas/statsSection";
import sectorsSection from "./schemas/sectorsSection";
import heroSection from "./schemas/heroSection";
import homePage from "./schemas/homePage";
import singleImageSet from "./schemas/singleImageSet";
import inlineDescription from "./schemas/inlineDescription";
import sliderImages from "./schemas/sliderImages";
import projectPage from "./schemas/projectPage";
import projectHeroSection from "./schemas/projectHeroSection";
import projectInfo from "./schemas/projectInfo";
import projectImageSet from "./schemas/projectImageSet";

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
  ],
};
