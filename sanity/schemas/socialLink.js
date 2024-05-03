export default {
  name: "socialLink",
  title: "Social Link",
  type: "object",
  fields: [
    {
      name: "text",
      title: "Text",
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
      type: "url",
      validation: (Rule) =>
        Rule.uri({
          scheme: ["http", "https", "mailto", "tel"],
        }),
    },
  ],
};
