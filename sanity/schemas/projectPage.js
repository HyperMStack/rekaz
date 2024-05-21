export default {
  type: "document",
  name: "projectPage",
  title: "Projects",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "projectHero",
      title: "Main Image",
      type: "projectHeroSection",
    },
    {
      name: "projectInformation",
      title: "Project Information",
      type: "projectInfo",
    },
    {
      name: "projectImageSet",
      title: "Project Image Set",
      type: "projectImageSet",
    },
    {
      name: "projectInlineDescription",
      title: "Inline Description",
      type: "inlineDescription",
    },
    {
      name: "projectSliderImages",
      title: "Slider Images",
      type: "sliderImages",
    },
  ],
};
