export default {
  title: 'Spacer',
  name: 'spacer',
  type: 'object',
  fields: [
    {
      name: 'value',
      type: 'number',
      description: `Defaults to 64px`,
      options: {
        list: [
          { title: '2', value: 0 },
          { title: '4', value: 1 },
          { title: '8', value: 2 },
          { title: '16', value: 3 },
          { title: '32', value: 4 },
          { title: '64', value: 5 },
          { title: '128', value: 6 },
          { title: '256', value: 7 }
        ]
      }
    }
  ],
  preview: {
    select: {
      value: 'value',
    },
    prepare ({ value = '64px' }) {
      return {
        title: 'Spacer',
      }
    }
  }
}
