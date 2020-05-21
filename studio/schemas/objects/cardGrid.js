export default {
  name: 'cardGrid',
  title: 'Card Grid',
  type: 'object',
  fields: [
    {
      name: 'cards',
      title: 'Cards',
      type: 'array',
      of: [
        { type: 'card' }
      ]
    }
  ]
}