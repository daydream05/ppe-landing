import { TextColumn } from '../../src/previews/portable-text-blocks/text-column'

export default {
  title: 'Text Column',
  name: 'textColumn',
  type: 'object',
  fields: [
    {
      name: 'columnCount',
      title: 'Column Count',
      type: 'number'
    },
    {
      name: 'body',
      title: 'Body',
      type: 'blockText'
    }
  ],
  preview: {
    select: { body: 'body', columnCount: 'columnCount' },
    component: TextColumn
  }
}
