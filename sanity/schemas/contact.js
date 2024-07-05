export default {
  name: "contact",
  title: "Contact",
  type: "document",
  fields: [
    { name: "title", title: "Title", type: "string", hidden: true },
    {
      name: "contactInfo",
      title: "Contact Info",
      type: "contactInfo",
    },
    {
      name: "socialLinks",
      title: "Social Links",
      type: "socialLinks",
    },
    {
      name: "language",
      type: "string",
      readOnly: true,
      hidden: true,
    },
  ],
};
