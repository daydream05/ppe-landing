export default {
  title: 'Section',
  name: 'section',
  type: 'object',
  fields: [
    {
      name: 'heading',
      title: 'Heading',
      type: 'heading',
    },
    {
      name: 'body',
      title: 'Body',
      type: 'blockContent',
    }
  ],
  preview: {
    select: {
      heading: 'heading',
    },
    prepare ({ heading = {} }) {
      return {
        title: heading.text || 'No title',
      }
    }
  }
}