export default {
  name: "contact",
  title: "Contact Section",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "contactInfo",
      title: "Contact Info",
      type: "array",
      of: [{ type: "contactInfo" }],
    },
    {
      name: "socialLinks",
      title: "Social Links",
      type: "array",
      of: [{ type: "socialLink" }],
    },
    {
      name: "email",
      title: "Website Email",
      description: "Enter Your Email",
      type: "string",
    },
  ],
};
