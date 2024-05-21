export default {
  type: "object",
  name: "statsSection",
  Title: "Stats Section",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title",
    },
    {
      name: "description",
      type: "text",
      title: "Description",
      rows: 3,
    },
    {
      name: "stats",
      type: "array",
      title: "Stats",
      of: [{ type: "singleStat" }],
    },
  ],
};
