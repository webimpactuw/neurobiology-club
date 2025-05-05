export default {
  name: "events",
  title: "Events",
  type: "document",
  fields: [
    {
      name: "date",
      title: "Date",
      type: "date",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "name",
      title: "Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "location",
      title: "Location",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "time",
      title: "Time",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "type",
      title: "Type",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "image",
      title: "Image",
      type: "image"
    },
    {
      name: "description",
      title: "Description",
      type: "text",
    },
    {
      name: "link",
      title: "Link",
      type: "url"
    }
  ]
}