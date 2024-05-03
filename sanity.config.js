/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `\src\pages\admin\[[...index]].jsx` route
 */

import { visionTool } from "@sanity/vision";
import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";

// Go to https://www.sanity.io/docs/api-versioning to learn how API versioning works
import { apiVersion, dataset, projectId } from "./sanity/env";
import { schema } from "./sanity/schema";

const singelton = (S, name, id) => {
  return (
    // Our singleton type has a list item with a custom child
    S.listItem().title(name).id(id).child(
      // Instead of rendering a list of documents, we render a single
      // document, specifying the `documentId` manually to ensure
      // that we're editing the single instance of the document
      S.document().schemaType(id).documentId(id)
    )
  );
};

export default defineConfig({
  basePath: "/admin",
  projectId,
  dataset,
  // Add and edit the content schema in the './sanity/schema' folder
  schema,
  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title("Content")
          .items([
            singelton(S, "Site Settings", "siteSettings"),
            singelton(S, "Home Page's Main", "hero"),
            singelton(S, "Stats Section", "statsSection"),
            S.documentTypeListItem("sectors").title("Sectors"),
            singelton(S, "Contact Info", "contact"),
            singelton(S, "Navigation Links", "navLinks"),
            singelton(S, "Footer Links", "footerLinks"),
          ]),
    }),
    // Vision is a tool that lets you query your content with GROQ in the studio
    // https://www.sanity.io/docs/the-vision-plugin
    visionTool({ defaultApiVersion: apiVersion }),
  ],
});
