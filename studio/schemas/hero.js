export default {
  name: 'hero',
  title: 'Hero',
  type: 'object',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string'
    },
    {
      name: 'subTitle',
      title: 'Subtitle',
      type: 'blockText'
    },
    {
      name: 'mainImage',
      title: 'Main Image',
      type: 'mainImage'
    },
    {
      name: 'buttons',
      title: 'Buttons',
      type: 'array',
      of: [{ type: 'button' }]
    }
  ],
  options: {
    collapsible: true
  }
}
