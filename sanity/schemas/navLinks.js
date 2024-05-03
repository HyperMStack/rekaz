export default {
  name: "navLinks",
  title: "Navigation Links",
  type: "document",
  fields: [
    { name: "title", title: "Title", type: "string" },
    { name: "links", title: "Links", type: "array", of: [{ type: "navLink" }] },
  ],
};
