export default {
  type: "document",
  name: "privacyPolicy",
  title: "Privacy Policy",
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
    {
      name: "language",
      type: "string",
      readOnly: true,
      hidden: true,
    },
  ],
};
