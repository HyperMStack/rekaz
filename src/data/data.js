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
  { id: 1, label: "Latest Projects", href: "#projects" },
  { id: 2, label: "Privacy Policy", href: "#" },
  { id: 3, label: "Terms of Service", href: "#" },
];

export const heroData = {
  image: "/images/124_1.webp",
  text: "Build. Invest.",
  typedText: ["Suceed.", "Innovate."],
  buttonText: "Contact Us",
};

export const projects = [
  {
    id: 1,
    coverImage: "/images/privateVilla/2.webp",
    title: "Private Villa",
    slug: "private-villa",
    keywords: "",
    description:
      "Embark on a modern construction venture with a two-floor structure on a spacious plot spanning 3646 square meters. Embrace innovation and functionality as we craft a dynamic space tailored to your needs. From efficient layout designs to meticulous attention to detail, our project promises to deliver a harmonious blend of form and function, setting new standards in contemporary living.",
    floorNr: "2",
    areaSize: "3646",
    location: "Imti",
    imageSet_1: [
      {
        id: 1,
        image: "/images/privateVilla/7.webp",
        caption: "this is a capption for the image Image",
      },
      { id: 2, image: "/images/privateVilla/3.webp", caption: "" },
    ],
    imageSet_2: [
      { id: 1, image: "/images/privateVilla/4.webp", caption: "" },
      { id: 2, image: "/images/privateVilla/5.webp", caption: "" },
    ],
    sliderImages: [
      { id: 1, image: "/images/privateVilla/6.webp" },
      { id: 2, image: "/images/privateVilla/7.webp" },
      { id: 3, image: "/images/privateVilla/1.webp" },
      { id: 4, image: "/images/privateVilla/2.webp" },
      { id: 5, image: "/images/privateVilla/3.webp" },
      { id: 6, image: "/images/privateVilla/4.webp" },
      { id: 7, image: "/images/privateVilla/5.webp" },
      { id: 8, image: "/images/privateVilla/6.webp" },
      { id: 9, image: "/images/privateVilla/7.webp" },
    ],
    // wideImage: "/images/project1/6.webp",
    InlineDescription:
      "Experience the pinnacle of modern living with our construction project, seamlessly blending sleek design and practical functionality for elevated standards of comfort and luxury.",
  },
  {
    id: 2,
    coverImage: "/images/project2/1.webp",
    title: "Project Title 1",
    slug: "project-title-1",
    keywords: "",
    description:
      "Embark on a modern construction venture with a two-floor structure on a spacious plot spanning 3200 square meters in the vibrant neighborhood of Qurum, Muscat, Oman. Embrace innovation and functionality as we craft a dynamic space tailored to your needs. From efficient layout designs to meticulous attention to detail, our project promises to deliver a harmonious blend of form and function, setting new standards in contemporary living.",
    floorNr: "2",
    areaSize: "3200",
    location: "Qurum",
    imageSet_1: [
      {
        id: 1,
        image: "/images/project2/2.webp",
        caption: "this is a capption for the image Image",
      },
      { id: 2, image: "/images/project2/3.webp", caption: "" },
    ],
    imageSet_2: [
      { id: 1, image: "/images/project2/4.webp", caption: "" },
      { id: 2, image: "/images/project2/1.webp", caption: "" },
    ],
    sliderImages: [
      { id: 1, image: "/images/project2/1.webp" },
      { id: 2, image: "/images/project2/2.webp" },
      { id: 3, image: "/images/project2/3.webp" },
      { id: 4, image: "/images/project2/4.webp" },
      { id: 5, image: "/images/project2/1.webp" },
      { id: 6, image: "/images/project2/2.webp" },
      { id: 7, image: "/images/project2/3.webp" },
      { id: 8, image: "/images/project2/4.webp" },
    ],
    // wideImage: "/images/project1/6.webp",
    InlineDescription:
      "Discover unparalleled modern living with our construction project in Qurum, Muscat. Seamlessly merging sleek design and practical functionality, we offer elevated comfort and luxury for the discerning homeowner.",
  },
  {
    id: 3,
    coverImage: "/images/project1/1.webp",
    title: "Ghubrah Heights",
    slug: "ghubrah-heights",
    keywords: "",
    description:
      "Embark on a groundbreaking construction journey in Al Ghubrah, Muscat, Oman. This two-floor project spans 3800 square meters, offering a blend of innovation and practicality. From custom layout designs to meticulous craftsmanship, we promise to deliver a space tailored to your lifestyle needs, setting new benchmarks in contemporary living.",
    floorNr: "2",
    areaSize: "3800",
    location: "Al Ghubrah, Muscat",
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
      { id: 3, image: "/images/project1/8.webp" },
      { id: 4, image: "/images/project1/9.webp" },
      { id: 5, image: "/images/project1/10.webp" },
      { id: 6, image: "/images/project1/11.webp" },
      { id: 7, image: "/images/project1/12.webp" },
      { id: 8, image: "/images/project1/13.webp" },
      { id: 9, image: "/images/project1/14.webp" },
      { id: 10, image: "/images/project1/15.webp" },
      { id: 11, image: "/images/project1/16.webp" },
    ],
    // wideImage: "/images/project1/6.webp",
    InlineDescription:
      "Discover unparalleled modern living with our construction project in Qurum, Muscat. Seamlessly merging sleek design and practical functionality, we offer elevated comfort and luxury for the discerning homeowner.",
  },
  {
    id: 4,
    coverImage: "/images/alHusain/1.webp",
    title: "Al Mouj Oasis",
    slug: "al-mouj-oasis",
    keywords: "",
    description:
      "Welcome to a visionary development in the prestigious Al Mouj community, Muscat, Oman. Spanning 4200 square meters across two floors, this project epitomizes modern living. With a focus on innovation and practicality, we're crafting a dynamic space tailored to your lifestyle needs. Expect meticulous attention to detail and a seamless fusion of form and function, setting new standards in luxury living.",
    floorNr: "2",
    areaSize: "4200",
    location: "Al Mouj, Muscat",
    imageSet_1: [
      {
        id: 1,
        image: "/images/alHusain/2.webp",
        caption: "this is a capption for the image Image",
      },
      { id: 2, image: "/images/alHusain/3.webp", caption: "" },
    ],
    imageSet_2: [
      { id: 1, image: "/images/alHusain/4.webp", caption: "" },
      { id: 2, image: "/images/alHusain/5.webp", caption: "" },
    ],
    sliderImages: [
      { id: 1, image: "/images/alHusain/6.webp" },
      { id: 2, image: "/images/alHusain/7.webp" },
      { id: 3, image: "/images/alHusain/8.webp" },
      { id: 4, image: "/images/alHusain/9.webp" },
      { id: 5, image: "/images/alHusain/10.webp" },
      { id: 6, image: "/images/alHusain/11.webp" },
      { id: 7, image: "/images/alHusain/12.webp" },
      { id: 8, image: "/images/alHusain/13.webp" },
    ],
    // wideImage: "/images/project1/6.webp",
    InlineDescription:
      "Discover unparalleled sophistication in our Al Mouj project. With sleek design and functional elegance, we're setting new benchmarks for luxury living in Muscat.",
  },
  {
    id: 5,
    coverImage: "/images/project3/1.webp",
    title: "Royal Residence",
    slug: "royal-residence",
    keywords: "",
    description:
      "Experience the epitome of modernity in Madinat Al Sultan Qaboos, Muscat, Oman. Our two-floor construction project spans 3500 square meters, offering a perfect blend of innovation and functionality. With tailored designs and meticulous craftsmanship, we promise to create a space that exceeds your expectations, redefining luxury living in the heart of Muscat.",
    floorNr: "2",
    areaSize: "3500",
    location: "Madinat Al Sultan Qaboos, Muscat",
    imageSet_1: [
      {
        id: 1,
        image: "/images/project3/2.webp",
        caption: "this is a capption for the image Image",
      },
      { id: 2, image: "/images/project3/3.webp", caption: "" },
    ],
    imageSet_2: [
      { id: 1, image: "/images/project3/4.webp", caption: "" },
      { id: 2, image: "/images/project3/5.webp", caption: "" },
    ],
    sliderImages: [
      { id: 1, image: "/images/project3/6.webp" },
      { id: 2, image: "/images/project3/7.webp" },
      { id: 3, image: "/images/project3/8.webp" },
      { id: 4, image: "/images/project3/9.webp" },
      { id: 5, image: "/images/project3/1.webp" },
      { id: 6, image: "/images/project3/2.webp" },
      { id: 7, image: "/images/project3/3.webp" },
      { id: 8, image: "/images/project3/4.webp" },
      { id: 9, image: "/images/project3/5.webp" },
    ],
    // wideImage: "/images/project1/6.webp",
    InlineDescription:
      "Step into luxury with our Madinat Al Sultan Qaboos project. With sleek design and meticulous attention to detail, we're elevating the standard of living in Muscat.",
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
