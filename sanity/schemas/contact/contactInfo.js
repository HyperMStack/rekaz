export default {
  name: "contactInfo",
  title: "Contact Info",
  type: "object",
  fields: [
    {
      name: "contactFields",
      title: "Contact Fields",
      type: "array",
      of: [{ type: "contactInfoRecord" }],
    },
  ],
};
