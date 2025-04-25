export default {
  name: "people",
  title: "People",
  type: "document",
  fields: [
    {
      name: "image",
      title: "Image",
      type: "image",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "name",
      title: "Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "role",
      title: "Role",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "order",
      title: "order",
      type: "number",
    }
  ]
}