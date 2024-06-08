export async function isUniqueOtherThanLanguage(slug, context) {
  const { document, getClient } = context;
  if (!document?.language) {
    return true;
  }
  const client = getClient({ apiVersion: "2024-05-03" });
  const id = document._id.replace(/^drafts\./, "");
  const params = {
    draft: `drafts.${id}`,
    published: id,
    language: document.language,
    slug,
  };
  const query = `!defined(*[
    !(_id in [$draft, $published]) &&
    slug.current == $slug &&
    language == $language
  ][0]._id)`;
  const result = await client.fetch(query, params);
  return result;
}

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
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
        isUnique: isUniqueOtherThanLanguage,
      },
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
