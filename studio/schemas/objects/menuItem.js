export default {
  name: 'menuItem',
  title: 'Menu item',
  type: 'object',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'linkedPage',
      title: 'Linked page',
      type: 'reference',
      to: [{ type: 'page' }]
    }
  ]
}
