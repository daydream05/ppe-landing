import { SectionPreview } from "../src/previews/portable-text-blocks/section"

export default {
  title: 'Section',
  name: 'section',
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
      name: 'layout',
      title: 'Layout',
      type: 'string',
      options: {
        list: [
          { title: 'Basic', value: 'basic' },
          { title: 'Content with media on the right', value: 'contentWithMediaRight' },
          { title: 'Content with media on the left', value: 'contentWithMediaLeft' },
          { title: 'Content with full screen media', value: 'contentWithFullScreenMedia' }
        ]
      }
    },
    {
      name: 'media',
      title: 'Media',
      type: 'media',
    }
  ],
  preview: {
    select: {
      heading: 'heading',
      body: 'body',
    },
    prepare ({ heading = {}, body }) {
      return {
        title: heading.text || 'No title',
        body: body,
      }
    },
    component: SectionPreview,
  }
}
