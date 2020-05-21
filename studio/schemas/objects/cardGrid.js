import { CardGridPreview } from '../../src/previews/portable-text-blocks/card-grid-preview'

export default {
  name: 'cardGrid',
  title: 'Card Grid',
  type: 'object',
  fields: [
    {
      name: 'cards',
      title: 'Cards',
      type: 'array',
      of: [{ type: 'card' }]
    }
  ],
  preview: {
    select: { cards: 'cards' },
    component: CardGridPreview,
  }
}
