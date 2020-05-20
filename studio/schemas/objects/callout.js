import { FiMessageSquare } from 'react-icons/fi'

export default {
  name: 'callout',
  title: 'Callout',
  type: 'object',
  icon: FiMessageSquare,
  fields: [
    { name: 'title', title: 'Title', type: 'string' },
    { name: 'body', title: 'Body', type: 'blockText' },
    {
      name: 'type',
      title: 'Type',
      type: 'string',
      options: {
        list: [
          { title: 'danger', value: 'danger' },
          { title: 'warning', value: 'warning' },
          { title: 'info', value: 'info' },
          { title: 'success', value: 'success' },
        ]
      }
    }
  ]
}
