export default {
  name: 'socialMedia',
  title: 'Social Media',
  type: 'document',
  fields: [
    {
      name: 'network',
      title: 'Network',
      type: 'string',
      options: {
        list: [
          { title: 'Twitter', value: 'twitter' },
          { title: 'Github', value: 'github' },
          { title: 'Facebook', value: 'facebook' },
          { title: 'LinkedIn', value: 'linkedin' },
          { title: 'Instagram', value: 'instagram' }
        ]
      },
      validation: Rule => [
        Rule.required(),
      ]
    },
    {
      name: 'link',
      title: 'Url link',
      type: 'url'
    },
    {
      name: 'handle',
      title: 'User handle',
      type: 'string',
      description: 'Social media alias. e.g. @your.name'
    }
  ]
}
