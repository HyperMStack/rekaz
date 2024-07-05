export default {
  type: "document",
  name: "homePage",
  title: "Home Page",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      hidden: true,
    },
    {
      name: "heroSection",
      title: "Hero Section",
      type: "heroSection",
    },
    {
      name: "sectorsSection",
      title: "Sectors Section",
      type: "sectorsSection",
    },
    {
      name: "statsSection",
      title: "Stats Section",
      type: "statsSection",
    },
    {
      name: "language",
      type: "string",
      readOnly: true,
      hidden: true,
    },
  ],
};
