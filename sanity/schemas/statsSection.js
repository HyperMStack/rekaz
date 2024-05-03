export default {
  name: "statsSection",
  title: "Stats Description",
  type: "document",
  fields: [
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
    { name: "stats", title: "Stats", type: "array", of: [{ type: "stat" }] },
  ],
};
