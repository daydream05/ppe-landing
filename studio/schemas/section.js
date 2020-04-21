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
    },
    {
      name: 'theme',
      title: 'Theme',
      type: 'string',
      options: {
        list: [
          { title: 'Dark', value: 'dark'},
          { title: 'Light', value: 'light'},
        ]
      }
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