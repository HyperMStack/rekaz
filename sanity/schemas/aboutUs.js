export default {
  name: "aboutUs",
  title: "About Us",
  type: "document",
  fields: [
    { name: "title", title: "Title", type: "string" },
    {
      name: "companyDescription",
      title: "Company Description",
      type: "string",
    },
    {
      name: "messages",
      title: "Messages",
      type: "array",
      of: [{ type: "message" }],
    },
    {
      name: "ourTeam",
      title: "Team Memebers",
      type: "teamMembers",
    },
    // {
    //   name: "ourPartners",
    //   title: "Our Partners",
    //   type: "ourPartners",
    // },
    {
      name: "language",
      type: "string",
      readOnly: true,
      hidden: true,
    },
  ],
};
