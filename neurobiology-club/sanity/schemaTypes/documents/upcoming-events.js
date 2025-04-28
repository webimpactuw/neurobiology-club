export default {
  name: "upcoming events",
  title: "upcoming events",
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
      type: "String",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "time",
      title: "Time",
      type: "time",
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
      type: "image,"
    },
    {
      name: "description",
      title: "Description",
      type: "string",
    },
    {
      name: "link",
      title: "Link",
      type: "link"
    }
  ]
}