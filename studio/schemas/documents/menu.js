export default {
  name: 'menu',
  title: 'Menu',
  type: 'document',
  __experimental_actions: ['update', 'publish', /* 'create', 'delete' */],
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'items',
      title: 'Items',
      type: 'array',
      of: [{
        type: 'menuItem',
      }],
    }
  ],
  initialValue: {
    title: 'Main menu'
  }
}