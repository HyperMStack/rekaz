export const websiteData = {
  websiteName: "Rekaz Construction",
  websiteDescription:
    "Rekaz Construction is a construction company based in Muscat, Oman.",
  logo: { light: "/logo_light.png", dark: "/logo_dark.png" },
};
export const colors = {
  primary: "#08394D",
  secondary: "#E0B87C",
  strokes: "#E7E9EA",
};

export const contactInfo = [
  {
    id: 1,
    text: "+968-9836 6664",
    icon: "/images/svg/phone.svg",
    link: "tel:+968-98366664",
  },
  {
    id: 2,
    text: "+968-9396 6662",
    icon: "/images/svg/phone.svg",
    link: "tel:+968-93966662",
  },
  {
    id: 3,
    text: "info@mail.com",
    icon: "/images/svg/email.svg",
    link: "mailto:info@mail.com",
  },
  {
    id: 4,
    text: "Sultanate of Oman, Muscat-Salalah",
    icon: "/images/svg/location.svg",
    link: "#",
  },
];

export const socialLinks = [
  {
    id: 1,
    text: "whatsapp",
    icon: "/images/svg/whatsapp.svg",
    link: "https://wa.me/+96893966662",
  },
  {
    id: 2,
    text: "instagram",
    icon: "/images/svg/instagram.svg",
    link: "https://www.instagram.com/rekaz.construction?igsh=a3Q0ZmdoNGhsZ3lw",
  },
];

export const statsData = [
  { goal: 100, text: "Employees Owned", symbol: "%" },
  {
    goal: 30,
    text: "Over 30 Project in various industries",
    symbol: "",
  },
  { goal: 10, text: "With Nearly 10 Years in Buisness", symbol: "" },
];

export const navLinks = [
  { id: 1, label: "Home", href: "/" },
  {
    id: 2,
    label: "Our Projects",
    children: [
      {
        label: "Explore Design Work",
        subLabel: "Trending Design to inspire you",
        href: "#",
      },
      {
        label: "New & Noteworthy",
        subLabel: "Up-and-coming Designers",
        href: "#",
      },
    ],
  },
  // { id: 3, label: "Services", href: "/services" },
  { id: 4, label: "Contact", href: "/contact" },
];

export const footerLinks = [
  { id: 1, label: "Latest Projects", href: "#" },
  { id: 2, label: "Privacy Policy", href: "#" },
  { id: 3, label: "Terms of Service", href: "#" },
  { id: 4, label: "Contact", href: "#" },
];

export const heroData = {
  image: "/images/124_1.webp",
  text: "Build. Invest.",
  typedText: ["Suceed.", "Innovate."],
  buttonText: "Contact Us",
};

export const projects = [
  {
    coverImage: "/images/project1/1.webp",
    title: "Project Title",
    slug: "project-title",
    keywords: "",

    description:
      "Embark on a modern construction venture with a two-floor structure on a spacious plot spanning 3646 square meters. Embrace innovation and functionality as we craft a dynamic space tailored to your needs. From efficient layout designs to meticulous attention to detail, our project promises to deliver a harmonious blend of form and function, setting new standards in contemporary living.",
    floorNr: "2",
    areaSize: "3646",
    location: "Imti",
    imageSet_1: [
      {
        id: 1,
        image: "/images/project1/2.webp",
        caption: "this is a capption for the image Image",
      },
      { id: 2, image: "/images/project1/3.webp", caption: "" },
    ],
    imageSet_2: [
      { id: 1, image: "/images/project1/4.webp", caption: "" },
      { id: 2, image: "/images/project1/5.webp", caption: "" },
    ],
    sliderImages: [
      { id: 1, image: "/images/project1/6.webp" },
      { id: 2, image: "/images/project1/7.webp" },
      { id: 2, image: "/images/project1/8.webp" },
      { id: 2, image: "/images/project1/9.webp" },
      { id: 2, image: "/images/project1/10.webp" },
      { id: 2, image: "/images/project1/11.webp" },
      { id: 2, image: "/images/project1/12.webp" },
      { id: 2, image: "/images/project1/13.webp" },
      { id: 2, image: "/images/project1/14.webp" },
      { id: 2, image: "/images/project1/15.webp" },
      { id: 2, image: "/images/project1/16.webp" },
    ],
    wideImage: "/images/project1/6.webp",
    InlineDescription:
      "Experience the pinnacle of modern living with our construction project, seamlessly blending sleek design and practical functionality for elevated standards of comfort and luxury.",
  },
];

export const sectors = [
  {
    title: "Sector Title",
    icon: "/images/svg/bridge.svg",
    text: "We offers substantial construction experience, competitive pricing, financial strength, integrity and a commitment to your project that is supported by a foundation of quality and workplace safety.",
  },
  {
    title: "Sector Title",
    icon: "/images/svg/buildings.svg",
    text: "We offers substantial construction experience, competitive pricing, financial strength, integrity and a commitment to your project that is supported by a foundation of quality and workplace safety.",
  },
  {
    title: "Sector Title",
    icon: "/images/svg/factory.svg",
    text: "We offers substantial construction experience, competitive pricing, financial strength, integrity and a commitment to your project that is supported by a foundation of quality and workplace safety.",
  },
];
