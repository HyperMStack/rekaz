export default {
  type: "object",
  name: "projectInfo",
  title: "Project Info",
  fields: [
    {
      name: "description",
      title: "Description",
      type: "text",
      rows: 4,
    },
    {
      name: "numberFloors",
      title: "Number Of Floors",
      type: "number",
    },
    {
      name: "areaSize",
      title: "Area Size",
      type: "number",
    },
    {
      name: "location",
      title: "Location",
      type: "string",
    },
  ],
};
