export default {
  name: "navLink",
  title: "Navigation Link",
  type: "object",
  fields: [
    { name: "label", title: "Label", type: "string" },
    { name: "link", title: "Link", type: "url" },
    {
      name: "children",
      title: "Sub Nav",
      type: "array",
      of: [{ type: "navLink" }],
    },
  ],
};
