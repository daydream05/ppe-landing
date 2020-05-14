export default {
  name: 'buttonGroup',
  title: 'Button Group',
  type: 'object',
  fields: [
    {
      name: 'buttons',
      title: 'Buttons',
      type: 'array',
      of: [{ type: 'button' }],
    },
    {
      name: 'position',
      title: 'Position',
      type: 'string',
      description: 'Defaults to left',
      options: {
        list: [
          { title: 'left', value: 'left' },
          { title: 'center', value: 'center'},
        ]
      }
    },
    {
      name: 'layout',
      title: 'Layout',
      type: 'string',
      description: `Defaults to row`,
      options: {
        list: [
          { title: 'row', value: 'row' },
          { title: 'column', value: 'column' },
        ]
      }
    }
  ]
}