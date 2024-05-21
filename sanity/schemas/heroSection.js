export default {
  type: "object",
  name: "heroSection",
  title: "Hero Section",
  fields: [
    {
      name: "bgImage",
      type: "image",
      title: "Background Image",
    },
    {
      name: "title",
      type: "string",
      title: "Main Title",
    },
    {
      name: "changingWords",
      type: "array",
      title: "Changing Words",
      of: [{ type: "string" }],
    },
    {
      name: "buttonText",
      type: "string",
      title: "Button Text",
    },
    {
      name: "buttonLink",
      type: "string",
      title: "Button Link",
    },
  ],
};
