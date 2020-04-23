export default {
  name: 'pageSettings',
  title: 'Page Settings',
  type: 'object',
  fields: [
    {
      name: 'hideHeader',
      title: 'Hide header',
      type: 'boolean',
    },
    {
      name: 'headerLinkColor',
      title: 'Header link color',
      type: 'string',
      description: 'Selecting a link color would make it unaffected by dark mode. Use it when the background and header have low contrast. Default is dark.',
      options: {
        list: [
          { title: 'dark', value: 'dark' },
          { title: 'light', value: 'light' },
        ]
      }
    }
  ],
  options: {
    collapsible: true
  }
}