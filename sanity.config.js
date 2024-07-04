import { visionTool } from "@sanity/vision";
import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";

import { apiVersion, dataset, projectId } from "./sanity/env";
import { schema } from "./sanity/schema";
import { documentInternationalization } from "@sanity/document-internationalization";
import myLogo from "./sanity/logo/logo";

const singelton = (S, name, id) => {
  return S.listItem()
    .title(name)
    .id(id)
    .child(S.document().schemaType(id).documentId(id));
};

export default defineConfig({
  icon: myLogo,
  basePath: "/admin",
  projectId,
  dataset,
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
            singelton(S, "Privacy Policy", "privacyPolicy"),
            singelton(S, "Terms of Service", "termsOfService"),
          ]),
    }),
    visionTool({ defaultApiVersion: apiVersion }),
    documentInternationalization({
      supportedLanguages: [
        { id: "ar", title: "Arabic", isDefault: true },
        { id: "en", title: "English" },
      ],
      schemaTypes: [
        "homePage",
        "projectPage",
        "navLinks",
        "footerLinks",
        "contact",
        "settings",
        "privacyPolicy",
        "termsOfService",
      ],
    }),
  ],
});
