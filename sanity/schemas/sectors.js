export default {
  name: "sectors",
  title: "Sectors",
  type: "document",
  fields: [
    {
      name: "image",
      title: "Image",
      type: "image",
      Option: { hotspot: true },
    },
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "description",
      title: "Description",
      type: "text",
    },
  ],
};
