export default {
  type: "document",
  name: "termsOfService",
  title: "Terms Of Service",
  fields: [
    {
      name: "title",
      title: "Main Title",
      type: "string",
      hidden: true,
    },
    {
      name: "content",
      title: "Page's Content",
      type: "array",
      of: [{ type: "block" }],
    },
  ],
};
