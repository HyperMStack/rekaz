export default {
  name: "contactInfo",
  title: "Contact Info",
  type: "object",
  fields: [
    {
      name: "text",
      title: "Text",
      description: "The Text Showing",
      type: "string",
    },
    {
      name: "icon",
      title: "Icon",
      type: "image",
    },
    {
      name: "link",
      title: "Link",
      description: "The Actual Link",
      type: "url",
      validation: (Rule) =>
        Rule.uri({
          scheme: ["http", "https", "mailto", "tel"],
        }),
    },
  ],
};
