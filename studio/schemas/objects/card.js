export default {
  name: 'card',
  title: 'Card',
  type: 'object',
  fields: [
    {
      name: 'heading',
      title: 'Heading',
      type: 'heading',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'blockText',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'mainImage',
    },
    {
      name: 'buttonGroup',
      title: 'Button Group',
      type: 'buttonGroup',
    }
  ],
  preview: {
    select: {
      title: 'heading.text',
      subtitle: 'description',
    },
    prepare (data) {
      return {
        title: data.title,
      }
    }
  },
}
