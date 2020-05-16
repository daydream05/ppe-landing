import { SectionPreview } from '../../src/previews/portable-text-blocks/section'

export default {
  title: 'Section With Cards',
  name: 'sectionWithCards',
  type: 'object',
  fields: [
    {
      name: 'heading',
      title: 'Heading',
      type: 'heading'
    },
    {
      name: 'body',
      title: 'Body',
      type: 'blockContent'
    },
    {
      name: 'theme',
      title: 'Theme',
      type: 'string',
      options: {
        list: [
          { title: 'Dark', value: 'dark' },
          { title: 'Light', value: 'light' },
          { title: 'Shadow Green', value: 'shadowGreen' }
        ]
      }
    },
    {
      name: 'cards',
      title: 'Cards',
      type: 'array',
      of: [
        { type: 'card', }
      ]
    },
  ],
  preview: {
    select: {
      heading: 'heading',
      body: 'body'
    },
    prepare ({ heading = {}, body }) {
      return {
        title: heading.text || 'No title',
        body: body
      }
    },
    component: SectionPreview
  }
}
