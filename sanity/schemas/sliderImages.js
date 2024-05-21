export default {
  type: "object",
  name: "sliderImages",
  title: "Slider Images",
  fields: [
    {
      name: "images",
      title: "Images",
      type: "array",
      of: [{ type: "image" }],
    },
  ],
};
