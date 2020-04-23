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
      description: 'Turn this on if you want the full image to be shown.',
      type: 'boolean'
    },
    {
      name: 'position',
      title: 'Media position',
      type: 'string',
      description: 'Used for images. Position is relative to the current location. Centered by default',
      options: {
        list: [
          { title: 'Left', value: 'left' },
          { title: 'Right', value: 'right' },
          { title: 'Center', value: 'center' }
        ]
      }
    }
  ]
}
