import { defineField, defineType } from "sanity";

export const siteSettings = defineType({
  name: "siteSettings",
  title: "Site Settings",
  type: "document",
  fields: [
    defineField({
      name: "resumeUrl",
      title: "Resume URL",
      type: "url",
      description: "Public link to your latest resume/CV (Google Drive, Dropbox, etc.)",
      validation: (Rule) =>
        Rule.required().uri({
          scheme: ["http", "https"],
        }),
    }),
  ],
});

