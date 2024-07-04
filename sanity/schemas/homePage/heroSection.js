export default {
  type: "object",
  name: "heroSection",
  title: "Hero Section",
  fields: [
    {
      name: "bgImage",
      title: "Background Image",
      type: "image",
    },
    {
      name: "sliderImages",
      title: "Slider Images",
      type: "array",
      of: [{ type: "image" }],
    },
    {
      name: "title",
      title: "Main Title",
      type: "string",
    },
    {
      name: "changingWords",
      title: "Changing Words",
      type: "array",
      of: [{ type: "string" }],
    },
    {
      name: "buttonText",
      title: "Button Text",
      type: "string",
    },
    {
      name: "buttonLink",
      title: "Button Link",
      type: "string",
    },
  ],
};
