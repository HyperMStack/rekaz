/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `\src\pages\admin\[[...index]].jsx` route
 */

import { visionTool } from "@sanity/vision";
import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";

// Go to https://www.sanity.io/docs/api-versioning to learn how API versioning works
import { apiVersion, dataset, projectId } from "./sanity/env";
import { schema } from "./sanity/schema";
import { documentInternationalization } from "@sanity/document-internationalization";

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
            S.documentTypeListItem("projectPage").title("Projects"),
            singelton(S, "Home Page", "homePage"),
            singelton(S, "Navigation Links", "navLinks"),
            singelton(S, "Footer Links", "footerLinks"),
            singelton(S, "Contact Information", "contact"),
            singelton(S, "Website Settings", "settings"),
          ]),
    }),
    // Vision is a tool that lets you query your content with GROQ in the studio
    // https://www.sanity.io/docs/the-vision-plugin
    visionTool({ defaultApiVersion: apiVersion }),
    documentInternationalization({
      supportedLanguages: [
        { id: "ar", title: "Arabic", isDefault: true },
        { id: "en", title: "English" },
      ],
      schemaTypes: ["homePage", "projectPage"],
    }),
  ],
});
