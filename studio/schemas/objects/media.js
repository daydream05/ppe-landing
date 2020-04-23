export default {
  title: 'Media',
  name: 'media',
  type: 'object',
  fields: [
    {
      name: 'linkedMedia',
      title: 'Linked media',
      type: 'reference',
      to: [{ type: 'photo' }, { type: 'video' }]
    },
    {
      name: 'overlay',
      title: 'Overlay',
      type: 'string',
      options: {
        list: [
          { title: 'None', value: 'none' },
          { title: 'Dark', value: 'dark' },
          { title: 'Gradient', value: 'gradient' }
        ]
      }
    },
    {
      name: 'isMediaHeightEnabled',
      title: 'Use media height',
      type: 'boolean',
    }
  ]
}
