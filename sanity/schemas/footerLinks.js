export default {
  type: "document",
  name: "footerLinks",
  title: "Footer Links",
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
      of: [{ type: "footerLink" }],
    },
  ],
};
