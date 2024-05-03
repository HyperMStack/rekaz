export default {
  name: "hero",
  title: "Home Page's Main",
  type: "document",
  fields: [
    {
      name: "heroImage",
      title: "Main Image",
      type: "image",
    },
    {
      name: "heroText",
      title: "Main Text",
      type: "string",
    },
    {
      name: "typedText",
      title: "Changeing Text",
      type: "array",
      of: [{ type: "string" }],
    },
    {
      name: "heroButtonText",
      title: "Main Button Text",
      type: "string",
    },
  ],
};
