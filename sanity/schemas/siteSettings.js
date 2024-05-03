export default {
  name: "siteSettings",
  title: "Site Settings",
  type: "document",
  fields: [
    {
      name: "websiteName",
      title: "Website Name",
      type: "string",
    },
    {
      name: "websiteDescription",
      title: "Website Description",
      description: "Please Keep The Title 155-160 Characters Long",
      type: "string",
    },
    {
      name: "logo",
      title: "Logo",
      type: "image",
      options: {
        hotspot: true,
      },
    },
  ],
};
