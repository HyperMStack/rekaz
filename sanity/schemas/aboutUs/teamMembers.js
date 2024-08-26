export default {
  name: "teamMembers",
  title: "Team Members",
  type: "document",
  fields: [
    { name: "title", title: "Title", type: "string" },
    { name: "description", title: "Description", type: "text" },
    {
      name: "members",
      title: "Members",
      type: "array",
      of: [{ type: "teamMember" }],
    },
  ],
};
