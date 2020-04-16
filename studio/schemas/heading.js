/**
 * This is the schema definition for the rich text fields used for
 * for this blog studio. When you import it in schemas.js it can be
 * reused in other parts of the studio with:
 *  {
 *    name: 'someName',
 *    title: 'Some title',
 *    type: 'blockContent'
 *  }
 */
export default {
  title: 'Heading',
  name: 'heading',
  type: 'object',
  fields: [
    {
      name: 'text',
      title: 'Title',
      type: 'string'
    },
    {
      name: 'headingType',
      title: 'Heading Type',
      type: 'string',
      description: 'All headings will be h2 by default on the frontend if not specified',
      options: {
        list: [
          { title: 'H2', value: 'h2' },
          { title: 'H3', value: 'h3' },
          { title: 'H4', value: 'h4' },
          { title: 'H5', value: 'h5' },
          { title: 'H6', value: 'h6' },
        ]
      }
    }
  ]
}
