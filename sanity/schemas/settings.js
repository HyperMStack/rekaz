export default {
  type: "document",
  name: "settings",
  title: "Settings",
  fields: [
    {
      name: "websiteName",
      title: "Website Title",
      type: "string",
    },
    {
      name: "ogLogo",
      title: "Logo Thumbnail",
      type: "image",
      hidden: true,
    },
    {
      name: "websiteURL",
      title: "Website's Link",
      type: "url",
    },
    {
      name: "websiteDescription",
      title: "Website Description",
      type: "string",
    },
    {
      name: "logo",
      title: "Logo",
      type: "image",
    },
  ],
};
