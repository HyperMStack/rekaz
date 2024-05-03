export default {
  name: "stat",
  title: "Stat",
  type: "object",
  fields: [
    {
      name: "number",
      title: "Number",
      type: "number",
    },
    {
      name: "text",
      title: "Text",
      type: "string",
    },
    {
      name: "symbol",
      title: "Symbol",
      description: "to add a symbol at the end of the number",
      type: "string",
    },
  ],
};
