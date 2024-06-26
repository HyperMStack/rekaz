export default {
  name: "socialLinks",
  title: "Social Links",
  type: "object",
  fields: [
    {
      name: "socialLinksRecord",
      title: "Social Links Record",
      type: "array",
      of: [{ type: "socialLinksRecord" }],
    },
  ],
};
