export default {
  title: 'Hero - Basic',
  name: 'heroBasic',
  type: 'object',
  description: 'Hero section with an image, content. Please add an h1 tag at all times.',
  fields: [
    {
      name: 'mainImage',
      title: 'Main Image',
      type: 'mainImage',
    },
    {
      name: 'content',
      title: 'Block',
      type: 'blockHero',
      description: 'Please add an h1 tag at all times',
    },
  ]
}
