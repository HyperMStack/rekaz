export default {
  type: "document",
  name: "navLinks",
  title: "Nav Links",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      hidden: true,
    },
    {
      name: "links",
      title: "Links",
      type: "array",
      of: [{ type: "navLink" }],
    },
    {
      name: "language",
      type: "string",
      readOnly: true,
      hidden: true,
    },
  ],
};
