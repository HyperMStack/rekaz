export default {
  name: "footerLinks",
  title: "Footer Links",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "links",
      title: "Links",
      type: "array",
      of: [{ type: "footerLink" }],
    },
  ],
};
