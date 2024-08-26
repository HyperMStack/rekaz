export default {
  name: "ourPartners",
  title: "Our Partners",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "ourPartners",
      title: "Our Partners",
      type: "array",
      of: [{ type: "partner" }],
    },
  ],
};
